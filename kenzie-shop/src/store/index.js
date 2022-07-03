import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import cartProductsReducer from "./modules/cartProducts/reducer";
import productsReducer from "./modules/products/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cartProducts: cartProductsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
