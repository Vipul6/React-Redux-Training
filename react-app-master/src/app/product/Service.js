
import config from "config";

function fetchJson(url, options = undefined) {
    return fetch(url, options)
           .then ( response => response.json());
}

export function getProducts() {
    return fetchJson(config.apiEndPoint + "/api/products")
}


export function getBrands() {
    return fetchJson(config.apiEndPoint + "/api/brands?")
}


export function getProduct(id) {
    return fetchJson(config.apiEndPoint + "/api/products/" + id)
}


export function getBrand(id) {
    return fetchJson(config.apiEndPoint + "/api/brands/" + id)
}


export function deleteProduct(id) {
    return fetchJson(config.apiEndPoint + "/api/products/" + id, {
        method: 'DELETE'
    })
}

export function saveProduct(product) {

}


//fetch a product


export function fetchBrand(id) {
    return function (dispatch) {
        console.log("called by redux thunk");
 
        service.getBrand(id)
        .then ( brand => {
            console.log("got brand  ", brand);
            action = initBrand(brand);
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

            dispatch(fetchBrand(brandId));

            action = initProduct(product);
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
            action = initBrands(brands);
            dispatch(action);
        })
    }
}