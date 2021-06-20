import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShopCart from '../components/header/shopcart/ShopCart';
import * as Message from '../constants/Messager';
import ShopCartItem from '../components/header/shopcart/ShopCartItem';
import ShopCartResult from '../components/header/shopcart/ShopCartResult';
import { actDeleteProductInCart, actUpdateProductInCart } from '../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;

        return (
            <div>
                <ShopCart>
                    {this.showCartItems(cart)}
                    {this.showTotolAmount(cart)}
                </ShopCart>
            </div>
        );
    }

    showCartItems = (cart) => {
        var { onDeleteProductInCart, onUpdateProductInCart } = this.props;
        var result = Message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <ShopCartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />

                )
            })
        }
        return result;
    }
    showTotolAmount = (cart) => {
        var result = '';
        if (cart.length > 0) {
            result = <ShopCartResult cart={cart} />
        }
        return result;
    }
}



CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart    
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);