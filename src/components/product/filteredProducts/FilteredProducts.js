import React, { Component } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

class FilteredProducts extends Component {
    render() {
        var{children} = this.props;
        return (

            <div className="wapper tp_product_category">
                <section className="page-banner">
                    <div className="auto-container text-center clearfix">
                        <h1>Sản phẩm</h1>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                            <ul className="breadcrumb breadcrumb-arrow hidden-sm hidden-xs">
                                <li>
                                    <Link to="/">Trang chủ </Link>
                                </li>
                                <li>
                                    <span>Rau ăn lá</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div id="wrapper-collection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pull-left">
                                <div className="news-menu list-group tp_product_category_filter_category" id="list-group-l">
                                    <div className="menu-left-title">
                                        <strong>Danh mục sản phẩm</strong>
                                    </div>
                                    <ul className="nav navs sidebar menu" id="cssmenu">
                                        <li className="item first ">
                                            <a href="#" title="Rau củ">
                                                <span>Rau củ</span>
                                            </a>
                                        </li>
                                        <li className="item first ">
                                            <a href="#" title="Trái cây">
                                                <span>Trái cây</span>
                                            </a>
                                        </li>
                                        <li className="item first ">
                                            <a href="#" title="Thịt">
                                                <span>Thịt</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar_price list-group tp_product_category_filter_price">
                                    <div className="menu-left-title">
                                        <strong>Lọc giá</strong>
                                    </div>
                                    <aside className="widget widget_product_price_slide" style={{ paddingTop: '15px', paddingLeft: '20px' }}>
                                        {/* <div className="filter_item"><label className="filter_checkbox"><a rel="nofollow" href="/rau-an-la-pc164581.html?price=0:500000"><i className="fa fa-square-o" /> Dưới 500,000₫</a></label></div>
                                        <div className="filter_item"><label className="filter_checkbox"><a rel="nofollow" href="/rau-an-la-pc164581.html?price=500000:1000000"><i className="fa fa-square-o" /> 500,000₫ - 1000,000₫</a></label></div>
                                        <div className="filter_item"><label className="filter_checkbox"><a rel="nofollow" href="/rau-an-la-pc164581.html?price=1000000:1500000"><i className="fa fa-square-o" /> 1,000,000₫ - 1,500,000₫</a></label></div>
                                        <div className="filter_item"><label className="filter_checkbox"><a rel="nofollow" href="/rau-an-la-pc164581.html?price=1500000"><i className="fa fa-square-o" /> */}
                                        {/* Trên 1,500,000₫</a></label></div> */}
                                    </aside>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 pull-right">
                                <div className="row main-content">
                                    <div className="col-md-12">
                                        <div className="toolbar-inner clearfix">
                                            <div className="tool-sortby pull-left">
                                                <div className="browse-tags">
                                                    <span>Sắp xếp theo: </span>&nbsp;
                                                    <select id="sortControl" className onchange="location = this.value;" style={{ padding: '6px' }}>
                                                        <option selected value="/rau-an-la-pc164581.html?">Mặc định </option>
                                                        <option value="/rau-an-la-pc164581.html?show=priceDesc">Giá giảm dần</option>
                                                        <option value="/rau-an-la-pc164581.html?show=priceAsc">Giá tăng dần</option>
                                                        <option value="/rau-an-la-pc164581.html?show=discount">Giá sale</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="tool-list pull-right">
                                                <ul className="grid-list display hidden-xs">
                                                    <li id="grid" className="selected">
                                                        {/* <a href="#" title="Grid" onclick="bindGrid()"><i className="fa fa-th-large" /></a> */}
                                                    </li>
                                                    <li id="list">
                                                        {/* <a href="#" title="List" onclick="bindGrid()"><i className="fa fa-th-list" /></a> */}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 product-list">
                                        <div className="content-product-list products-resize">
                                            <div className="product-list-view row  grid  products-grid">
                                                <div id={5189344} data-id={5189344} className="ajax_block_product box-product col-xs-6 col-sm-6 col-md-4 col-lg-4 wow fadeInUp animation rainbow_0 clear-2 product-wrapper">
                                                    {children}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12  pagination-top pw-default ">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" id="pagination">
                                            <div className="row">
                                                <div className="paginator"><span className="labelPages">1 - 2 / 2</span><span className="titlePages">&nbsp;&nbsp;Trang: </span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default FilteredProducts;