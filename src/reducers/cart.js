import * as types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : []

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        //------Thêm sản phẩm vào giỏ hàng 
        case types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {//không tìm thấy là trừ 1
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state];
        // --------------------xóa sản phẩm giỏ hàng
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state];
        //----------------Thêm số lượng sản phẩm
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}
const findProductInCart = (cart, product) => {
    var index = -1;//ko tim thay
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }

    }

    return index;
}
export default cart;