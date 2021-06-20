import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

export const MSG_ADD_TO_CART_SUCCESS = 'Mua hàng thành công!';
export const MSG_UPDATE_CART_SUCCESS = 'Cập nhật giỏ hàng thành công!';
export const MSG_DELETE_PRODUCT_IN_CART_SUCCESS = 'Xóa sản phẩm khỏi giỏ hàng thành công!';

export const MSG_CART_EMPTY =
    <div style={{ padding: '40px 20px', fontSize: '15px' }}>
        <p style={{ margin: 0 }} className="text-center">Giỏ hàng của bạn hiện chưa có sản
    phẩm nào</p>
        <p className="text-center"><Link to="/" href="/product">Tiếp tục mua hàng</Link></p>
    </div>;
export const MSG_WELCOM = 'Chào mừng bạn đến với shopping online';
