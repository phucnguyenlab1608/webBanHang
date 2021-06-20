import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListProduct from '../components/product/lisproduct/ListProduct';
import PropTypes from 'prop-types';
import VegetableProducts from '../components/product/lisproduct/VegetableProducts';
import { actAddToCart } from '../actions/index';
class ProductContainer extends Component {
    render() {
        var { Databases } = this.props;
        return (
            <ListProduct >
                {this.showProductVegetables(Databases)}
                {/* {this.showProductFruits(Databases)}  */}
            </ListProduct>
        );
    }

    showProductVegetables(dataBase) {
        var result = '';
        var { onAddToCart } = this.props;
        if (dataBase.length > 0) {
            result = dataBase.map((product, key) => (
                // console.log(value)
                <VegetableProducts
                    key={key}
                    product={product}
                    onAddToCart={onAddToCart}
                // match={this.props.render}
                />

            ))
        }
        return result;

    }
    // var product = dataBase.filter((dataBase) => {
    //     dataBase.species.indexOf("fruit") !== -1;
    // });
    // var lisproduct = product.map((product, key) => {
    //     var { onAddToCart } = this.props;
    //     <VegetableProducts
    //         key={key}
    //         product={product}
    //         onAddToCart={onAddToCart}
    //     />
    // })'


    // if (dataBase.length > 0) {
    //     result = dataBase.map((product, key) => (
    //         // console.log(value)
    //         <VegetableProducts
    //             key={key}
    //             product={product}
    //             onAddToCart={onAddToCart}
    //         />

    //     ))
    // }
    // return result;

    // showProductFruits(dataBase){
    //     var result = '';
    //     if(dataBase.length > 0){
    //       result = dataBase.filter(d => d.species == "fruit").map((value, key) => (
    //             // console.log(value)
    //             <VegetableProducts
    //                 key={key}
    //                 id={value.id}
    //                 title={value.title}
    //                 price={value.price}
    //                 image={value.image}
    //             />

    //         ))
    //     }
    //     return result;
    // }

}


ProductContainer.propTypes = {
    DatabasesImported: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            species: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            numberOfProductsSold: PropTypes.number.isRequired,
        })
    ).isRequired
}
const mapStateToProps = (state) => {
    return {
        Databases: state.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);