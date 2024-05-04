import {ADD_TO_CART} from "../Constant"
  export const addCart = (data) =>{
    return{
        type: ADD_TO_CART,
        data:data
    }
}

  export const removeCart = (data) =>{
    return{
        type: 'REMOVE_TO_CART',
        data:data
    }
}