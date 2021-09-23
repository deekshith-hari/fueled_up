import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CartsReducer = (state = initialState.carts, action) => {
  switch (action.type) {
    case Actions.ADD_CART:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.FETCH_CART:
      return {
        ...state,
        list: action.payload,
      };
    case Actions.DELETE_CART:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
