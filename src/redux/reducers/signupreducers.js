import { ActionTypes } from "../constants/action-types";

const initialState = {
    Users : [
        {
        username:"shyam",
        email: "shyam123@gmail.com",
        password:"shyam123",
        confirmpassword:"shyam123",
        }
    ]
}

const signupreducer = (state=initialState,{type, payload}) => {
    switch(type){
            case ActionTypes.SIGNUP_USER:
            console.log("productsss ",payload)
             
            return {
                Users : [...state.Users,payload]
            }

            default: 
            return state
    }
}



export default signupreducer;