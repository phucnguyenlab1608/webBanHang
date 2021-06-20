import React, { Component } from 'react';
import '../css/style.css';
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { formatMoney } from '../header/shopcart/PriceFomat';
import { convertUrl } from '../converts/Url';
import Nav from './Nav';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            keywords: '',
        })
    }
    isChanged = (event) => {
        this.setState({
            keywords: event.target.value
        })


    }
    onSearch = (keywords) => {
        var { keywordSearch } = this.props;
        keywordSearch(keywords)
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
    showQuantity = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].quantity;
            }
        }
        return total;
    }

    render() {
        var { children } = this.props;
        var { cart } = this.props;
        var { product } = this.props;
        var number = 1;

        return (
            <div className="header">
                <div className="head-1 tp_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 top-mobile">
                                <ul className="social">
                                    <li>
                                        <a href="#"><i className="fa fa-facebook" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-google" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-youtube" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-instagram" /></a>
                                    </li>
                                </ul>
                                <div className="searchform search-desktop">
                                    <form action="/search" method="get" id="frm_search_head" autoComplete="off" className>
                                        <input type="text" className="frm_search_head" placeholder="Tìm kiếm" name="q" onChange={(event) => this.isChanged(event)} />
                                        <button type="submit" onClick={() => this.onSearch(this.state.keywords)}>
                                            <Link to="/searchPage"><i className="fa fa-search" aria-hidden="true" /></Link>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6 text-center">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/store_1509761845_552.png" alt-text="Trang chủ" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6 pad-top-xs-10">
                                <div className="header-control clearfix">
                                    <div className="top-menu">
                                        <div className="account-header">
                                            {/* <div className="account-block hidden-xs">
                                                <i className="user-top fa fa-user" />
                                            </div> */}
                                            <div class="account-block hidden-lg">
                                                <a href="/user/signin"><i class="user-top fa fa-user"></i></a>
                                            </div>
                                            <div className="account-list">
                                                <ul className="account-links">
                                                    <li><a href="/user/signup" title="Đăng ký">Đăng ký</a></li>
                                                    <li><a href="/user/signin" title="Đăng nhập">Đăng nhập</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div id="cart_block">
                                            <div className="cart-heading">
                                                <i className="cart-count">
                                                    <span className="ajax_cart_quantity" id="total_count_ajax">{this.showQuantity(cart)}</span>
                                                </i>
                                                <i className="cart-icon">
                                                    <img src="/tp/T0212/img/temp/icon-cart-hover.png" className="cart-icon-hover" alt="text" />
                                                    {/* <img src="/tp/T0212/img/temp/icon-cart.png" class="cart-icon-standard"
  alt=""> */}
                                                    <i className="fa fa-shopping-basket" aria-hidden="true" />
                                                </i>
                                                <p>
                                                    <strong id="total_price_ajax">
                                                        <span className="ajax-price-head" id="total_price">{formatMoney(this.showTotalAmount(cart))} ₫</span>
                                                    </strong>
                                                </p>
                                            </div>
                                            {/* ---- */}
                                            <div className="cart_content" id="view-cart">
                                                {children}
                                                <div className="cartpro-actions cart-check-mini">
                                                    <Link to="/Cart" className="button cart-link" href="/cart">Giỏ hàng</Link>
                                                    <a className="button checkout-button" href="/cart/checkout">Thanh toán</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="sponline hidden-xs">Hotline: <span className="phonehl"> </span></div>
                                </div>
                                <div className="header-langguage">
                                    <a className="trans" href="#">
                                        <img data-sizes="auto" className="lazyautosizes lazyloaded" style={{ width: '35px', paddingRight: '5px', borderRight: '1px solid' }} sizes="35px" src="https://hopphaphoalanhsu.com.vn/wp-content/uploads/2016/11/tong-lanh-su-quan-lien-hiep-vuong-quoc-anh-va-bac-ailen.png" /></a>
                                    <a className="trans" href="/?locale=en-us" style={{ paddingRight: '10px' }}>
                                        <img data-sizes="auto" className="lazyautosizes lazyloaded" style={{ width: '35px', paddingLeft: '5px' }} sizes="35px" src="https://i.bigschool.vn/w/07fa66/700/News/images/2017/04/06/58e5b4176c657-Screen-Shot-2017-04-06-at-10.19.28-SA/Quoc-ky-Viet-Nam-Y-nghia-va-lich-su.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="head-2 tp_menu">
                    <div className="container">
                        <div className="mainmenu">
                            <div className="menu-subnav">
                                
                                {
                                    product.map((product, key) => {
                                        if(number == 1){
                                            number ++;
                                            return (
                                                <Nav
                                                    key={key}
                                                    product={product}
                                                />
                                            )
                                        }
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
// showNav = (product) => {

//     return result;
// }
// };


export default Header;
//để ý vị trí của 2 connect lớ ngớ là lỗi