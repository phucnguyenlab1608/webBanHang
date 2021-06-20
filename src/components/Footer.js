import React, { Component } from 'react';
import './css/style.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer tp_footer">
                <div className="register-news">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 wow slideInLeft">
                                <div className="content-register-news">
                                    <p style={{ fontSize: '28px', color: '#fff', marginTop: 0, marginBottom: '10px', textTransform: 'uppercase' }}>
                                        ĐĂNG KÝ NHẬN TIN</p>
                                    <p>Để cập nhật những thông tin mới nhất về thị trường hạt điều Việt Nam</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-register-news">
                                    <form acceptCharset="UTF-8" action="/account/contact" className="contact-form" method="post">
                                        <input type="text" id="newsletter_signup" name="contact[mobile]" className="form-control" placeholder="Điền địa chỉ Email của bạn" style={{ paddingLeft: '10px' }} />
                                        <input type="submit" className="btnSubscribe tp_button" defaultValue="Đăng ký" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12 footer-left">
                                <div className="fi-about-block grid__item footer-new">
                                    <div className="fi-title">
                                        THÔNG TIN</div>
                                    <div className="fi-content" style={{ textAlign: 'justify' }}>
                                        <p className="text-justify">
                                            Nhanh.vn là giải pháp quản lý bán hàng trên nền tảng điện toán đám mây, cung cấp
                                            website, phần mềm quản lý bán hàng,
                                            đồng bộ thời gian thực dữ liệu giữa online và offline, giúp doanh nghiệp phát triển
                kinh doanh online hiệu quả hơn.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 newfooter">
                                <div className="fi-title">CHÚNG TÔI Ở ĐÂY</div>
                                <div className="fi-content we_here" />
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 newfooter">
                                <div className="fi-title">
                                    Danh mục</div>
                                <div className="fi-content">
                                    <p><a href="/album">Xu hướng</a></p>
                                    <p><a href="/">Best Seller</a></p>
                                    <p><a href="/promotion">Khuyến mãi</a></p>
                                    <p><a href="/news">Tin tức</a></p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 newfooter">
                                <div className="fi-title">
                                    THEO DÕI</div>
                                <div className="fi-content">
                                    <div className="fb-page fb_iframe_widget" data-href="https://www.facebook.com/nhanh.vn/" data-tabs="timeline" data-height={220} data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=262&height=220&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fnhanh.vn%2F&locale=vi_VN&sdk=joey&show_facepile=true&small_header=true&tabs=timeline">
                                        <span style={{ verticalAlign: 'bottom', width: '262px', height: '220px' }}><iframe name="f1b69e109528a7c" width="1000px" height="220px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df21a07baf9f6df%26domain%3Dt0212.store.nhanh.vn%26origin%3Dhttp%253A%252F%252Ft0212.store.nhanh.vn%252Ff1ac008bced747%26relation%3Dparent.parent&container_width=262&height=220&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fnhanh.vn%2F&locale=vi_VN&sdk=joey&show_facepile=true&small_header=true&tabs=timeline" style={{ border: 'none', visibility: 'visible', width: '262px', height: '220px' }} className /></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-footer">
                    <p className="text-center" />
                </div>
                <div className="coppyright">
                    <div className="desFooter" style={{ display: 'block', margin: '10px auto', lineHeight: 1 }}>
                        <p data-runtime="Memory:3,88 mb - Time:0,08s" className="designBy" style={{ fontWeight: 'bold', color: '#333', textAlign: 'center', margin: '10px auto 0', fontSize: '15px' }}>
                            Thiết kế web bởi
        <a style={{ marginTop: '5px', display: 'inline-block', fontSize: '15px', color: '#dc3333' }} href="https://nhanh.vn" target="taget-blank">nocopyright</a>
                        </p>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;