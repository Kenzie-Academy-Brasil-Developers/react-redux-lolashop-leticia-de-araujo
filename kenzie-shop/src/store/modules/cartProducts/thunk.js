import { addCart, removeCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {

  // const list = JSON.parse(localStorage.getItem("cartProducts")) || [];

  // list.push(product);

  // localStorage.setItem("cartProducts", JSON.stringify(list));

  dispatch(addCart(product));
};

export const removeCartThunk = (id) => (dispatch, getState) => {
  const { cartProducts } = getState();

  const productQuantity = cartProducts.filter(
    (product) => product.id === id
  ).length;

  if (productQuantity > 1) {
    const productToRemove = cartProducts.find((product) => product.id === id);

    const indexProductToRemove = cartProducts.indexOf(productToRemove);

    cartProducts.splice(indexProductToRemove, 1);

    const list = [...cartProducts];

    // localStorage.setItem("cartProducts", JSON.stringify(list));

    dispatch(removeCart(list));
  } else {
    const list = cartProducts.filter((product) => product.id !== id);

    // localStorage.setItem("cartProducts", JSON.stringify(list));

    dispatch(removeCart(list));
  }
};
