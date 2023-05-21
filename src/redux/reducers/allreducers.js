import { ActionTypes } from "../constants/action-types";

const initialState = {
    products : [
       
    ]
}

const allreducers = (state=initialState,{type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            //console.log("products ",payload)
            return {
                products : [...state.products,payload]
            }

            // case ActionTypes.ADD_TO_CART:
            // console.log("productsss ",payload)
             
            // return {
            //     //  cartproducts : [...state.cartproducts,payload],
            //     //  products : [...state.products]
               
            //     cartproducts: [...state.cartproducts, payload],
            //     products: [...state.products],
            // }

            default: 
            return state
    }
}



export default allreducers;