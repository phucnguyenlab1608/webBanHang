import * as types from './../constants/ActionTypes';


export const litsAll = () => {
    return {
        type: types.LIST_ALL,
    }
};

export const searchPage = (keyword) => {
    return {
        type: types.SEARCH_PAGE,
        keyword
    }
};

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteProductInCart = (product) => {//xóa bằng id 
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductInCart = (product,quantity) => {//cộng trừ sản phẩm
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}