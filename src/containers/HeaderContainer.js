import React, { Component } from 'react';
import Header from '../components/header/Header';
import { connect } from 'react-redux';
import ShowCartHeader from '../components/header/cartHeader/ShowCartHeader';
import * as Message from '../constants/Messager';
import { actDeleteProductInCart, searchPage } from '../actions/index'
import CartHeaderResult from '../components/header/cartHeader/CartHeaderResult';
import Nav from '../components/header/Nav';

class HeaderContainer extends Component {
    render() {
        var { cart, keywordSearch, product } = this.props;
        return (
            <div>
                <Header
                    keywordSearch={keywordSearch}
                    cart={cart}
                    product={product}
                >
                    {this.showCartHeader(cart)}
                    {this.showTotolAmount(cart)}
                    
                </Header>
            </div>
        );
    }
    showCartHeader = (cart) => {
        var result = Message.MSG_CART_EMPTY;
        var { onDeleteProductInCart } = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <ShowCartHeader
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                    />
                    //   console.log(item)
                )
            })
        }
        return result;
    }
    showTotolAmount = (cart) => {
        var result = '';
        if (cart.length > 0) {
            result = <CartHeaderResult cart={cart} />
        }
        return result;
    };
    



}
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        product: state.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product))
        },
        keywordSearch: (keyword) => {
            dispatch(searchPage(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);