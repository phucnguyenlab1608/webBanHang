
import product from './../reducers/product'
import { combineReducers } from 'redux';
import search from './../reducers/search';
import cart from './../reducers/cart';
const myReducer = combineReducers({
    // product cacsh khac
    product: product,
    search,
    cart: cart,
});
export default myReducer;