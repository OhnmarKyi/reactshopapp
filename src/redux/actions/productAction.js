import { ActionTypes } from "../types/actionTypes";

export const getProductList=(products)=>{
    return{
        type:ActionTypes.GET_PRODUCT_LIST,
        payload:products
    }
}

export const addProduct=(product)=>{
    return{
        type:ActionTypes.ADD_PRODUCT,
        payload:product
    }
}

export const getProductById=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const updateProduct=(product)=>{
    return {
        type:ActionTypes.UPDATE_PRODUCT,
        payload:product
    }
}