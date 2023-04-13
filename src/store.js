import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productsReducer,
  CategoryReducer,
  ReviewsReducer,
} from "./redux/reducer/productReducer";
import {
  ForgotPasswordReducer,
  profileReducer,
  UserReducer,
} from "./redux/reducer/userReducer";
import {
  CartItemReducer,
  ShippingAddressReducer,
} from "./redux/reducer/CartReducer";
import { OrderReducer, PaymentReducer } from "./redux/reducer/PaymentReducer";

const reducer = combineReducers({
  products: productsReducer,
  Category: CategoryReducer,
  User: UserReducer,
  Profile: profileReducer,
  ForgotPassword: ForgotPasswordReducer,
  AddCartItem: CartItemReducer,
  ShippingAddress: ShippingAddressReducer,
  Payment: PaymentReducer,
  Order: OrderReducer,
  Reviews: ReviewsReducer,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
