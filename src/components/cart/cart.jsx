import React, { Component } from "react";
import { ProductConsumer } from "../../utils/provider";
import CartDefault from "./cartdefault";
import CartList from "./cartlist";
import CartTotal from "./carttotal";

export default class Cart extends Component {
  componentWillMount() {
    document.title = "Keranjang | React App";
  }
  render() {
    return (
      <div className="py-5 container">
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="mt-5">
                    <CartList value={value} />
                    <CartTotal value={value} />
                  </div>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <CartDefault />
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
