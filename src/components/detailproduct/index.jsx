import React from "react";
import { ProductConsumer } from "../../utils/provider";

const Product = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          title,
          img,
          price,
          company,
          info,
          inCart,
        } = value.detailProduct;

        return (
          <main className="container mt-5">
            <div className="row">
              <div className="col-lg-4">
                <figure className="figure">
                  <img src={img} alt="shopping" className="img-fluid" />
                </figure>
              </div>

              <div className="col-lg-8 ml-lg-auto">
                <div className="d-flex flex-column">
                  <div className="cart-one">
                    <h6 className="text-dark font-weight-bold cart-font mb-3">
                      <i className="fas fa-check text-dark"></i> {company}
                    </h6>
                    <h4 className="text-dark text-uppercase lead">{title}</h4>
                  </div>

                  <div className="d-flex flex-lg-row">
                    <h6 className="text-muted small-font mr-3">
                      <i className="fas fa-truck text-dark"></i> Pasti Ready
                    </h6>
                    <h6 className="text-muted small-font mr-3">
                      <i className="fas fa-tag text-dark"></i> Pasti Ori
                    </h6>
                    <h6 className="text-muted small-font mr-3">
                      <i className="fas fa-check-circle text-dark"></i> Garansi
                      7 hari
                    </h6>
                  </div>
                </div>

                <div className="cart-two border-top-gray mt-3">
                  <div className="row">
                    <div className="col-lg-4 m-auto mt-4">
                      <h6 className="text-gray-200 text-uppercase font-weight-bold cart-font mt-4">
                        Harga
                      </h6>
                    </div>
                    <div className="col-lg-8 mt-4">
                      <div className="d-flex flex-lg-column ml-lg-5">
                        <h3 className="text-gold medium-font font-weight-bold">
                          Rp.{price}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-three border-top-gray mt-3">
                  <div className="row">
                    <div className="col-lg-4 m-auto mt-4">
                      <h6 className="text-gray-200 text-uppercase font-weight-bold cart-font mt-4">
                        Ukuran
                      </h6>
                    </div>
                    <div className="col-lg-8 mt-4">
                      <div className="d-flex flex-column ml-lg-5">
                        <h6 className="text-gray-500 small-font font-weight-bold mb-3">
                          Pilih Variant
                        </h6>
                        <div className="d-flex flex-row">
                          <button className="btn-custom btn-custom-sm btn-custom-boxshadow">
                            <span>M</span>
                          </button>
                          <button className="btn-custom btn-custom-sm btn-custom-boxshadow ml-3">
                            <span>L</span>
                          </button>
                          <button className="btn-custom btn-custom-sm btn-custom-boxshadow ml-3">
                            <span>XL</span>
                          </button>
                          <button className="btn-custom btn-custom-sm btn-custom-boxshadow ml-3">
                            <span>XXL </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-four border-top-gray mt-3">
                  <div className="row">
                    <div className="col-lg-4 m-auto mt-4">
                      <h6 className="text-gray-200 text-uppercase font-weight-bold cart-font mt-4">
                        Info Produk
                      </h6>
                    </div>
                    <div className="col-lg-8 mt-4">
                      <p className="lead normal-font ml-lg-5 text-muted">
                        {info}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cart-four border-top-gray mt-3">
                  <div className="row">
                    <div className="col-lg-4 m-auto mt-4">
                      <h6 className="text-gray-200 text-uppercase font-weight-bold cart-font mt-4">
                        Kode Promo
                      </h6>
                    </div>
                    <div className="col-lg-8 mt-4">
                      <p className="lead medium-font ml-lg-5 text-muted">
                        RaksyeShop
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cart-five border-top-gray mt-3">
                  <div className="row">
                    <div className="col-lg-4 m-auto mt-4">
                      <h6 className="text-gray-200 text-uppercase font-weight-bold cart-font mt-4">
                        Total
                      </h6>
                    </div>
                    <div className="col-lg-8  mt-4">
                      <h6 className="text-gold font-weight-bold medium-font mb-lg-0 ml-lg-5">
                        {price}
                      </h6>
                      <div className="d-flex justify-content-between flex-lg-row flex-column mt-5">
                        <button className="btn-custom btn-custom-md btn-custom-transition normal-font mb-lg-0 ml-lg-5 mb-3">
                          <span>Beli</span>
                        </button>

                        {inCart ? (
                          <button
                            style={{ cursor: "not-allowed" }}
                            className="btn-custom btn-custom-md btn-custom-disabled"
                          >
                            <span>Dalam Keranjang</span>
                          </button>
                        ) : (
                          <button
                            className="btn-custom btn-custom-md btn-custom-boxshadow text-white normal-font"
                            disabled={inCart ? true : false}
                            onClick={() => value.addtoCart(id)}
                          >
                            <span>Tambah Keranjang</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
      }}
    </ProductConsumer>
  );
};

export default Product;
