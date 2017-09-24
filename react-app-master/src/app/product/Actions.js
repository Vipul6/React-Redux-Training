import * as ActionTypes from "./ActionTypes";
import * as service from "./Service";


export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}

export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        payload: {
            loading: status
        }
    }
}

export function initProduct(product) {
    return {
        type: ActionTypes.INIT_PRODUCT,
        payload: {
            product: product
        }
    }
}



export function initBrand(brand) {
    return {
        type: ActionTypes.INIT_BRAND,
        payload: {
            brand: brand
        }
    }
}


export function initBrands(brands) {
    return {
        type: ActionTypes.INIT_BRANDS,
        payload: {
            brands: brands
        }
    }
}


export function initError(error) {
    return {
        type: ActionTypes.INIT_ERROR,
        payload: {
            error: error
        }
    }
}


//Thunk 
//async method
//ajax call
export function fetchProducts() {
    //called thunk middleware
    //thunk pass dispatch as arguments
    return function(dispatch) {
        console.log("CAlled later");

        dispatch(initError(false));
        dispatch(loading(true));

        service.getProducts()
        .then ( products => {
            dispatch(initProducts(products));
            dispatch(loading(false));
        })
        .catch (error => {
            dispatch(loading(false));
            dispatch(initError(error));
        })
    }
}
 

//fetch a product


export function fetchBrand(id) {
    return function (dispatch) {
        console.log("called by redux thunk");
 
        service.getBrand(id)
        .then ( brand => {
            console.log("got brand  ", brand);
            let action = initBrand(brand);
            dispatch(action);
        })
    }
}


export function fetchProduct(id) {
    return function (dispatch) {
        console.log("called by redux thunk");

        dispatch(loading(true));

        service.getProduct(id)
        .then ( product => {
            console.log("got product  ", product);
            
            let brandId = product.brandId;

            //GET /api/brands/123
            dispatch(fetchBrand(brandId));

            let action = initProduct(product);
            dispatch(action);
            dispatch(loading(false));
        })
    }
}
//fetch a brand by product.brandId


//fetch list of brands for select 


export function fetchBrands(id) {
    return function (dispatch) {
        console.log("called by redux thunk");
 
        service.getBrands(id)
        .then ( brands => {
            console.log("got brands  ", brands);
            let action = initBrands(brands);
            dispatch(action);
        })
    }
}




//For Sagas

export function fetchProductsRequested() {
    return {
        type: "FETCH_PRODUCTS_REQUESTED"
    }
}


export function fetchProductRequested(id) {
    return {
        type: "FETCH_PRODUCT_REQUESTED",
        payload: {
            id: id
        }
    }
}