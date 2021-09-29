import API from "../../API";
import {
  addCartAction,
  fetchCartItemsAction,
  increaseCartAction,
  decreaseCartAction,
} from "./actions";

const api = new API();
const CARTS_KEY = "CARTS_KEY";

export const fetchCarts = (token) => {
  return async (dispatch) => {
    return api
      .getCarts(token)
      .then((carts) => {
        console.log(carts);
        dispatch(fetchCartItemsAction(carts));
      })
      .catch((error) => {
        alert("Failed to connect API: /carts/");
      });
  };
};

export const addCart = (item_id) => {
  return async (dispatch, getState) => {
    return api.addCarts(item_id).then((item) => {
      let prevCarts = getState().carts.list;
      prevCarts[item.id] = { item: item, selected_count: 1 };
      const subtotal = calculateSubtotal(prevCarts);
      dispatch(addCartAction(prevCarts, subtotal));
    });
  };
};

export const increaseCart = (item) => {
  return async (dispatch, getState) => {
    let prevCarts = getState().carts.list;
    let nextSelectedCount = prevCarts[item.id].selected_count + 1;
    prevCarts[item.id] = { item: item, selected_count: nextSelectedCount };
    const subtotal = calculateSubtotal(prevCarts);
    setToLocalStorage(prevCarts);
    dispatch(increaseCartAction(prevCarts, subtotal));
  };
};

export const decreaseCart = (item) => {
  return async (dispatch, getState) => {
    let prevCarts = getState().carts.list;
    let nextSelectedCount = prevCarts[item.id].selected_count - 1;
    if (nextSelectedCount > 0) {
      prevCarts[item.id] = { item: item, selected_count: nextSelectedCount };
    } else {
      delete prevCarts[item.id];
    }
    const subtotal = calculateSubtotal(prevCarts);
    setToLocalStorage(prevCarts);
    dispatch(decreaseCartAction(prevCarts, subtotal));
  };
};

const setToLocalStorage = (carts) => {
  localStorage.setItem(CARTS_KEY, JSON.stringify(carts));
};

const calculateSubtotal = (carts) => {
  let subtotal = 0;
  for (let key in carts) {
    subtotal += Number(carts[key].item.price) * carts[key].selected_count;
  }
  return subtotal;
};
