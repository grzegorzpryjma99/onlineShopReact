import {Product, ProductCategory, SortMode} from "../../components/products/types/types";

export type FetchError = {
    type: 'WRONG_RESPONSE'
    status: number
}

export function isFetchError(err: any): err is FetchError {
    return err.type === 'WRONG_RESPONSE' && err.status !== undefined
}

export function getErrorMsg(err: any): string | null {
    if (isFetchError(err)) {
        if (err.status === 400) {
            return 'Błąd przesłanych danych'
        } else if (err.status === 403) {
            return 'Brak uprawnień'
        }
    }
    return null;
}

export function getWithType<T>(url: string): Promise<T> {
    // @ts-ignore
    return fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        credentials: 'include',
        method: 'GET'
    })
        .then(res => {
                if (!res.ok) {
                    handleErrorReponse(res);
                }
                if (res.status !== 204) {
                    return res.json();
                }
                return res;
            }
        )
}

export function get(url: string) {
    // @ts-ignore
    return fetch(url, {
        method: 'GET'
    })
        .then(res => {
                if (!res.ok) {
                    handleErrorReponse(res);
                }
                if (res.status !== 204) {
                    return res.json();
                }
                return res;
            }
        )
}

export function getPaginatedProductsWithFilter(pageNumber: number, pageSize: number, category: ProductCategory | null, name: string, sortMode: SortMode | null) {
    return get('https://online-shop-api-kappa.vercel.app/api/products').then(res => {
        const startIndex = (pageNumber) * pageSize;
        const endIndex = startIndex + pageSize;
        let filteredProducts: Product[] = res;
        let totalElement = filteredProducts.length;

        if (category !== undefined && category !== null) {
            filteredProducts = filteredProducts.filter(product => {
                return ProductCategory[product.category as keyof typeof ProductCategory] === category.valueOf()
            });
            totalElement = filteredProducts.length;
        }

        if (sortMode !== undefined && sortMode !== null) {
            if (SortMode.Low === sortMode) {
                filteredProducts = filteredProducts.sort((product1, product2) => product1.price - product2.price);
            }
            if (SortMode.High === sortMode) {
                filteredProducts = filteredProducts.sort((product1, product2) => product1.price + product2.price);
            }
            totalElement = filteredProducts.length;
        }

        if (name !== undefined && name !== null && name !== "") {
            filteredProducts = filteredProducts.filter(product => {
                return product.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            });
            totalElement = filteredProducts.length;
        }

        let paginatedProducts: Product[] = filteredProducts.map(product => ({
            ...product,
            category: ProductCategory[product.category as keyof typeof ProductCategory]
        })).slice(startIndex, endIndex);

        return {paginatedProducts, totalElement};
    })
}

export function getProducts() {
    return get('/api/products').then(res => {
        return res;
    })
}

export function del(url: string) {
    // @ts-ignore
    return fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        credentials: 'include',
        method: 'DELETE'
    })
        .then(res => {
                if (!res.ok) {
                    handleErrorReponse(res);
                }
                return res
            }
        )
}

export function put<T>(url: string, data: T) {
    // @ts-ignore
    return fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        credentials: 'include',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
                if (!res.ok) {
                    handleErrorReponse(res);
                }
                return res
            }
        )
}

function handleErrorReponse(res: Response) {
    if (res.status === 401) {
        window.localStorage.removeItem('user');
        window.location.replace('/')
    } else {
        throw {type: 'WRONG_RESPONSE', status: res.status};
    }
}

export function post(url: String, data: Object) {
    // @ts-ignore
    return fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(res => {
            if (!res.ok) {
                handleErrorReponse(res);
            } else if (res.status !== 204) {
                return res.json();
            } else {
                return res;
            }
        }
    )
}

export function postMultipart(url: String, data: FormData) {
    // @ts-ignore
    return fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        method: 'POST',
        credentials: 'include',
        body: data,
    }).then(res => {
            if (!res.ok) {
                handleErrorReponse(res);
            } else {
                return res
            }
        }
    )
}

export function putMultipart(url: String, data: FormData) {
    // @ts-ignore
    return fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        method: 'PUT',
        credentials: 'include',
        body: data,
    }).then(res => {
            if (!res.ok) {
                handleErrorReponse(res);
            } else {
                return res
            }
        }
    )
}

export function getFile(url: string, fileName: string) {
    return fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
            if (res.status !== 200) {
                throw {status: res.status};
            }
            return res.blob()
        }
    ).then(blob => {
        const url = window.URL.createObjectURL(
            new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
    })
}