import { ActionTypes } from "../constants/action-types";
import { users } from "../../userdata";
const initialState = {
    user : {
       isAuthenticate:false,
       isloggedin:false,
       error:false
    }
}


const userreducer = (state=initialState,{type, payload}) => {
    switch(type){
        case ActionTypes.LOGIN_USER:
            //console.log("payload ",payload)
            //console.log("userdta ",users)
            const loginuserdata = users.filter((user) => user.username === payload.username && user.password === payload.password)
            //console.log("loginuserdata ",loginuserdata)
            if(loginuserdata.length > 0){
                 return {
                    user : [
                        {
                        isAuthenticate:true,
                        isloggedin:true,
                        error:false
                        }
                    ]
                }
            }else{
                return {
                    user : [
                        {
                            isAuthenticate:false,
                            isloggedin:false,
                            error:true
                            }
                    ]
                }
            }
            
            case ActionTypes.LOGOUT_USER:
             return {
                user : [
                    {
                    isAuthenticate:false,
                    isloggedin:false,
                    error:false
                    }
                ]
             }

             case ActionTypes.REMOVE_ERROR:
             return {
                user : [
                    {
                    isAuthenticate:false,
                    isloggedin:false,
                    error:false
                    }
                ]
             }

            default: 
            return state
    }
}

export default userreducer;