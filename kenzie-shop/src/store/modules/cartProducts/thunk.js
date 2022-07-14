import { addCart, removeCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {

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


    dispatch(removeCart(list));
  } else {
    const list = cartProducts.filter((product) => product.id !== id);

    dispatch(removeCart(list));
  }
};
