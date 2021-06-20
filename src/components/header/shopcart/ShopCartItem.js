import React, { Component } from 'react';
import { formatMoney } from './../shopcart/PriceFomat';
class ShopCartItem extends Component {
    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
            
            <tbody>
            <tr className="list-carts">
                <td className="image">
                    <div className="product_image">
                        <a href="/khoai-lang-nhat-1kg-p5189359.html">
                            <img src={item.product.image} />
                        </a>
                    </div>
                </td>
                <td className="item">
                    <a href="/khoai-lang-nhat-1kg-p5189359.html">
                        <strong>{item.product.title}</strong>
                    </a>
                </td>
                <td className="qty">
                    <button type="button" class="btn btn-light" onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}>-</button>
                    <span className="quantity">{quantity}</span>
                    <button type="button" class="btn btn-light" onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)} >+</button>
                </td>
                <td className="price">
                    {formatMoney(this.commaMoney(item.product.price))}</td>
                <td className="price">
                    {formatMoney(this.showSubTotal(item.product.price, item.quantity))}</td>
                <td className="remove">
                    <button type="button" class="btn btn-primary " onClick={() => this.onDelete(item.product)} >Xóa</button>
                </td>
            </tr >
        </tbody>
        );
    }
    commaMoney = (price) => {
        var total = price * 1
        return total
    }
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var { onUpdateProductInCart } = this.props;
            onUpdateProductInCart(product, quantity);
        }
    }
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
    onDelete = (product) => {
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product)
        console.log(product)
    }
}

export default ShopCartItem;
