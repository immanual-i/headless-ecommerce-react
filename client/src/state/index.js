import { createSlice } from '@reduxjs/toolkit';

// can be accessed anywhere.
const initialState = {
   isCartOpen: false,
   cart: [],
   items: [],
}

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      setItems: (state, action) => {
         state.items = action.payload;
      },
      addToCart: (state, action) => {
         state.cart = [...state.cart, action.payload.item]
         // not handling all edge cases, theres possibility of duplicate items
         const newItem = action.payload.item
         const itemIndex = state.cart.findIndex(item => item.id === newItem.id);
         if (itemIndex !== -1) {
            state.cart[itemIndex].count++;
         } else {
            state.cart.push({ ...newItem })
         }
      },
      removeFromCart: (state, action) => {
         state.cart = state.cart.filter((item) => item.id !== action.payload.id)
      },
      increaseCount: (state, action) => {
         state.cart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
               item.count++
            }
            return item;
         });
      },
      decreaseCount: (state, action) => {
         state.cart = state.cart.map((item) => {
            if (item.id === action.payload.id && item.count > 1) {
               item.count--
            }
            return item;
         });
      },
      setIsCartOpen: (state) => {
         state.isCartOpen = !state.isCartOpen;
      }
   }
});

export const {
   setItems,
   addToCart,
   removeFromCart,
   increaseCount,
   decreaseCount,
   setIsCartOpen,
} = cartSlice.actions;


export default cartSlice.reducer;

