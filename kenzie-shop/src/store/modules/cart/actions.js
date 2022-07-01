import { ADD_CART, REMOVE_CART } from "./actionsType";

export const addCart = (product) => ({ type: ADD_CART, product });

export const removeCart = (list) => ({ type: REMOVE_CART, list });

