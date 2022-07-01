import { addCart, removeCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cartProducts")) || [];

  list.push(product);

  localStorage.setItem("cartProducts", JSON.stringify(list));

  dispatch(addCart(product));
};

export const removeCartThunk = (id) => (dispatch, getState) => {
  const { cart } = getState();

  const list = cart.filter((product) => product.id !== id);

  localStorage.setItem("cartProducts", JSON.stringify(list));

  dispatch(removeCart(list));
};
