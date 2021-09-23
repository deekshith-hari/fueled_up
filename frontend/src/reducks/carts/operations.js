import API from "../../API";
import { fetchCartItemsAction } from "./actions";

const api = new API();

export const fetchCarts = () => {
  return async (dispatch) => {
    return api
      .getCarts()
      .then((carts) => {
        dispatch(fetchCartItemsAction(carts));
      })
      .catch((error) => {
        alert("Failed to connect API: /carts/");
      });
  };
};
