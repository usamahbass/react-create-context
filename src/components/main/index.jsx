import React, { useState } from "react";
import { storeProducts } from "../../data";
import { ProductConsumer } from "../../utils/provider";
import Card from "./card";

const Main = () => {
  const [product] = useState(storeProducts);

  return (
    <main className="container mt-5" id="produk">
      <div className="d-flex justify-content-between">
        <div className="mb-3">
          <h5 className="font-weight-medium">Produk Terbaru</h5>
        </div>
        <div className="float-right">
          <div className="d-flex justify-content-lg-end">
            <h6 className="mr-3">Semua</h6>
            <h6 className="mr-3">|</h6>
            <i className="fas fa-arrow-left text-muted mr-3"></i>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>

      {/* Product */}

      <div className="container">
        <div className="row mb-5">
          <ProductConsumer>
            {() =>
              product.map((products, i) => <Card key={i} products={products} />)
            }
          </ProductConsumer>
        </div>
      </div>
    </main>
  );
};

export default Main;
