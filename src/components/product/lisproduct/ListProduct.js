import React, { Component } from 'react';
import FruitProducts from './FruitProducts';
import HotProducts from './HotProducts';
import VegetableProducts from './VegetableProducts';


class ListProduct extends Component {
  

    // boxProduct = () => this.props.DatabasesImported.filter(d => d.species == "Vegetables").map((value, key) => (
    //     // console.log(value)
    //     <VegetableProducts
    //         key={key}
    //         id={value.id}
    //         title={value.title}
    //         price={value.price}
    //         image={value.image}
    //     />

    // ))
    // fruitProduct = () => this.props.DatabasesImported.filter(d => d.species == "fruit").map((value, key) => (
    //     // console.log(value)
    //     <VegetableProducts
    //         key={key}
    //         id={value.id}
    //         title={value.title}
    //         price={value.price}
    //         image={value.image}
    //     />

    // ))
    // HotProduct = () => this.props.DatabasesImported.filter(d => d.numberOfProductsSold >= 100).map((value, key) => (
    //     // console.log(value)
    //     <HotProducts
    //         key={key}
    //         id={value.id}
    //         title={value.title}
    //         price={value.price}
    //         image={value.image}
    //     />
    // ))

    render() {
        var { children } = this.props;

        return (

            <div>
                <div className="banner ">
                    <img src="https://rausachfpt.jweb.vn/uploads/rausachfpt/images/2.jpg" className="img-banner" alt="" />
                </div>
                <div className="wapper">
                    <div className="wap1 text-center">
                        <div className="container">
                            <div className="row adv-banner">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 page-item wow fadeInUp item_1">
                                    <div className="banner_home">
                                        <div className="banner-img-home">
                                            <a href="#" target="_self">
                                                <div className="img_banner_home" style={{ backgroundImage: 'url(https://storage.googleapis.com/cdn.nhanh.vn/store/20731/bn/sb_1510208151_84.jpg)' }}>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="content_banner_home">
                                            <div className="title_banner_home">
                                                <a href="#" target="_self">
                                                    <h2>Tr??i c??y nh???p kh???u 100%</h2>
                                                </a>
                                            </div>
                                            <div className="detail_banner_home text-center">
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 page-item wow fadeInUp item_1">
                                    <div className="banner_home">
                                        <div className="banner-img-home">
                                            <a href="#" target="_self">
                                                <div className="img_banner_home" style={{ backgroundImage: 'url(https://storage.googleapis.com/cdn.nhanh.vn/store/20731/bn/sb_1510208113_140.jpg)' }}>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="content_banner_home">
                                            <div className="title_banner_home">
                                                <a href="#" target="_self">
                                                    <h2>L???i ??ch c???a th???c ph???m s???ch</h2>
                                                </a>
                                            </div>
                                            <div className="detail_banner_home text-center">
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 page-item wow fadeInUp item_1">
                                    <div className="banner_home">
                                        <div className="banner-img-home">
                                            <a href="#" target="_self">
                                                <div className="img_banner_home" style={{ backgroundImage: 'url(https://storage.googleapis.com/cdn.nhanh.vn/store/20731/bn/sb_1510208009_730.jpg)' }}>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="content_banner_home">
                                            <div className="title_banner_home">
                                                <a href="#" target="_self">
                                                    <h2>Cung c???p th???c ph???m s???ch 100%</h2>
                                                </a>
                                            </div>
                                            <div className="detail_banner_home text-center">
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 page-item wow fadeInUp item_1">
                                    <div className="banner_home">
                                        <div className="banner-img-home">
                                            <a href="#" target="_self">
                                                <div className="img_banner_home" style={{ backgroundImage: 'url(https://storage.googleapis.com/cdn.nhanh.vn/store/20731/bn/sb_1510207958_442.jpg)' }}>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="content_banner_home">
                                            <div className="title_banner_home">
                                                <a href="#" target="_self">
                                                    <h2>Tr??i c??y t????i s???ch 100%</h2>
                                                </a>
                                            </div>
                                            <div className="detail_banner_home text-center">
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wap-list-product homeProduct tp_product_new">
                        <div className="container">
                            <div className="top-line" />
                            <div className="heading-title">
                                <h3 className="tp_title">S???n ph???m m???i</h3>
                            </div>
                            <div className="row content-product-list products-resize">
                                <div id={5189360} data-id={5189360} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                                    <div className="product-item product-resize">
                                        <div className="product-img image-resize">
                                            <a href="/khoai-lang-mat-1kg-p5189360.html" title="Khoai lang m???t - 1kg">
                                                <img className="first-img  has-img" id="img-5189360" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/36_480x480.jpg" alt="Khoai lang m???t - 1kg" />
                                                <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20171127/37_480x480.jpg" alt="Khoai lang m???t - 1kg" />
                                            </a><a href="/khoai-lang-mat-1kg-p5189360.html" className="mask-brg" />
                                            <div className="hover-mask">
                                                <div className="inner-mask">
                                                    <ul className="add-to-links">
                                                        <li>
                                                            <a href="#" className="quick_views_pro" data-proid={5189360} title="Xem nhanh"><i className="fa fa-search" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/khoai-lang-mat-1kg-p5189360.html" title="Xem chi ti???t"><i className="fa fa-eye" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h3 className="pro-name"><a className="tp_product_name" href="/khoai-lang-mat-1kg-p5189360.html" title="Khoai lang m???t - 1kg">Khoai lang m???t - 1kg </a></h3>
                                            <div className="box-price">
                                                <p className="pro-price tp_product_price">
                                                    500,000???</p>
                                            </div>
                                            <p className="pro-price-del tp_product_price_old" />
                                        </div>
                                    </div>
                                </div>
                                <div id={5189359} data-id={5189359} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                                    <div className="product-item product-resize">
                                        <div className="product-img image-resize">
                                            <a href="/khoai-lang-nhat-1kg-p5189359.html" title="Khoai lang Nh???t - 1kg">
                                                <img className="first-img  has-img" id="img-5189359" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/35_480x480.png" alt="Khoai lang Nh???t - 1kg" />
                                                <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/35_480x480.png" alt="Khoai lang Nh???t - 1kg" />
                                            </a><a href="/khoai-lang-nhat-1kg-p5189359.html" className="mask-brg" />
                                            <div className="hover-mask">
                                                <div className="inner-mask">
                                                    <ul className="add-to-links">
                                                        <li>
                                                            <a href="#" className="quick_views_pro" data-proid={5189359} title="Xem nhanh"><i className="fa fa-search" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/khoai-lang-nhat-1kg-p5189359.html" title="Xem chi ti???t"><i className="fa fa-eye" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h3 className="pro-name"><a className="tp_product_name" href="/khoai-lang-nhat-1kg-p5189359.html" title="Khoai lang Nh???t - 1kg">Khoai
                    lang Nh???t - 1kg </a></h3>
                                            <div className="box-price">
                                                <p className="pro-price tp_product_price">
                                                    20,000???</p>
                                            </div>
                                            <p className="pro-price-del tp_product_price_old" />
                                        </div>
                                    </div>
                                </div>
                                <div id={5189358} data-id={5189358} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                                    <div className="product-item product-resize">
                                        <div className="product-img image-resize">
                                            <a href="/khoai-lang-tim-1kg-p5189358.html" title="Khoai lang t??m - 1kg">
                                                <img className="first-img  has-img" id="img-5189358" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/34_480x480.jpg" alt="Khoai lang t??m - 1kg" />
                                                <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/34_480x480.jpg" alt="Khoai lang t??m - 1kg" />
                                            </a><a href="/khoai-lang-tim-1kg-p5189358.html" className="mask-brg" />
                                            <div className="hover-mask">
                                                <div className="inner-mask">
                                                    <ul className="add-to-links">
                                                        <li>
                                                            <a href="#" className="quick_views_pro" data-proid={5189358} title="Xem nhanh"><i className="fa fa-search" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/khoai-lang-tim-1kg-p5189358.html" title="Xem chi ti???t"><i className="fa fa-eye" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h3 className="pro-name"><a className="tp_product_name" href="/khoai-lang-tim-1kg-p5189358.html" title="Khoai lang t??m - 1kg">Khoai lang t??m - 1kg </a></h3>
                                            <div className="box-price">
                                                <p className="pro-price tp_product_price">
                                                    500,000???</p>
                                            </div>
                                            <p className="pro-price-del tp_product_price_old" />
                                        </div>
                                    </div>
                                </div>
                                <div id={5189357} data-id={5189357} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                                    <div className="product-item product-resize">
                                        <div className="product-img image-resize">
                                            <a href="/khoai-mon-500gr-p5189357.html" title="Khoai m??n - 500gr">
                                                <img className="first-img  has-img" id="img-5189357" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/33_480x480.jpg" alt="Khoai m??n - 500gr" />
                                                <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/33_480x480.jpg" alt="Khoai m??n - 500gr" />
                                            </a><a href="/khoai-mon-500gr-p5189357.html" className="mask-brg" />
                                            <div className="hover-mask">
                                                <div className="inner-mask">
                                                    <ul className="add-to-links">
                                                        <li>
                                                            <a href="#" className="quick_views_pro" data-proid={5189357} title="Xem nhanh"><i className="fa fa-search" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/khoai-mon-500gr-p5189357.html" title="Xem chi ti???t"><i className="fa fa-eye" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h3 className="pro-name"><a className="tp_product_name" href="/khoai-mon-500gr-p5189357.html" title="Khoai m??n - 500gr">Khoai m??n - 500gr </a></h3>
                                            <div className="box-price">
                                                <p className="pro-price tp_product_price">
                                                    20,000???</p>
                                            </div>
                                            <p className="pro-price-del tp_product_price_old" />
                                        </div>
                                    </div>
                                </div>
                                <div id={5189356} data-id={5189356} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                                    <div className="product-item product-resize">
                                        <div className="product-img image-resize">
                                            <a href="/khoai-so-1kg-p5189356.html" title="Khoai s??? - 1kg">
                                                <img className="first-img  has-img" id="img-5189356" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/32_480x480.jpg" alt="Khoai s??? - 1kg" />
                                                <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/32_480x480.jpg" alt="Khoai s??? - 1kg" />
                                            </a><a href="/khoai-so-1kg-p5189356.html" className="mask-brg" />
                                            <div className="hover-mask">
                                                <div className="inner-mask">
                                                    <ul className="add-to-links">
                                                        <li>
                                                            <a href="#" className="quick_views_pro" data-proid={5189356} title="Xem nhanh"><i className="fa fa-search" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/khoai-so-1kg-p5189356.html" title="Xem chi ti???t"><i className="fa fa-eye" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h3 className="pro-name"><a className="tp_product_name" href="/khoai-so-1kg-p5189356.html" title="Khoai s??? - 1kg">Khoai s??? - 1kg </a></h3>
                                            <div className="box-price">
                                                <p className="pro-price tp_product_price">
                                                    500,000???</p>
                                            </div>
                                            <p className="pro-price-del tp_product_price_old" />
                                        </div>
                                    </div>
                                </div>
                                <div id={5189355} data-id={5189355} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                                    <div className="product-item product-resize">
                                        <div className="product-img image-resize">
                                            <a href="/khoai-tay-500gr-p5189355.html" title="Khoai t??y - 500gr">
                                                <img className="first-img  has-img" id="img-5189355" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/31_480x480.jpg" alt="Khoai t??y - 500gr" />
                                                <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/31_480x480.jpg" alt="Khoai t??y - 500gr" />
                                            </a><a href="/khoai-tay-500gr-p5189355.html" className="mask-brg" />
                                            <div className="hover-mask">
                                                <div className="inner-mask">
                                                    <ul className="add-to-links">
                                                        <li>
                                                            <a href="#" className="quick_views_pro" data-proid={5189355} title="Xem nhanh"><i className="fa fa-search" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/khoai-tay-500gr-p5189355.html" title="Xem chi ti???t"><i className="fa fa-eye" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h3 className="pro-name"><a className="tp_product_name" href="/khoai-tay-500gr-p5189355.html" title="Khoai t??y - 500gr">Khoai t??y - 500gr </a></h3>
                                            <div className="box-price">
                                                <p className="pro-price tp_product_price">
                                                    300,000???</p>
                                            </div>
                                            <p className="pro-price-del tp_product_price_old" />
                                        </div>
                                    </div>
                                </div>
                                <div id={5189354} data-id={5189354} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                                    <div className="product-item product-resize">
                                        <div className="product-img image-resize">
                                            <a href="/kho-qua-350gr-p5189354.html" title="Kh??? qua - 350gr">
                                                <img className="first-img  has-img" id="img-5189354" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/30_480x480.jpg" alt="Kh??? qua - 350gr" />
                                                <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/30_480x480.jpg" alt="Kh??? qua - 350gr" />
                                            </a><a href="/kho-qua-350gr-p5189354.html" className="mask-brg" />
                                            <div className="hover-mask">
                                                <div className="inner-mask">
                                                    <ul className="add-to-links">
                                                        <li>
                                                            <a href="#" className="quick_views_pro" data-proid={5189354} title="Xem nhanh"><i className="fa fa-search" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/kho-qua-350gr-p5189354.html" title="Xem chi ti???t"><i className="fa fa-eye" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h3 className="pro-name"><a className="tp_product_name" href="/kho-qua-350gr-p5189354.html" title="Kh??? qua - 350gr">Kh??? qua - 350gr </a></h3>
                                            <div className="box-price">
                                                <p className="pro-price tp_product_price">
                                                    500,000???</p>
                                            </div>
                                            <p className="pro-price-del tp_product_price_old" />
                                        </div>
                                    </div>
                                </div>
                                <div id={5189353} data-id={5189353} className="col-md-3 col-sm-6 col-xs-6 wow fadeInUp animation rainbow_0 clear-4 clear-2 product-wrapper">
                                    <div className="product-item product-resize">
                                        <div className="product-img image-resize">
                                            <a href="/nha-dam-500gr-p5189353.html" title="Nha ??am - 500gr">
                                                <img className="first-img  has-img" id="img-5189353" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/29_480x480.jpg" alt="Nha ??am - 500gr" />
                                                <img className="second-image" src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/ps/20170927/29_480x480.jpg" alt="Nha ??am - 500gr" />
                                            </a><a href="/nha-dam-500gr-p5189353.html" className="mask-brg" />
                                            <div className="hover-mask">
                                                <div className="inner-mask">
                                                    <ul className="add-to-links">
                                                        <li>
                                                            <a href="#" className="quick_views_pro" data-proid={5189353} title="Xem nhanh"><i className="fa fa-search" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="/nha-dam-500gr-p5189353.html" title="Xem chi ti???t"><i className="fa fa-eye" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <h3 className="pro-name"><a className="tp_product_name" href="/nha-dam-500gr-p5189353.html" title="Nha ??am - 500gr">Nha ??am - 500gr </a></h3>
                                            <div className="box-price">
                                                <p className="pro-price tp_product_price">
                                                    300,000???</p>
                                            </div>
                                            <p className="pro-price-del tp_product_price_old" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wap-list-product homeProduct tp_product_hot">
                        <div className="container">
                            <div className="top-line" />
                            <div className="heading-title">
                                <h3 className="tp_title">S???n ph???m n???i b???t</h3>
                            </div>
                            <div className="row content-product-list products-resize">
                                {children}
                                {/* {this.HotProduct()} */}

                            </div>
                        </div>
                    </div>
                    <div className="wap-list-product homeProduct tp_product_category_box hidden">
                        <div className="container">
                            <div className="top-line" />
                            <div className="heading-title">
                                <h3 className="tp_title">Rau c???</h3>
                            </div>
                            <div className="row content-product-list products-resize">
                                {/* {this.boxProduct()} */}
                                {/* {children} */}
                            </div>
                        </div>
                    </div>
                    <div className="wap-list-product homeProduct tp_product_category_box hidden">
                        <div className="container">
                            <div className="top-line" />
                            <div className="heading-title">
                                <h3 className="tp_title">Tr??i c??y</h3>
                            </div>
                            <div className="row content-product-list products-resize">
                                {/* {this.fruitProduct()} */}

                            </div>
                        </div>
                    </div>
                    {/* ----------------------- */}
                    <div className="wap4">
                        <div className="container">
                            <div className="newsletter">
                                <div className="home-title">
                                    <h2 className="tp_title"> Tin t???c</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 wow fadeInUp">
                                        <div className="news-item text-center">
                                            <div className="img-news">
                                                <a href="/toi-oi-thanh-long...-viet-len-vi-tri-nong-o-sieu-thi-n27390.html" title="T???i, ???i, Thanh Long... Vi???t L??n V??? Tr?? N??ng ??? Si??u Th???">
                                                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/art/article_1506494062_81.png" alt="T???i, ???i, Thanh Long... Vi???t L??n V??? Tr?? N??ng ??? Si??u Th???" />
                                                </a>
                                                <a href="#" className="mask-brg" />
                                                <a href="/toi-oi-thanh-long...-viet-len-vi-tri-nong-o-sieu-thi-n27390.html" className="btn-readmore">Xem th??m <b>&gt;</b> </a>
                                            </div>
                                            <div className="content-news" style={{ paddingTop: 0 }}>
                                                <h3 className="title-news">
                                                    <a href="/toi-oi-thanh-long...-viet-len-vi-tri-nong-o-sieu-thi-n27390.html" title="T???i, ???i, Thanh Long... Vi???t L??n V??? Tr?? N??ng ??? Si??u Th???">T???i, ???i,
                      Thanh Long... Vi???t L??n V??? Tr?? N??ng ??? Si??u Th???</a>
                                                </h3>
                                                <div className="detail-news">
                                                    T???i, ???i, Thanh Long... Vi???t L??n V??? Tr?? N??ng ??? Si??u Th???</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 wow fadeInUp">
                                        <div className="news-item text-center">
                                            <div className="img-news">
                                                <a href="/nong-san-bac-my-ram-ro-tim-duong-vao-viet-nam-n27389.html" title="N??ng S???n B???c M??? R???m R??? T??m ???????ng V??o Vi???t Nam">
                                                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/art/article_1506494018_321.png" alt="N??ng S???n B???c M??? R???m R??? T??m ???????ng V??o Vi???t Nam" />
                                                </a>
                                                <a href="#" className="mask-brg" />
                                                <a href="/nong-san-bac-my-ram-ro-tim-duong-vao-viet-nam-n27389.html" className="btn-readmore">Xem th??m <b>&gt;</b> </a>
                                            </div>
                                            <div className="content-news" style={{ paddingTop: 0 }}>
                                                <h3 className="title-news">
                                                    <a href="/nong-san-bac-my-ram-ro-tim-duong-vao-viet-nam-n27389.html" title="N??ng S???n B???c M??? R???m R??? T??m ???????ng V??o Vi???t Nam">N??ng S???n B???c M??? R???m R???
                      T??m ???????ng V??o Vi???t Nam</a>
                                                </h3>
                                                <div className="detail-news">
                                                    N??ng S???n B???c M??? R???m R??? T??m ???????ng V??o Vi???t Nam.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 wow fadeInUp">
                                        <div className="news-item text-center">
                                            <div className="img-news">
                                                <a href="/vi-sao-nguoi-tieu-dung-khong-tin-rau-sach-n27388.html" title="V?? Sao Ng?????i Ti??u D??ng Kh??ng " >
                                                    <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/20731/art/article_1506493946_5.jpg" alt="V?? Sao Ng?????i Ti??u D??ng Kh??ng " />
                                                </a>
                                                <a href="#" className="mask-brg" />
                                                <a href="/vi-sao-nguoi-tieu-dung-khong-tin-rau-sach-n27388.html" className="btn-readmore">Xem th??m <b>&gt;</b> </a>
                                            </div>
                                            <div className="content-news" style={{ paddingTop: 0 }}>
                                                <h3 className="title-news">
                                                    <a href="/vi-sao-nguoi-tieu-dung-khong-tin-rau-sach-n27388.html" title="V?? Sao Ng?????i Ti??u D??ng Kh??ng ">V?? Sao Ng?????i
                      Ti??u D??ng Kh??ng "Tin" Rau S???ch?</a>
                                                </h3>
                                                <div className="detail-news">
                                                    Sau h??n 6 n??m tri???n khai Vietgap (th???c h??nh s???n xu???t n??ng nghi???p t???t) t???i nay
                    m???i ch??? c?? h??n 2.000 h??c ta tr??n t???ng s???</div>
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

export default ListProduct;