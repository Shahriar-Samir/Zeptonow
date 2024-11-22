import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem, CartState } from "@/types";




const initialState:CartState = {
    list:[],
    total:0
}



const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.total =
              state.list.reduce((sum, item) => sum + item.quantity, 0) +
              action.payload.quantity;
      
            const check = state.list.findIndex(
              (item) => item.name === action.payload.name
            );
      
            if (check !== -1) {
              state.list[check].quantity += action.payload.quantity;
            } else {
              state.list.push(action.payload);
            }
          },
        setToCart: (state,action)=>{
            
        },
        removeFromCart: (state,action)=>{

        },
        clearFromCart: (state,action)=>{

        }
    }
})


export const {addToCart,removeFromCart,clearFromCart,setToCart} = cartSlice.actions

export default cartSlice.reducer;