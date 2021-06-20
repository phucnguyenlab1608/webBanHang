import React, { Component } from 'react';
import {formatMoney} from './../shopcart/PriceFomat'
class ShopCartResult extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr className="summary">
                <td className="image">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td className="text-center"><b>Tổng cộng:</b></td>
                <td className="price">
                    <span className="total">
                        <strong>{formatMoney(this.showTotalAmount(cart)) }vnd</strong>
                    </span>
                </td>
                <td>&nbsp;</td>
            </tr>
        );
    }
    showTotalAmount = (cart) => {
        var total = 0;
        if(cart.length > 0) {
          for (var i = 0; i < cart.length; i++) {
            total += cart[i].product.price * cart[i].quantity;
          }
        }
        return total;
      }
}

export default ShopCartResult;