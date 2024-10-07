import React, { createContext, useEffect, useReducer} from "react";
import './Tkrdx.css';
import CartContext from "./CartContext";
import {Data} from "./Data";
import { reducer } from "./Dlt";


export  const ContextCart = createContext();

const initialState = {
    item : Data,
    totalAmount : 0,
    totalItem :0,
}

const Cart = () => {
    
    const [state,dispatch] = useReducer(reducer,initialState);

    const removeItem = (id) => {
        return dispatch ({
            type:"REMOVE_ITEM",
            payload : id,
        })
    }

    const clearCart = () => {
        return dispatch ({
            type: "CLEAR_CART"
        })
    }

    const increment = (id) => {
        return dispatch ({
            type : "INCREMENT",
            payload : id,
        })
    }

    const decrement = (id) => {
        return dispatch ({
            type : "DECREMENT",
            payload : id,
        })
    }

    useEffect(() =>{
        dispatch({
            type : "GET_TOTAL",
        })
    },[state.item])

    
    return(
        <ContextCart.Provider value={{...state, removeItem,clearCart,increment,decrement}}>
        <CartContext/>
        </ContextCart.Provider>
    )
}

export default Cart;