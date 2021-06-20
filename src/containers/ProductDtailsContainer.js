import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddToCart } from '../actions/index';
import ProductDtails from '../components/product/productDtails/ProductDtails';
import ProductDtailsInformation from '../components/product/productDtails/ProductDtailsInformation';

class ProductDtailsContainer extends Component {
    render() {
        var { Databases } = this.props;
        return (
            <ProductDtails >
                {this.informationProductDtails(Databases)}
            </ProductDtails>
        );
    }
    informationProductDtails(dataBase) {
        var result = '';
        result = dataBase.map((value, id) => {
            if (value.id == this.props.match.params.id) {
                return (
                    <ProductDtailsInformation
                        key={id}
                        product={value}
                    />
                )
            }
        });
        return result
    }

}
const mapStateToProps = (state) => {
    return {
        Databases: state.product
    }
}

export default connect(mapStateToProps, null)(ProductDtailsContainer);