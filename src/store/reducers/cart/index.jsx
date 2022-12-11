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
             state.cartItems = state.cartItems.filter((item,index)=>{
                  return  item.id !== payload
             });

             state.amount =  state.amount -1
        }
    }
})


export const { clearCart,removeItem } =  slice.actions



export default slice.reducer