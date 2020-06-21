import React from "react";
import Shopping from "../../../assets/svg/shopping.svg";

const BotNavbar = () => {
  return (
    <div className="container py-lg-5 mb-5">
      <div className="row mt-5">
        <div className="col-lg order-lg-1 order-sm-2 order-xs-2">
          <div>
            <h1 className="font-weight-bold mb-5 text-dark">
              Beli Produk Terbaik Dari Seluruh Dunia
            </h1>
            <p className="lead mb-5 text-muted" style={{ fontSize: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              perferendis aspernatur incidunt vero similique provident obcaecati
              suscipit? Ipsam accusantium ipsa fuga officiis nesciunt
              perspiciatis, illum vero, alias deleniti, pariatur ex?
            </p>

            <div className="d-flex justify-content-around mb-5">
              <a
                href="#produk"
                className="btn-custom btn-custom-md btn-custom-transition text-decoration-none"
              >
                <span>Produk</span>
              </a>
              <button className="btn-custom btn-custom-md btn-custom-boxshadow">
                <span>Promo</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg order-lg-2 order-sm-1 order-xs-1">
          <figure className="figure">
            <img
              src={Shopping}
              alt="shopping"
              className="figure-img img-fluid rounded"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default BotNavbar;
