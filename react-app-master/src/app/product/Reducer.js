import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
    //for products list
    loading: false,
    error: null,

    products: [],

    //for edit page.
    //you may do this on different edit reducer

    product: {
        name: '',
        year: '',
        brandId: ''
    },

    brands: [],
    brand: {},

}

export default
     function productReducer(state = INITIAL_STATE, action) {
        console.log("product reducer ", state, action);
        
        switch(action.type) {
            case ActionTypes.LOADING: {
                return Object.assign({}, state, {loading: action.payload.loading})
            }

            case ActionTypes.INIT_ERROR: {
                return Object.assign({}, state, {error: action.payload.error})
            }

            case ActionTypes.INIT_PRODUCTS: {
                return Object.assign({}, state, {products: action.payload.products})
            }


            case ActionTypes.INIT_PRODUCT: {
                return Object.assign({}, state, {product: action.payload.product})
            }

            case ActionTypes.INIT_BRAND: {
                return Object.assign({}, state, {brand: action.payload.brand})
            }


            case ActionTypes.INIT_BRANDS: {
                return Object.assign({}, state, {brands: action.payload.brands})
            }

            default:
                return state;
        }

}