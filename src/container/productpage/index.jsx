import React from "react";
import Product from "../../components/detailproduct";
import Helmet from "../../components/helmet";

const ProductPage = () => {
  return (
    <React.Fragment>
      <Helmet title="Product | RaksyeShop" />
      <Product />
    </React.Fragment>
  );
};

export default ProductPage;
