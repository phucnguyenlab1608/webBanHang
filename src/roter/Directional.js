import React, { Component } from 'react';

import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

import SearchPage from '../components/header/SearchPage';
import NotFound from '../components/NotFound';
import CartContainer from '../containers/CartContainer';
import FilteredProductsContainer from '../containers/FilteredProductsContainer';
import ProductContainer from '../containers/ProductContainer';
import ProductDtailsContainer from '../containers/ProductDtailsContainer';

class Directional extends Component {

    render() {
        // const router = [
        //     {
        //         path: '/',
        //         exact: true,
        //         main: () => { <ProductContainer /> }

        //     },
        //     {
        //         path: '/searchPage',
        //         exact: false,
        //         main: () => { <SearchPage /> }

        //     },
        //     {
        //         path: '/FilteredProducts',
        //         exact: false,
        //         main: () => { <FilteredProducts /> }

        //     },
        //     {
        //         path: '/Cart',
        //         exact: false,
        //         main: () => { <CartContainer /> }

        //     },
        //     {
        //         path: '/ProductDtails',
        //         exact: false,
        //         main: () => { <ProductDtails /> }

        //     },
        //     {
        //         path: '',
        //         exact: false,
        //         main: () => { <NotFound /> }

        //     },

        // ];



        return (
            <Switch>

                <Route exact path="/" component={ProductContainer} />
                <Route path="/searchPage" component={SearchPage} />
                <Route path="/FilteredProducts/:slug.:classify:html" component={FilteredProductsContainer} />
                <Route path="/Cart" component={CartContainer} />
                <Route path="/ProductDtailsContainer/:slug.:id:html" component={ProductDtailsContainer} />
                <Route path="" component={NotFound} />

            </Switch>
        );
    }
    showDirectional = (router) => {
        console.log(router)
        var result = '';
        if (router.length > 0) {
            result = router.map((key, router) => {
                return (
                    <Route
                        key={key}
                        path={router.path}
                        component={router.main}
                    />
                )
            })
        }
        return result;
    }
}

export default Directional;

