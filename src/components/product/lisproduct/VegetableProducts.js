import React, { Component } from 'react';
// import React from "react";
import { formatMoney } from '../../header/shopcart/PriceFomat';
import { convertUrl } from '../../converts/Url'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
} from "react-router-dom";


class VegetableProducts extends Component {

    render() {
        var { product } = this.props;
        return (
            <div className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                <div className="product-item product-resize">
                    <div className="product-img image-resize">
                        <a href="/chanh-khong-hat-300gr-p5189344.html" title="Chanh không hạt - 300gr">
                            <img className="first-img  has-img" src={product.image} alt="Chanh không hạt - 300gr" />
                            {/* <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/20_480x480.png" alt="Chanh không hạt - 300gr" /> */}
                        </a>
                        <a href="/chanh-khong-hat-300gr-p5189344.html" className="mask-brg" />
                        <div className="hover-mask">
                            <div className="inner-mask">
                                <ul className="add-to-links">
                                    <li>
                                        <Link to="/ProductDtails/" className="quick_views_pro" title="Xem nhanh" > <i className="fa fa-search" /></Link >
                                    </li>
                                    <li>
                                        <a href="" title="Xem chi tiết"><i className="fa fa-eye" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product-detail">
                        {/* <h3 className="pro-name"><Link to={`/ProductDtails/${url}/${id}`} className="tp_product_name">{product.title}</Link></h3> */}
                        <h3 className="pro-name"><Link to={'/ProductDtailsContainer/' + convertUrl(product.title) + '.' + product.id + 'html'} className="tp_product_name">{product.title}</Link></h3>

                        <div className="box-price">
                            <p className="">
                                {formatMoney(this.commaMoney(product.price))}</p>
                            <button type="button" class="btn btn-primary " onClick={() => this.onAddToCart(product)}>Mua hàng</button>
                            {/* <button type="button" class="btn btn-primary " >Mua hàng</button> */}
                        </div>
                        <p className="pro-price-del tp_product_price_old" />
                    </div>
                </div>
            </div>
        );
    }

    commaMoney = (price) => {
        var total = price * 1
        return total
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
    }

}

export default VegetableProducts;