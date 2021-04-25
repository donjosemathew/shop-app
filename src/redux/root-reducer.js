import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartreducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import ShopReducer from "./shop/shop.reducer";
export default combineReducers({
  user: userReducer,
  cart: cartreducer,
  directory: directoryReducer,
  shop: ShopReducer,
});
