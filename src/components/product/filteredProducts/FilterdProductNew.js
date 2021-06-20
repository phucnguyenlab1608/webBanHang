import React, { Component } from 'react';

class FilterdProductNew extends Component {
    render() {
        var { product } = this.props
        return (
            <div className="product-item product-resize clearfix">
                <div className="left-block product-img image-resize">
                    {/* <a href="/chanh-khong-hat-300gr-p5189344.html" title="Chanh không hạt - 300gr"> */}
                    <img className="first-img" id="img-5189344" alt=" Chanh không hạt - 300gr " src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/20_480x480.png" />
                    <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/20_480x480.png" alt="Chanh không hạt - 300gr" />
                    {/* </a> */}
                    <a href="/chanh-khong-hat-300gr-p5189344.html" className="mask-brg" />
                    <div className="hover-mask">
                        <div className="inner-mask">
                            <ul className="add-to-links">
                                <li>
                                    {/* <a href="#" className="quick_views_pro" data-proid={5189344} title="Xem nhanh"><i className="fa fa-search" /></a> */}
                                </li>
                                <li>
                                    <a href="#" title="Xem chi tiết"><i className="fa fa-eye" /></a>
                                </li>2
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-block product-detail">
                    <h3 className="pro-name">
                        <a className="tp_product_name" href="/chanh-khong-hat-300gr-p5189344.html" title="Chanh không hạt - 300gr">{product.title} </a>
                    </h3>
                    <p className="pro-vendor" />
                    <p className="product-desc" style={{ display: 'none' }}>
                        Chưa có mô tả cho sản phẩm này.</p>
                    <p className="pro-price tp_product_price">
                        {product.price} đ</p>
                </div>
            </div>
        );
    }
}

export default FilterdProductNew;