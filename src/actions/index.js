import { ADD_PRODUCT, DATA_LOADED, DATA_DELETED, DATA_EDIT, DATA_UPDATE, FETCH_PRODUCT_PENDING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR } from '../constants/action-type';


export function addProduct(payload){
    return function(dispatch){
        fetch("http://localhost:3000/products",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "PostmanRuntime/7.15.0",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Postman-Token": "000515ec-42d3-4be2-b9de-25a6ea28c509,80eed575-8b66-4664-9b08-b1d7281c2398",
            "Host": "localhost:3000",
            "accept-encoding": "gzip, deflate",
            "content-length": "289",
            "Connection": "keep-alive",
            "cache-control": "no-cache"
          },
        body: JSON.stringify(payload)
    }).then(response => response.json())
    .then(json => {
        dispatch({ type: ADD_PRODUCT, payload: json });
    }).then(function(body){
        console.log(body);
    })
    }
};

export function getData(){
    return function(dispatch){
        dispatch(fetchProductPending());
        return fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(json => {
            if(json.error){
                throw(json.error);
            }
            dispatch(fetchProductSuccess(json));
            console.log("getdata",json)
            return json
        });
    };
}

export function deleteData(payload){
    return function(dispatch){
        fetch("http://localhost:3000/products/"+payload.id,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Postman-Token": "000515ec-42d3-4be2-b9de-25a6ea28c509,80eed575-8b66-4664-9b08-b1d7281c2398",
          },
        body: JSON.stringify(payload)
    }).then(response => response.json())
    .then(json => {
        dispatch({ type: DATA_DELETED, id: payload.id });
    }).then(function(body){
        console.log(body);
    })
    }
}

export function editProduct(payload){
    return function(dispatch){
        dispatch({type: DATA_EDIT, id:payload.id, isEditing: true });
    //     fetch("http://localhost:3000/products/"+payload.id,{
    //     method: 'DELETE',
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Postman-Token": "000515ec-42d3-4be2-b9de-25a6ea28c509,80eed575-8b66-4664-9b08-b1d7281c2398",
    //       }
    // }).then(response => response.json())
    // .then(json => {
    //     dispatch({ type: DATA_EDIT, id: payload.id });
    // }).then(function(body){
    //     console.log(body);
    // })
    }
}

export function updateProduct(payload){
    //console.log("updated data",payload)
    return function(dispatch){
        fetch("http://localhost:3000/products/"+payload.id,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Postman-Token": "000515ec-42d3-4be2-b9de-25a6ea28c509,80eed575-8b66-4664-9b08-b1d7281c2398",
          },
        body: JSON.stringify(payload)
    }).then(response => response.json())
    .then(json => {
        dispatch({ type: DATA_UPDATE, payload: payload});
    }).then(function(body){
        console.log(body);
    })
    }
}

// Product fetching state
function fetchProductPending(){
    return{
        type: FETCH_PRODUCT_PENDING
    }
}

function fetchProductSuccess(products){
    return{
        type: FETCH_PRODUCT_SUCCESS, products: products
    }
}

function fetchProductError(error){
    return{
        type: FETCH_PRODUCT_ERROR,
        error: error
    }
}