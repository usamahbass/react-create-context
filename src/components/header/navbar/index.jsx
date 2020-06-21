import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../utils/provider";

const Navbar = () => {
  return (
    <div className="fixed-top-lg bg-white">
      <nav className="container-fluid navbar navbar-expand-lg text-goldbtn-gold">
        <Link className="navbar-brand text-dark text-uppercase" to="/">
          RaksyeShop
        </Link>
        <button
          className="navbar-toggler btn-navbar text-white"
          type="button"
          data-toggle="collapse"
          data-target="#navbarOpen"
          aria-controls="navbarOpen"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarOpen">
          <div className="search-container mr-auto mt-2 mt-lg-0 mx-auto">
            <ProductConsumer>
              {(value) => (
                <form
                  className="search-form"
                  onSubmit={(e) => value.searchProduct(e)}
                >
                  <div className="search-box">
                    <div className="search-box-in">
                      <button className="search-btn">
                        <span>
                          <i className="fas fa-search"></i>
                        </span>
                      </button>

                      <input
                        type="text"
                        className="search-input"
                        placeholder="Mau cari apa ?"
                        onChange={(e) => value.searchProduct(e)}
                      />
                    </div>
                  </div>
                </form>
              )}
            </ProductConsumer>
          </div>
          <div className="my-2 my-lg-0 cart-font-lg mr-2 ml-sm-3">
            <Link className="text-dark text-decoration-none" to="/cart">
              <i
                className="fas fa-shopping-cart"
                style={{ width: 20, height: 20 }}
              >
                <ProductConsumer>
                  {(value) => {
                    const { cartCount } = value;
                    return (
                      <span className="badge badge-dark">{cartCount}</span>
                    );
                  }}
                </ProductConsumer>
              </i>
            </Link>
          </div>
          <div className="navbar-border-right"></div>
          <div className="d-flex">
            <Link
              to=""
              className="btn-custom btn-custom-sm btn-custom-transition text-decoration-none m-0 ml-3"
            >
              <span>Masuk</span>
            </Link>
            <Link
              to=""
              className="btn-custom btn-custom-sm btn-custom-boxshadow text-decoration-none m-0 text-white ml-3"
            >
              <span>Daftar</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
