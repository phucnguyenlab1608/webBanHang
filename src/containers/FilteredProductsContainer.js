import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilteredProducts from '../components/product/filteredProducts/FilteredProducts';
import FilterdProductNew from '../components/product/filteredProducts/FilterdProductNew'



class FilteredProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <FilteredProducts>
                {this.ShowProducts(products)}
            </FilteredProducts>
        );
    }
    ShowProducts(products) {
        var result = '';
        result = products.map((value, id) => {
            if (value.classify == this.props.match.params.classify) {
                return (
                    <FilterdProductNew
                        key={id}
                        product={value.product}
                    />
                )

            }
        });
        return result
    }
}

// đang xử lí dở ở cái url
// ShowProducts = (products) => {
// var result = ''
// switch (result = products.filter(d => d.classify == "Rau ăn lá")) {
//     case 'Rau ăn lá':
//         map()
// }
// console.log(products)

// }
function mapStateToProps(state) {
    return {
        products: state.product
    };
}
export default connect(mapStateToProps, null)(FilteredProductsContainer);