
export function fetchJson(url) {
    return window.fetch(url)
           .then (response => response.json()) 
}


export function getProducts() {
    return fetchJson("http://localhost:7070/api/products")
}