//route configuration
import React from "react";

import {HashRouter as Router,
        Route, 
        Redirect,
        Switch } from "react-router-dom";

import {App} from "./App";
import Home from "./components/Home";
import About from "./components/About";

import NotFound from "./components/NotFound";

// import Cart from "./cart/components/ReduxCart";
// import HOC from "./cart/components/HOC";

//import Cart from "./cart/containers/Cart";


import Loadable from 'react-loadable';

function Loading() {
    return (
        <div>Loading ...</div>
    )
}

const LoadableCartComponent = Loadable({
    loader: () => import('./cart/containers/Cart'),
    loading: Loading,
  });
  

import ProductRoutes from "./product/Routes";

export default function Routes() {
    return (
        <Router>
            <App theme="white">
                <Switch>
                     
                    <Route path="/" exact component={Home} />
                  

                    <Route path="/products"  component={ProductRoutes} />
                    {/* 
                    <Route path="/cart" exact  >
                            <HOC component={Cart} />
                    </Route> */}

                    <Route path="/cart" component={LoadableCartComponent}  >
                             
                    </Route>
                       

                    <Route path="/about/:team" exact component={About} />
                    
                    <Redirect path="/go-to-cart" to="/cart" />

                    <Route path="*" component={NotFound} />

                </Switch>
            </App>
        </Router>
    )
}