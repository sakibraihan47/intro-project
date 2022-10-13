import { createContext, useReducer } from "react";
export const Cartview = createContext();

const initialState ={
    cart: {cartIems:[]},
};

function reducer(state,action){
    switch (action.type){
        case 'CART_ADD_ITEM': {
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(
                (item)=> item.id === newItem.id
            );

            const cartItems = existItem? state.cart.cartItems.map():
        }
    }
}
