import React, { Component } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { convertUrl } from "../converts/Url"
class Nav extends Component {
    render() {
        var { product } = this.props;
        return (
            <ul class="cssmenu">
                <li class="sub-sub-menu">
                    <a href="/rau-cu-pc164580.html" class="tp_menu_item item-menu current"> Rau củ</a>
                    <div class="sub-menu tp_menu">
                        <div class="content clearfix">
                            <p class="arrow"></p>
                            <div class="hover-menu">
                                <ul class="sub-menu-2">
                                    <li>
                                        <Link to={'/FilteredProducts/' + convertUrl('rau ăn lá') + '.' + product.classify + 'html'} className="tp_menu_item  current link-router menu-hover">Rau ăn lá</Link>
                                    </li>
                                    <li>
                                        <Link to={'/FilteredProducts/' + convertUrl('rau ăn hoa quả') + '.' + product.id + 'html'}  className="tp_menu_item  current link-router menu-hover">Rau ăn hoa quả</Link>
                                    </li>
                                    <li>
                                        <Link to={'/FilteredProducts/' + convertUrl('rau ăn thân củ') + '.' + product.id + 'html'}  className="tp_menu_item  current link-router menu-hover">Rau ăn thân củ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="sub-sub-menu">
                    <a href="/trai-cay-pc164584.html" class="tp_menu_item item-menu current"> Trái cây</a>
                    <div class="sub-menu tp_menu">
                        <div class="content clearfix">
                            <p class="arrow"></p>
                            <div class="hover-menu">
                                <ul class="sub-menu-2">
                                    <li>
                                        <Link to={'/FilteredProducts/' + convertUrl(product.classify) + '.' + product.id + 'html'}  className="tp_menu_item  current link-router menu-hover">Trái cây Việt Nam</Link>
                                    </li>
                                    <li>
                                        <Link to={'/FilteredProducts/' + convertUrl(product.classify) + '.' + product.id + 'html'}  className="tp_menu_item  current link-router menu-hover">Trái cây nhập khẩu</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="sub-sub-menu">
                    <Link to={'/FilteredProducts/' + convertUrl(product.classify) + '.' + product.id + 'html'}  className="tp_menu_item  current link-router menu-hover"> Thịt</Link>
                    <div class="sub-menu tp_menu">
                        <div class="content clearfix">
                            <p class="arrow"></p>
                            <div class="hover-menu">
                                <ul class="sub-menu-2">
                                    <li><Link to={'/FilteredProducts/' + convertUrl(product.classify) + '.' + product.id + 'html'}  className="tp_menu_item  current link-router menu-hover">Thịt bò</Link></li>
                                    <li><Link to={'/FilteredProducts/' + convertUrl(product.classify) + '.' + product.id + 'html'}  className="tp_menu_item  current link-router menu-hover">Thịt heo</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default Nav;