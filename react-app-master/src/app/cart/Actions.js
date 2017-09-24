//helper method

import * as ActionTypes from "./ActionTypes";

export function addItemToCart(product) {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item: {
                id: product.id,
                name: product.name,
                price: product.price,
                qty: 1
            }
        }
    }
}


export function removeItemFromCart(id) {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id: id
        }
    }
}


export function updateItemInCart(id, qty) {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id: id,
            qty: qty
        }
    }
}


export function emptyCart() {
    return {
        type: ActionTypes.EMPTY_CART
    }
}