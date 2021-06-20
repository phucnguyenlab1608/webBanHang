import React, { Component } from 'react';

class HotProducts extends Component {
    render() {
        return (
            <div id={5189357} data-id={5189357} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                <div className="product-item product-resize">
                    <div className="product-img image-resize">
                        <a href="/khoai-mon-500gr-p5189357.html" title="Khoai môn - 500gr">
                            <img className="first-img  has-img" id="img-5189357" src={this.props.image} alt="Khoai môn - 500gr" />
                            {/* <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/33_480x480.jpg" alt="Khoai môn - 500gr" /> */}
                        </a>
                        <a href="/khoai-mon-500gr-p5189357.html" className="mask-brg" />
                        <div className="hover-mask">
                            <div className="inner-mask">
                                <ul className="add-to-links">
                                    <li>
                                        <a href="#" className="quick_views_pro" data-proid={5189357} title="Xem nhanh"><i className="fa fa-search" /></a>
                                    </li>
                                    <li>
                                        <a href="/khoai-mon-500gr-p5189357.html" title="Xem chi tiết"><i className="fa fa-eye" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product-detail">
                        <h3 className="pro-name"><a className="tp_product_name" href="/khoai-mon-500gr-p5189357.html" title="Khoai môn - 500gr">{this.props.name}</a></h3>
                        <div className="box-price">
                            <p className="">
                                {this.props.price}</p>
                            <button type="button" class="btn btn-primary ">Mua hàng</button>
                        </div>
                        <p className="pro-price-del tp_product_price_old" />
                    </div>
                </div>
            </div>
        );
    }
    
}

export default HotProducts;