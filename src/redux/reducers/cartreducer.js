import { ActionTypes } from "../constants/action-types";

const initialState = {
    cartproducts : [
       
    ],
    cartTotalQuantity:0,
    cartTotalAmount:0
}

const cartreducer = (state=initialState,{type, payload}) => {
    switch(type){
            case ActionTypes.ADD_TO_CART:
            // console.log("productsss ",payload)
             const cartIndex = state.cartproducts.findIndex((item) => item.id === payload.id)
            //  console.log("cartIndex ",cartIndex)
             const productsall = state.cartproducts.filter(item => item.id !== payload.id)
            //  console.log("productsall ",productsall)
             if(cartIndex >= 0 ){
                var product = state.cartproducts.filter((item) => item.id === payload.id)
                    product[0].cartQuantity += 1
                    product[0].TotalPrice = product[0].cartQuantity*product[0].price
                // const productadd = [product.cartQuantity += 1]
                return {
                     cartproducts : [...productsall,...product]
                    //cartproducts : [...productsall,productadd]
                }
                // return{
                //     cartproducts : [...diffproduct,...product]
                // }

             }else{
                return {
                    cartproducts: [...state.cartproducts, {...payload,cartQuantity:1,TotalPrice:payload.price }],
                }
             }
            
             case ActionTypes.INCREMENT_CART_ITEM:
                var leftproduct = state.cartproducts.filter(item => item.id !== payload.id)
                var product = state.cartproducts.filter((item) => item.id === payload.id)
                product[0].cartQuantity += 1
                product[0].TotalPrice = product[0].cartQuantity*product[0].price
                return {
                    cartproducts : [...leftproduct,...product]
                }

                case ActionTypes.DECREMENT_CART_ITEM:
                    var leftproduct = state.cartproducts.filter(item => item.id !== payload.id);
                    var product = state.cartproducts.filter((item) => item.id === payload.id);
                    //console.log("gfgh",product[0])
                    if(product[0].cartQuantity === 1){
                       // console.log("a")
                        return {
                            cartproducts : [...state.cartproducts]
                        }
                    }
                    else{
                        //console.log("b")
                        product[0].cartQuantity -= 1;
                            product[0].TotalPrice = product[0].cartQuantity*product[0].price;
                        return {
                            cartproducts : [...leftproduct,...product]
                        }
                    }
                    
                case ActionTypes.REMOVE_CART_ITEM: 
                var leftproduct = state.cartproducts.filter(item => item.id !== payload.id);
                if(leftproduct.length > 0){
                    return {
                        cartproducts : [...leftproduct]
                    }
                }
                return {
                    cartproducts : []
                 }

            default: 
            return state
    }
}



export default cartreducer;