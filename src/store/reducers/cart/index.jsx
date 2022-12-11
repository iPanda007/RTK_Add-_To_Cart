import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../../cartItems';

const initialState = {
    cartItems :cartItems,
    amount : 5,
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
               
        }
    }
})


export const { clearCart } =  slice.actions



export default slice.reducer