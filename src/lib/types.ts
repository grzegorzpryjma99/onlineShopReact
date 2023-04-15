export interface OrderInfo {
    details: Details
    shipping: Shipping
    payment: Payment
    couponCode?: string
}

export interface Details {
    contact: string
    shippingAddress: Address
}

export interface Shipping {
    shippingMethod: ShippingMethod | null
}

export interface Payment {
    paymentMethod: PaymentMethod | null
}

export interface Address {
    firstName: string
    lastName: string
    shippingNote?: string
    street: string
    number: number | null
    city: string
    postalCode: string
    country: string
}

export enum ShippingMethod {
    SELF_PICKUP = 'Self Pickup',
    STANDARD_SHIPPING = 'Standard Shipping',
    FREE_SHIPPING = 'Free Shipping'
}

export enum PaymentMethod {
    BLIK = 'Blik',
    BANK_TRANSFER = 'Bank transfer',
}