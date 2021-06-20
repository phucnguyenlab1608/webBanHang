import React, { Component } from 'react';
import '../../css/style.css';


class ShopCart extends Component {
    render() {
        var { children } = this.props;
        return (
            <div className="wapper">
                <section className="page-banner">
                    <div className="auto-container text-center clearfix">
                        <h1>Giỏ hàng</h1>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                            <ul className="breadcrumb breadcrumb-arrow hidden-sm hidden-xs">
                                <li>
                                    <a href="/">Trang chủ</a>
                                </li>
                                <li>
                                    <span>Giỏ hàng</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="wrapper-cart" style={{ padding: '30px 0' }}>
                    <div id="cart" className="container">
                        <div className="row">
                            <div id="layout-page" className="col-md-12">
                                <form action="/cart" method="post" id="cartformpage">
                                    {/* ------ */}

                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="image">&nbsp;</th>
                                                <th className="item">Tên sản phẩm</th>
                                                <th className="qty">Số lượng</th>
                                                <th className="price">Đơn giá</th>
                                                <th className="price">Số tiền</th>
                                                <th className="remove">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        {children}
                                    </table>
                                    <div className="row">
                                        <div className="col-md-6 inner-left inner-right">
                                            <div className="checkout-buttons clearfix">
                                                <a href="/product"><i className="fa fa-reply" /> Tiếp tục mua hàng</a>
                                            </div>
                                            <div className="left-bottom">
                                                <p><a href="/">Chính sách đổi trả</a></p>
                                                <p><a href="/">Chính sách bảo mật</a></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 cart-buttons inner-right inner-left">
                                            <div className="buttons clearfix" style={{ marginTop: 0 }}>
                                                <a href="/cart/checkout" className="button-default tp_button">Thanh toán</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ShopCart;