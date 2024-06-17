import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    paymentId: "", // Add paymentId field to the initial state
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    setPaymentId: (state, action) => {
      state.paymentId = action.payload;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex((p) => p._id === productId);

      if (productIndex !== -1) {
        const productToRemove = state.products[productIndex];
        state.products.splice(productIndex, 1); // Remove product from array
        state.quantity -= 1;
        // state.quantity -= productToRemove.quantity;
        state.total -= productToRemove.price * productToRemove.quantity;
        state.paymentId = "";
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      state.paymentId = "";
    },
  },
});

export const { addProduct, removeProduct, setPaymentId, clearCart } = cartSlice.actions;
export default cartSlice.reducer;