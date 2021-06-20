import React, { Component } from 'react';
import { formatMoney } from './../shopcart/PriceFomat';
class CartHeaderResult extends Component {
    render() {
        var { cart } = this.props;
        return (
            <div className="text-mini-cart">
                <span className=" text-left">Tổng tiền:</span>
                <span className="cart_block_total">{formatMoney(this.showTotalAmount(cart))}</span>
            </div>
        );
    }
    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }
}

export default CartHeaderResult;