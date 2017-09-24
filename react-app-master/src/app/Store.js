import {createStore, combineReducers, 
    applyMiddleware} from "redux";

import cartReducer from "./cart/Reducer";


//calls cartReducer(undefiend, {type: '@@redux/INIT'})
//let store = createStore(cartReducer);


//with seed data
let items = [{id: 10000, name: 'product 10000', price: 100, qty: 1}]
//calls cartReducer([{id: 1, name: 'produ..'}], '@@redux/INIT')
//for single reducer
//let store = createStore(cartReducer, items);

import productReducer from "./product/Reducer";

//multiple reducers
let rootReducer = combineReducers({
    //stateName: reducerFunc
    cartItems: cartReducer,
    productState: productReducer // {}
})


import thunk from "redux-thunk";

//for seed, {stateName: value}
let store = createStore(rootReducer, 
    {cartItems: items},
    applyMiddleware(thunk),
)

export default store;

// FOR SINGLE REDUCER BEGIN

// Store initialization stage
// store = createStore(...);
// store calls 
// newState = cartRducer(undefined, '@@redux/INIT')
// ==> newState = []
// set curent state = newState = []

// values = store.getState() => []

// dispatch stage
// Step 1: store.dispatch (action{add item})
//Store:
// newState =  cartReducer([], action{add item});
// state = newState [{id: 1}]
// notify subscriber


// values = store.getState() => [{id: 1}]


//Step 2: store.dispatch (action{empty item})
//Store:
// newState =  cartReducer([{id: 1}], action{emoty cart});
// state = newState []
// notify subscriber

// values = store.getState() => []



//Step 3: store.dispatch (action{NOT_IMPLEMENTED})
//Store:
// newState =  cartReducer([], action{NOT_IMPLEMENTED});
// state = newState []
// notify subscriber


// values = store.getState() => []


// FOR SIGNLE REDUCER END







// FOR COMBINE REDUCER BEGIN

// Store initialization stage
// store = createStore(rootReducer, {cartItems: items});
// store calls 
// newState = cartReducer([], '@@redux/INIT')
// ==> set current state = newState = {
//                   cartItems:   [],
//                   productState:  {}
//                 }  

// values = store.getState() => {
//                   cartItems:   [],
//                   productState: {}
//                 }  

// dispatch stage
// Step 1: store.dispatch (action{add item})
//Store:
//   cartReducer(state.cartItems, action{add item});
//  productReducer(state.productState, action{add item})
// state = newState []
// values = store.getState() => {
//                   cartItems:   [{id: 1, ..}],
//                   productState: {}
//                 }  
// notify subscriber

 

// FOR COMBINE REDUCER END
