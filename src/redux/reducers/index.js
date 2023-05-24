import { combineReducers } from "redux";
import allreducers from "./allreducers";
import cartreducer from "./cartreducer";
import signupreducer from "./signupreducers";
import userreducer from "./userreducer";

export const reducers = combineReducers({
    allreducers,
    cartreducer,
    signupreducer,
    userreducer
})