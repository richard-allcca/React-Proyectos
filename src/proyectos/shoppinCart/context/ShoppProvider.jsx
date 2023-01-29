import { useReducer } from "react";
import { TYPES } from "../actions/shoppActions";
import { shoppReducer } from "../reducers/shoppReducer";
import { ShoppContext } from "./ShoppContext";
import { shoppingInitialState } from './../reducers/shoppReducer';


export const ShoppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(shoppReducer, shoppingInitialState);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_TO_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_TO_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };


  const data = {
    state,

    addToCart,
    deleteFromCart,
    clearCart
  };

  return <ShoppContext.Provider value={ data } >
    { children }
  </ShoppContext.Provider>;
};