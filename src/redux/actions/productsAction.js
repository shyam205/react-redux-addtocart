import { ActionTypes } from "../constants/action-types";

export const addToCart = (product) => {
   console.log("productq ",product)
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:product
   }
}

export const setproducts = (products) => {
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
   }
}

export const signupuser = (userdetail) => {
    return {
        type:ActionTypes.SIGNUP_USER,
        payload:userdetail
    }
}

export const incrementcartitem = (product) => {
    return {
        type:ActionTypes.INCREMENT_CART_ITEM,
        payload:product
    }
}

export const decrementcartitem = (product) => {
    return {
        type:ActionTypes.DECREMENT_CART_ITEM,
        payload:product
    }
}

export const removecartitem = (product) => {
    return {
        type:ActionTypes.REMOVE_CART_ITEM,
        payload:product
    }
}

export const userlogin = (payload) => {
    return {
        type:ActionTypes.LOGIN_USER,
        payload:payload
    }
}


export const userlogout = (payload) => {
    return {
        type:ActionTypes.LOGOUT_USER,
        payload:payload
    }
}

export const removeerror = () => {
    return {
        type:ActionTypes.REMOVE_ERROR,
    }
}