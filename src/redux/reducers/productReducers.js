import { ActionTypes } from "../types/actionTypes";
const initialState={
    products:[]
}

export const getProductList=(state=initialState,{type,payload})=>{
  switch(type){
    case ActionTypes.GET_PRODUCT_LIST:
        return {...state,products:payload}
    default:
     return state;
  }
}

export const addProduct=(state={},{type,payload})=>{  
  switch (type) {
      case ActionTypes.ADD_PRODUCT:
          return {...state,product:payload}
      default:
          return state;
  }
}

export const getProductById=(state={},{type,payload})=>{
  switch(type){
    case ActionTypes.SELECTED_PRODUCT:
    return {...state,...payload}
    default:
      return state;
  }
}

export const updateProduct=(state={},{type,payload})=>{
  switch(type){
  case ActionTypes.UPDATE_PRODUCT:
    return {...state,...payload}
  default:
    return state;
  }
}