import React, { Component } from 'react';

class NewProductSearch extends Component {
    render() {
        return (
            <div data-id={5189360} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                <div className="product-item product-resize">
                    <div className="product-img image-resize">
                        <a href="/khoai-lang-mat-1kg-p5189360.html" title="Khoai lang mật - 1kg">
                            <img className="first-img" id="img-5189360" alt=" Khoai lang mật - 1kg" src={this.props.image} />
                        </a>
                        <a href="/khoai-lang-mat-1kg-p5189360.html" className="mask-brg" />
                        <div className="hover-mask">
                            <div className="inner-mask">
                                <ul className="add-to-links">
                                    <li>
                                        <a href="javascript:" className="quick_views_pro" data-proid={5189360} title="Xem nhanh"><i className="fa fa-search" /></a>
                                    </li>
                                    <li>
                                        <a href="/khoai-lang-mat-1kg-p5189360.html" title="Xem chi tiết"><i className="fa fa-eye" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product-detail">
                        <h3 className="pro-name">
                            <a className="tp_product_name" href="/khoai-lang-mat-1kg-p5189360.html" title="Khoai lang mật - 1kg">{this.props.title}</a>
                        </h3>
                        <p className="pro-vendor" />
                        <p className="product-desc" style={{ display: 'none' }}>
                            Chưa có mô tả cho sản phẩm này.</p>
                        <p className="pro-price tp_product_price">
                            {this.props.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewProductSearch;