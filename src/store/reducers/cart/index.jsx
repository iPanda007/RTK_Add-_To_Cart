import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../../cartItems';

const initialState = {
    cartItems :cartItems,
    amount : cartItems.length,
    total : 0 ,
    isLoading :true,
}

const slice = createSlice({
     name:'cart',
    initialState,
    reducers: {
         clearCart : (state,action)=>{
            
            state.cartItems = [];
            state.amount = 0;
         
        },
        removeItem : (state,{payload})=>{
             console.log(payload)
             state.cartItems = state.cartItems.filter((item,index)=>{
                  return  item.id !== payload
             });

             state.amount =  state.amount -1
        },
        increase:(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease :(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id)
            cartItem.amount = cartItem.amount - 1
        }
        
    }
})


export const { clearCart,removeItem,decrease,increase } =  slice.actions



export default slice.reducer