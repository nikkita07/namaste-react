/**
 * 
 STORE
=> The current Redux application state lives in an object called the store .
=> The store is created by passing in a reducer, and has a method called getState 
that returns the current state value:

 DISPATCH
=> The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() 
and pass in an action object.

 SELECTORS (HOOKS IN REACT)
=> Selectors are functions that know how to extract specific pieces of information from a store state value
 */



import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer :{
        cart : cartReducer,
        // user : userReducer
    }
});
export default appStore;