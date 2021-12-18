import { createSlice } from "@reduxjs/toolkit";
import book from '../../../fackData/book.json';
export const cartSlice = createSlice({
    name: 'book',
    initialState: {
        bookList: book,
        cartList:[]
    },
    reducers: {
        addToCartList: (state, { payload }) => {
            state.cartList.push(payload)
        },
        removeToCartList: (state, { payload }) => {
            state.cartList = state.cartList.filter(
              (states) => states.id !== payload
            );
        }
    }
})
export const { addToCartList, removeToCartList } = cartSlice.actions;
export default cartSlice.reducer;