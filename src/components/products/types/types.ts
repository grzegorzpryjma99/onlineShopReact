export interface Product {
    id: number
    name: string
    description: string
    price: number
    category: ProductCategory
}

export enum ProductCategory {
    HOME = "HOME",
    GARDEN = "GARDEN"
}

export enum SortMode {
    High = "HIGH",
    Low = "LOW"
}
