import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CartsReducer = (state = initialState.carts, action) => {
  switch (action.type) {
    case Actions.FETCH_CART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.ADD_CART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    case Actions.DELETE_CART:
      return {
        list: action.list,
        subtotal: action.subtotal,
      };
    default:
      return state;
  }
};
