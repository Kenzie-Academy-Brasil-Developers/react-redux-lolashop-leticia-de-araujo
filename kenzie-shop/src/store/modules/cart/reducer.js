import { ADD_CART, REMOVE_CART } from "./actionsType";

const cartReducer = (
  state = JSON.parse(localStorage.getItem("cartProducts")) || [],
  action
) => {
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

export default cartReducer;
