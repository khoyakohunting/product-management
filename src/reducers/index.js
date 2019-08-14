import { ADD_PRODUCT, DATA_LOADED, DATA_DELETED, DATA_EDIT, DATA_UPDATE, FETCH_PRODUCT_PENDING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR } from '../constants/action-type'
const initialState = {
    products: [],
    eproduct:{},
    isEditing: false,
    error: null
};
function rootReducer(state = initialState, action){
    if(action.type === ADD_PRODUCT){
        // state.products.push(action.payload);
        return Object.assign({},state,{
            products: state.products.concat(action.payload)
        });
    }
    // if(action.type === DATA_LOADED){
    //     return Object.assign({},state,{
    //         products: state.products.concat(action.payload)
    //     });
    // }
    if(action.type === DATA_DELETED){
        return Object.assign({},state,{
            products: state.products.filter(data => action.id !== data.id)
        });
    }
    if(action.type === DATA_EDIT){
        //console.log("reducers",action.id);
        return Object.assign({}),state,{
            products: state.products,
            eproduct: state.products.find(data => action.id === data.id),
            isEditing: true
        }
    }
    if(action.type === DATA_UPDATE){
        return Object.assign({}),state,{
            products: state.products.filter(data => action.payload.id !== data.id).concat(action.payload),
            eproduct: {},
            isEditing: false
        }
    }
    if(action.type === FETCH_PRODUCT_PENDING){
        return Object.assign({}),state,{
            isLoading: true
        }
    }
    if(action.type === FETCH_PRODUCT_SUCCESS){
        //console.log(action);
        return Object.assign({}),state,{
            products: action.products,
            isLoading: false
        }
    }
    if(action.type === FETCH_PRODUCT_ERROR){
        return Object.assign({}),state,{
            error: action.error,
            isLoading: false
        }
    }
    return state;
};
export const getProducts = state => state.products;
export const getProductsPending = state => state.isLoading;
export const getProductsError = state => state.error;
export default rootReducer;