import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Layout} from "./components/layout/Layout";
import {OnlyContentLayout} from "./components/layout/OnlyContentLayout";
import HomeTemplate from "./components/home/templates/HomeTemplate";
import LearnMoreTemplate from "./components/about/LearnMoreTemplate";
import CartTemplate from "./components/cart/templates/CartTemplate";
import ProductTemplate from "./components/products/templates/ProductTemplate";
import ProductsListTemplate from "./components/products/templates/ProductsListTemplate";
import LoginTemplate from "./components/login/template/LoginTemplate";
import OrderTemplate from "./components/order/templates/OrderTemplate";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePageLayout/>}/>
        <Route path="/produkt/:id" element={<ProductsPageLayout/>}/>
        <Route path="/nasze-produkty" element={<LearnMorePageLayout/>}/>
        <Route path="/koszyk" element={<CartPageLayout/>}/>
        <Route path="/lista-produktow" element={<ProductsListPageLayout/>}/>
        <Route path="/logowanie" element={<LoginPageLayout/>}/>
        <Route path="/zakupy" element={<OrdersPageLayout/>}/>
    </Routes>
);

const LoginPageLayout = () => (
    <OnlyContentLayout title={'Sklep- online'}>
        <LoginTemplate />
    </OnlyContentLayout>
);

const OrdersPageLayout = () => (
    <OnlyContentLayout title={'Sklep- online'}>
        <OrderTemplate />
    </OnlyContentLayout>
);

const HomePageLayout = () => (
    <Layout title={'Sklep- online'}>
        <HomeTemplate />
    </Layout>
);

const ProductsPageLayout = () => (
    <Layout title={'Sklep- online'}>
        <ProductTemplate />
    </Layout>
);

const LearnMorePageLayout = () => (
    <Layout title={'Sklep- online'}>
        <LearnMoreTemplate />
    </Layout>
);

const CartPageLayout = () => (
    <Layout title={'Sklep- online'}>
        <CartTemplate />
    </Layout>
);

const ProductsListPageLayout = () => (
    <Layout title={'Sklep- online'}>
        <ProductsListTemplate />
    </Layout>
);
