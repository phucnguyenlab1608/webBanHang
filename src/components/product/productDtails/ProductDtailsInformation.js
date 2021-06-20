import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { formatMoney } from '../../header/shopcart/PriceFomat'
class ProductDtailsInformation extends Component {
    render() {
        var { product } = this.props;
        return (
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                    <div id="img_product" className="m-b-20">
                        <img className="product_featured_image" src={product.image} alt="Chanh không hạt - 300gr" style={{ maxHeight: '400px', marginBottom: '15px' }} />
                        <div className="product_thumb owl-carousel owl-theme" style={{ opacity: 1, display: 'block' }}>
                            <div className="owl-wrapper-outer">
                                <div className="owl-wrapper" style={{ width: '222px', left: '0px', display: 'block' }}>
                                    <div className="owl-item" style={{ width: '111px' }}>
                                        <div className="item_img active">
                                            <a href="#"  >
                                                <img src={product.image} alt={product.title} style={{ maxHeight: '140px' }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-controls clickable" style={{ display: 'none' }}>
                                <div className="owl-buttons">
                                    <div className="owl-prev"><span className="fa fa-arrow-left" /></div>
                                    <div className="owl-next"><span className="fa fa-arrow-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="product-title">
                        <h1 title="Chanh không hạt - 300gr" className="name tp_product_detail_name" style={{ marginTop: 0 }}>{product.title}asdasdasd</h1>
                    </div>
                    <span className="pview-ivt">Tình trạng:
                                        <span className="status_name availabel">Còn hàng</span> </span>
                    <div className="product_price" id="price-preview" style={{ paddingBottom: 0, marginTop: 0, padding: '10px 0' }}>
                        <p className="price-title">Giá:</p><span className="main-price tp_product_detail_price">{formatMoney(this.commaMoney(product.price))}</span> <span className="note-price" />

                    </div>
                    <div className="clearfix product_quantity">
                        <label className="label_quantity">Số lượng</label>
                        <input name="quantity" id="quantity_product" className="quantity text-center input_quantity" type="number" min={1} max={5000} defaultValue={1} style={{ width: '70px', height: '40px' }} />
                    </div>
                    <div className="clearfix">
                        <div className="col-lg-5 col-sm-6 col-xs-12 col-xxs-12 p-l-0 p-r-xxs-0 m-b-10">
                            <div className="box-add-cart">
                                <button id="buy-now" className="tp_button btn btnAddToCart" >

                                    <span className="tile text_buy">Mua ngay</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix">
                        <div className="depotStores tp_product_detail_depot hidden" />
                    </div>
                    <div className="clearfix">
                        <div id="share_product" className="m-b-20">
                            <label>Chia sẻ: </label>
                            <ul>
                                <li className="facebook">
                                    <div className="fb-like fb_iframe_widget" data-href="http://t0212.store.nhanh.vn/chanh-khong-hat-300gr-p5189344.html" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&app_id=&container_width=0&href=http%3A%2F%2Ft0212.store.nhanh.vn%2Fchanh-khong-hat-300gr-p5189344.html&layout=button_count&locale=vi_VN&sdk=joey&share=true&show_faces=true&size=small">
                                        <span style={{ verticalAlign: 'bottom', width: '150px', height: '28px' }}><iframe name="f60abf3c37173" width="1000px" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.12/plugins/like.php?action=like&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df5d5fe77de3b5c%26domain%3Dt0212.store.nhanh.vn%26origin%3Dhttp%253A%252F%252Ft0212.store.nhanh.vn%252Ff23fe3a19cb27e4%26relation%3Dparent.parent&container_width=0&href=http%3A%2F%2Ft0212.store.nhanh.vn%2Fchanh-khong-hat-300gr-p5189344.html&layout=button_count&locale=vi_VN&sdk=joey&share=true&show_faces=true&size=small" style={{ border: 'none', visibility: 'visible', width: '150px', height: '28px' }} className /></span></div>
                                </li>
                                <div className="addthis_toolbox addthis_default_style ">
                                    <a style={{ borderBottom: 'none' }} className="addthis_button_google_plusone" />
                                    <a style={{ borderBottom: 'none' }} className="addthis_button_twitter at300b" title="Twitter" href="#"><span className="at-icon-wrapper" style={{ backgroundColor: 'rgb(29, 161, 242)', lineHeight: '16px', height: '16px', width: '16px' }}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-twitter-1" title="Twitter" alt="Twitter" className="at-icon at-icon-twitter" style={{ width: '16px', height: '16px' }}>
                                        <title id="at-svg-twitter-1">Twitter</title>
                                        <g>
                                            <path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fillRule="evenodd" />
                                        </g>
                                    </svg></span></a>
                                    <a style={{ borderBottom: 'none' }} className="addthis_button_print at300b" title="In" href="#"><span className="at-icon-wrapper" style={{ backgroundColor: 'rgb(115, 138, 141)', lineHeight: '16px', height: '16px', width: '16px' }}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-print-2" title="Print" alt="Print" className="at-icon at-icon-print" style={{ width: '16px', height: '16px' }}>
                                        <title id="at-svg-print-2">Print</title>
                                        <g>
                                            <path d="M24.67 10.62h-2.86V7.49H10.82v3.12H7.95c-.5 0-.9.4-.9.9v7.66h3.77v1.31L15 24.66h6.81v-5.44h3.77v-7.7c-.01-.5-.41-.9-.91-.9zM11.88 8.56h8.86v2.06h-8.86V8.56zm10.98 9.18h-1.05v-2.1h-1.06v7.96H16.4c-1.58 0-.82-3.74-.82-3.74s-3.65.89-3.69-.78v-3.43h-1.06v2.06H9.77v-3.58h13.09v3.61zm.75-4.91c-.4 0-.72-.32-.72-.72s.32-.72.72-.72c.4 0 .72.32.72.72s-.32.72-.72.72zm-4.12 2.96h-6.1v1.06h6.1v-1.06zm-6.11 3.15h6.1v-1.06h-6.1v1.06z">
                                            </path>
                                        </g>
                                    </svg></span></a>
                                    <div className="atclear" />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    commaMoney = (price) => {
        var total = price * 1
        return total
    }    
}


export default ProductDtailsInformation;