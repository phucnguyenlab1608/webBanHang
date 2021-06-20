import React, { Component } from 'react';

class FruitProducts extends Component {
    render() {
        console.log(this.props.price)
        return (
            <div id={5189360} data-id={5189360} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                <div className="product-item product-resize">
                    <div className="product-img image-resize">
                        <a href="/khoai-lang-mat-1kg-p5189360.html" title="Khoai lang mật - 1kg">
                            <img className="first-img  has-img" id="img-5189360" src={this.props.image} alt="Khoai lang mật - 1kg" />
                            {/* <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/36_480x480.jpg" alt="Khoai lang mật - 1kg" /> */}
                        </a>
                        <a href="/khoai-lang-mat-1kg-p5189360.html" className="mask-brg" />
                        <div className="hover-mask">
                            <div className="inner-mask">
                                <ul className="add-to-links">
                                    <li>
                                        <a href="#" className="quick_views_pro" data-proid={5189360} title="Xem nhanh"><i className="fa fa-search" /></a>
                                    </li>
                                    <li>
                                        <a href="/khoai-lang-mat-1kg-p5189360.html" title="Xem chi tiết"><i className="fa fa-eye" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product-detail">
                        <h3 className="pro-name"><a className="tp_product_name" href="/khoai-lang-mat-1kg-p5189360.html" title="Khoai lang mật - 1kg">{this.props.title}</a></h3>
                        <div className="box-price">
                            <p className="pro-price tp_product_price">
                                {this.props.price}</p>
                        </div>
                        <p className="pro-price-del tp_product_price_old" />
                    </div>
                </div>
            </div>
        );
    }
}

export default FruitProducts;