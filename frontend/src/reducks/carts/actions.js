export const FETCH_CART = "FETCH_CART";
export const fetchCartItemsAction = (carts) => {
  return {
    type: "FETCH_CART",
    payload: carts,
  };
};
export const ADD_CART = "ADD_CART";
export const addCartAction = (carts) => {
  return {
    type: "ADD_CART",
    payload: carts,
  };
};
export const DELETE_CART = "DELETE_CART";
export const deleteCartsAction = (carts) => {
  return {
    type: "DELETE_CART",
    payload: carts,
  };
};
export const UPDATE_CART = "UPDATE_CART";
export const updateCartAction = (carts) => {
  return {
    type: "DELETE_POST",
    payload: carts,
  };
};
