import {Paginator} from "primereact/paginator";
import React, {useEffect, useState} from "react";
import ProductList from "../ProductList";
import {Product, ProductCategory, SortMode} from "../types/types";
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import {faMagnifyingGlass, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ActionBorderButton from "../../common/button/ActionBorderButton";
import {getPaginatedProductsWithFilter} from "../../../lib/api/Api";
import {Loader} from "../../common/Loader";
import {googleAnalyticsActions} from "../../../utils/google-analytics/google-analytics-init";
import {webVitalActions} from "../../../utils/google-analytics/google-analytics-get-web-vitals";

interface ProductCategoryDropDown {
    name: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
    code: ProductCategory
}

interface SortModeDropDown {
    name: string,
    code: SortMode
}

const categories: ProductCategoryDropDown[] = [
    {name: <p><i className="pi pi-tag"/> Home</p>, code: ProductCategory.HOME},
    {name: <p><i className="pi pi-tag"/> Garden</p>, code: ProductCategory.GARDEN},
];

const sortOptions: SortModeDropDown[] = [
    {name: 'Price High to Low', code: SortMode.High},
    {name: 'Price Low to High', code: SortMode.Low},
];

const ProductsListTemplate = () => {

    const productsOnPage: number = 8;
    const [products, setProducts] = useState<Product[]>([]);
    const [actualPage, setActualPage] = useState<number>(0);
    const [totalElement, setTotalElement] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState<ProductCategoryDropDown | null>(null);
    const [searchProduct, setSearchProduct] = useState<string>("");
    const [sortMode, setSortMode] = useState<SortModeDropDown | null>(null);

    useEffect(() => {
        getProducts();
    }, [actualPage])

    useEffect(() => {
        setActualPage(0)
    }, [sortMode])

    useEffect(() => {
        webVitalActions.sendDataToAnalytics("products");
        webVitalActions.googleAnalyticsGetWebVitals("products");
        webVitalActions.sendDataToGAForWebVitalsReport("products");
        googleAnalyticsActions.initGoogleAnalytics("UA-191680881-1");
    }, []);

    const getProducts = () => {
        getPaginatedProductsWithFilter(
            actualPage,
            productsOnPage,
            selectedCategory != undefined ? selectedCategory.code : null,
            searchProduct,
            sortMode != undefined ? sortMode.code : null,
        ).then(res => {
            setProducts(res.paginatedProducts);
            setTotalElement(res.totalElement)
        });
    }

    const handleFind = () => {
        getProducts();
    }

    const clearFilters = async () => {
        setSelectedCategory(null);
        setSearchProduct("");
        setSortMode(null);
        setActualPage(0)
        getPaginatedProductsWithFilter(
            0,
            productsOnPage,
            null,
            '',
            null,
        ).then(res => {
            setProducts(res.paginatedProducts);
            setTotalElement(res.totalElement)
        });
    }

    return <div className='products-list-template-container'>
        <h2 className='title-h2'>Products</h2>
        <p className='description'>Order it for you or for your beloved ones </p>
        <div className='product-list-search-panel'>
            <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)}
                      options={categories}
                      optionLabel="name" placeholder="Select a Category"
                      showClear
                      filter className="w-full md:w-14rem"/>
            <Dropdown value={sortMode} onChange={(e) => setSortMode(e.value)} options={sortOptions}
                      optionLabel="name"
                      showClear
                      placeholder="Sort By Price"/>
            <div>
                <span style={{width: '100%'}} className="p-input-icon-left">
                    <i className="pi pi-search"/>
                    <InputText value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}
                               placeholder='Search by Name'/>
                </span>
            </div>
            <div className='search-panel-action-buttons-wrapper'>
                <ActionBorderButton icon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        margin: 0,
                                        fontSize: '18px',
                                        background: 'transparent',
                                        border: 'none'
                                    }}
                                    actionFunction={handleFind}
                                    label='Find Product'/>
                <ActionBorderButton icon={<FontAwesomeIcon icon={faX}/>}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        margin: 0,
                                        fontSize: '18px',
                                        background: 'transparent',
                                        border: 'none'
                                    }}
                                    actionFunction={clearFilters}
                                    label='Clear filters'/>
            </div>
        </div>
        {products.length ? <ProductList products={products}/> : <Loader style={{height: '50vh'}}/>}
        <Paginator first={actualPage * productsOnPage} rows={productsOnPage} totalRecords={totalElement}
                   onPageChange={event => setActualPage(event.page)}
                   template={{layout: 'PrevPageLink CurrentPageReport NextPageLink'}}/>
    </div>
}

export default ProductsListTemplate