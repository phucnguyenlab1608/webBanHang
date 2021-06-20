import React, { Component } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import NewProductSearch from "../header/NewProductSearch";
import { connect } from "react-redux";


class SearchPage extends Component {

    render() {
        var { dataBase, keywordSearch } = this.props;
        dataBase = dataBase.filter((dataBase) => {
            return dataBase.title.toLowerCase().indexOf(keywordSearch.toLowerCase()) !== -1;
        })

        var productList = dataBase.map((value, key) => {
            return (
                <NewProductSearch
                    key={key}
                    title={value.title}
                    price={value.price}
                    image={value.image}
                />
            )
        })

        return (

            <div className="wapper">
                <section className="page-banner">
                    <div className="auto-container text-center clearfix">
                        <h1>Tìm kiếm</h1>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                            <ul className="breadcrumb breadcrumb-arrow hidden-sm hidden-xs">
                                <li>
                                    <Link to="/">Trang chủ</Link>
                                </li>
                                <li>
                                    <a href="#">Tìm kiếm:{keywordSearch}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="search-page">
                    <div className="container" id="layout-page">
                        <div className="content-page" id="search">
                            <div className="col-md-12">
                                <span className="subtext">Kết quả tìm kiếm cho: <strong>{keywordSearch}</strong>.</span>
                            </div>
                        </div>
                        <div className="results content-page content-product-list product-list">
                            <div className="row">

                                {productList}
                            </div>
                        </div>
                        <div id="pagination" className>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" id="pagination">
                                <div className="row">
                                    <div className="paginator"><span className="labelPages">1 - 24 / 36</span><span className="titlePages">&nbsp;&nbsp;Trang: </span><span className="currentPage">1</span><a rel="nofollow" href="/search?q=&page=2">2</a><a rel="nofollow" className="paging-next ico" href="/search?q=&page=2" /><a rel="nofollow" className="paging-last" title="Trang cuối" href="/search?q=&page=2" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >



        );
    }
}
const mapStateToProps = (state) => {
    return {
        dataBase: state.product,
        keywordSearch: state.search
    }
}

export default connect(mapStateToProps,null) (SearchPage);