import { createSelector } from "reselect";
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCart], (cartItems) =>
  cartItems.reduce(
    (accumaletedQuantity, cartItem) => accumaletedQuantity + cartItem.quantity,
    0
  )
);
