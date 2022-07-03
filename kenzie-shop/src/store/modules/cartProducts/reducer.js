import { ADD_CART, REMOVE_CART } from "./actionsType";

const cartProductsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;

      return [...state, product];

    case REMOVE_CART:
      const { list } = action;

      return list;

    default:
      return state;
  }
};

// state = JSON.parse(localStorage.getItem("cartProducts")) || []

export default cartProductsReducer;
