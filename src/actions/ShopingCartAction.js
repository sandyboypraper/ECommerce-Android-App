export const ShopingCartItemIncrement = (item) => {
    return {
        type: 'INCREMENT',
        item
    };
}

export const ShopingCartItemDecrement = (item) => {
    
    return {
        type: 'DECREMENT',
        item
    };
}

export const removeFromCart = (id) => {
    return {
        type : 'REMOVEFROMCART',
        id
    }
}

export const EmptyTheCart = () => {
    return {
        type : 'EMPTYTHECART'
    }
}