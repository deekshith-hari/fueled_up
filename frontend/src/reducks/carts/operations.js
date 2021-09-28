import API from "../../API";
import { fetchCartItemsAction } from "./actions";

const api = new API();

export const fetchCarts = (token) => {
  return async (dispatch) => {
    return api
      .getCarts(token)
      .then((carts) => {
        console.log(carts);
        dispatch(fetchCartItemsAction(carts, 100));
      })
      .catch((error) => {
        alert("Failed to connect API: /carts/");
      });
  };
};
