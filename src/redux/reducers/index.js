import { combineReducers } from "redux";
import allreducers from "./allreducers";
import cartreducer from "./cartreducer";
import signupreducer from "./signupreducers";


export const reducers = combineReducers({
    allreducers,
    cartreducer,
    signupreducer
})