//bootstrapping
//bring react into real dom

import React from "react";

import {render} from "react-dom";

//import {App} from "./app/App";

import Routes from "./app/Routes";

import store from "./app/Store";

import {Provider} from "react-redux";


//compare real and virtual dom (diff algorithm)
//patch virtual dom into real dom
        render( <Provider store={store}>
                        <Routes>
                        </Routes>
                </Provider>
        , //virtual dom
        document.getElementById("root") //real dom
)
