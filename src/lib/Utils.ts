import {Address, ShippingMethod} from "./types";

export const getFullAddress = (address: Address): string => {
    return `${address.country}, ${address.postalCode} ${address.city}, ${address.street} ${address.number}`
}

export const paymentMethodToPrice = (shippingMethod: ShippingMethod): string => {
    switch (shippingMethod) {
        case ShippingMethod.FREE_SHIPPING:
            return 'Free'
        case ShippingMethod.SELF_PICKUP:
            return 'Free'
        case ShippingMethod.STANDARD_SHIPPING:
            return '9.99 PLN'
    }
}

export const paymentMethodToIncurredCost = (shippingMethod: ShippingMethod): number => {
    switch (shippingMethod) {
        case ShippingMethod.FREE_SHIPPING:
            return 0
        case ShippingMethod.SELF_PICKUP:
            return 0
        case ShippingMethod.STANDARD_SHIPPING:
            return 9.99
    }
}