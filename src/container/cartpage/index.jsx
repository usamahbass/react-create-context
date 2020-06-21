import React from "react";
import Cart from "../../components/cart/cart";
import Helmet from "../../components/helmet";

const CartPage = () => {
  return (
    <React.Fragment>
      <Helmet title="Keranjang | RaksyeShop" />
      <Cart />
    </React.Fragment>
  );
};

export default CartPage;
