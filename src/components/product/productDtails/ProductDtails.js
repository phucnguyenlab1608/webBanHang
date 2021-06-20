import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class ProductDtails extends Component {

    render() {
        var { children } = this.props;
        console.log(children + 'tesst');
        return (
            <main className="main-content tp_product_detail" >
                <div id="product">
                    <section id="wrapper-product-detail" style={{ background: '#fff', padding: '30px 0' }}>
                        <div className="container">


                            {children}


                            <div className="row product_description">
                                <div className="col-md-8 col-sm-12 col-xs-12">
                                    <div role="tabpanel" className="product-comment">
                                        <ul className="nav nav-tabs" id="page-product" role="tablist">
                                            <li role="presentation" className="active">
                                                <a href="#mota" aria-controls="mota" role="tab" data-toggle="tab">Mô tả sản phẩm</a>
                                            </li>
                                            <li role="presentation" className="tp_product_detail_comment">
                                                <a href="#binhluan" aria-controls="binhluan" role="tab" data-toggle="tab">Bình luận</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div role="tabpanel" className="viewContent tab-pane active" id="mota">
                                                <div className="container-fluid product-description-wrapper">
                                                    <p>Chưa có thông tin nào trong mục này</p>
                                                </div>
                                            </div>
                                            <div id="binhluan" className="tab-pane fade">
                                                <div data-rte="coi-so-diep-comment" className="container-fluid rte">
                                                    <div className="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop" data-href="http://t0212.store.nhanh.vn/chanh-khong-hat-300gr-p5189344.html" data-numposts={5} fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&container_width=0&height=100&href=http%3A%2F%2Ft0212.store.nhanh.vn%2Fchanh-khong-hat-300gr-p5189344.html&locale=vi_VN&numposts=5&sdk=joey&version=v2.12&width=550">
                                                        <span style={{ verticalAlign: 'bottom', width: '550px', height: '0px' }}><iframe name="f3b908afa205d" width="550px" height="100px" data-testid="fb:comments Facebook Social Plugin" title="fb:comments Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.12/plugins/comments.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df8a1806aab144%26domain%3Dt0212.store.nhanh.vn%26origin%3Dhttp%253A%252F%252Ft0212.store.nhanh.vn%252Ff23fe3a19cb27e4%26relation%3Dparent.parent&container_width=0&height=100&href=http%3A%2F%2Ft0212.store.nhanh.vn%2Fchanh-khong-hat-300gr-p5189344.html&locale=vi_VN&numposts=5&sdk=joey&version=v2.12&width=550" className style={{ border: 'none', visibility: 'visible', width: '550px', height: '0px' }} /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 col-xs-12">
                                    <aside>
                                        <div id="product-related" className="widget_block_sidebar tp_product_detail_related">
                                            <div className="title_product_related widget_title_sidebar">
                                                <h3>Sản phẩm cùng loại</h3>
                                            </div>
                                            <ul className="list_product_related widget_list_sidebar clearfix" style={{ padding: '0px' }}>
                                                <li className="pro-loop clearfix" style={{ marginBottom: '10px' }}>
                                                    <div className="col-md-5 col-sm-5 col-xs-5">
                                                        <a href="/dau-bap-300gr-p5189342.html" title="Đậu bắp - 300gr">
                                                            <img className="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/18_480x480.jpg" data-src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/18_480x480.jpg" alt="Đậu bắp - 300gr" style={{ maxHeight: '250px', width: '150px' }} sizes="120px" />
                                                        </a>
                                                    </div>
                                                    <div className="col-md-7 col-sm-7 col-xs-7">
                                                        <a href="/dau-bap-300gr-p5189342.html" title="Đậu bắp - 300gr">
                                                            <h3 className="product_related_name">Đậu bắp - 300gr</h3>
                                                            <p className="product_related_price">
                                                                <span className="product_related_price">170,000₫</span>
                                                            </p>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </ main>


        )


    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product
    }
};
export default connect(mapStateToProps, null)(ProductDtails);