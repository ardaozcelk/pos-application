import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addProduct: (state, action) => {
            const findCartItem = state.cartItems.find((item) => item._id === action.payload._id);
            // Yukarıda payload'dan gelen item cartItems içinde var mı bunu kontrol ediyoruz.
            // Eğer varsa bir daha eklemeyecek quantity değerini "1" arttıracak.
            // .find() ile aranan item'i getiriyor.
            if (findCartItem) {
                findCartItem.quantity = findCartItem.quantity + 1;
            } else {
                state.cartItems.push(action.payload);
            }
        },
        deleteCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            //.filter() ile silmek istediğimiz item hariç her item'i cartItems'in içine ekliyoruz.
        }
    }
});

export const { addProduct, deleteCart } = cartSlice.actions
export default cartSlice.reducer;