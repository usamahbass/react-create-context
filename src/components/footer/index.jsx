import React from "react";
import Shopping from "../../assets/svg/shopping.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto mt-5 py-3 text-dark bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5">
            <div className="d-flex justify-content-around">
              <ul className="list-group">
                <li className="list-group-item">
                  <h6>Raksye</h6>
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Tentang Raksye
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Karir
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Blog
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Hotel
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Bridestory
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Parentstory
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Official Store
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Aplikasi Raksye
                  </Link>
                </li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item">
                  <h6>Raksye</h6>
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Tentang Raksye
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Karir
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Blog
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Hotel
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Bridestory
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Parentstory
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Official Store
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Aplikasi Raksye
                  </Link>
                </li>
              </ul>

              <ul className="list-group">
                <li className="list-group-item">
                  <h6>Raksye</h6>
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Tentang Raksye
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Karir
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Blog
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Hotel
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Bridestory
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Parentstory
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Official Store
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="#"
                    className="text-muted text-decoration-none footer-font"
                  >
                    Aplikasi Raksye
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <figure className="figure">
              <img
                src={Shopping}
                alt="footer"
                className="figure img img-fluid rounded"
              />
            </figure>

            <p className="text-muted text-center footer-font">
              &copy; {new Date().getFullYear()} developed by{" "}
              <a
                href="https://github.com/usamahbass"
                className="text-muted text-decoration-none"
              >
                Bass
              </a>
            </p>

            <div className="d-flex justify-content-around mb-3">
              <button className="btn-custom btn-custom-md btn-custom-boxshadow-dark">
                Indonesia
              </button>
              <button className="btn-custom btn-custom-md btn-custom-boxshadow">
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
