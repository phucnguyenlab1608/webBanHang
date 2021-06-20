import React, { Component } from 'react';
import { formatMoney } from '../shopcart/PriceFomat';
class ShowCartHeader extends Component {
    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
            <div className="cart-block-item">
                <div className="item-cart clearfix">
                    <div className="nav-bar-item">
                        <figure className="image-cart ">
                            <a href="Khoai lang Nhật - 1kg">
                                <img src={item.product.image} alt={item.product.title} />
                            </a>
                        </figure>
                        <div className="text_cart">
                            <h4>
                                <a href="Khoai lang Nhật - 1kg">{item.product.title}</a>
                            </h4>
                            <span className="variant" />
                            <div className="price-line">
                                <div className="down-case">
                                    {quantity} &ensp; x
                                <span className="new-price">
                                        &ensp; {formatMoney(this.commaMoney(item.product.price))}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="remove_link">
                            <button className="delete_cart" onClick={() => this.onDelete(item.product)} ><i className="fa fa-times-circle" /></button>
                        </span>
                    </div>
                </div>
            </div>


        );
    }
    commaMoney = (price) => {
        var total = price * 1
        return total
    }

    onDelete = (product) => {
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product);
    }

}

export default ShowCartHeader;