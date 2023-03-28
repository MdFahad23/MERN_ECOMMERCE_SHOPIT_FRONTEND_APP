import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productsReducer,
  CategoryReducer,
} from "./redux/reducer/productReducer";
import {
  ForgotPasswordReducer,
  profileReducer,
  UserReducer,
} from "./redux/reducer/userReducer";
import { CartItemReducer } from "./redux/reducer/CartReducer";

const reducer = combineReducers({
  products: productsReducer,
  Category: CategoryReducer,
  User: UserReducer,
  Profile: profileReducer,
  ForgotPassword: ForgotPasswordReducer,
  AddCartItem: CartItemReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
