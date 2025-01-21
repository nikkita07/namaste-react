import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   /* An action is a plain JavaScript object that has 
 a type field. think of an action as an event that
 describes something that happened in the application.*/

 //first part is the feature or category that this action belongs to
 //GIVE A DESCRIPTIVE NAME 
    name:'cart',
    // second part is the specific thing that happened.
    //Here, the cart is imagined to be empty at start
    initialState:{
        items:[]
    },
    reducers :{
        /**A reducer is a function that receives the current state 
         * and an action object, decides how to update the 
         * state if necessary, and returns the new state: 
         * (state, action) => newState
         * 
         * Reducers must always follow some specific rules:

                => They should only calculate the new state value based on the state and action arguments
                => They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
                => They must be "pure" - they cannot do any asynchronous logic, calculate random values, or cause other "side effects"
         * 
         * 
         *  */

        addItem:(state,action)=>{
            //this function will modify the slice
           state.items.push(action.payload);
        }
        ,
        removeItem :(state,action)=>{
            //redux use IMMER BTS
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length = 0;
        }
    }
})
export const {addItem,removeItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer ;