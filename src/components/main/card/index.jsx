import React from "react";
import { ProductConsumer } from "../../../utils/provider";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = (props) => {
  const { id, img, title, price } = props.products;
  return (
    <div className="col-sm-4">
      <div className="card">
        <ProductConsumer>
          {(value) => (
            <React.Fragment>
              <div className="card-header bg-white">
                <div className="d-flex justify-content-between text-danger">
                  <Link to="#">
                    <i className="fas fa-heart text-gray"></i>
                  </Link>
                  <Link to="#" onClick={() => value.addtoCart(id)}>
                    <i className="fas fa-shopping-cart text-gray"></i>
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className="img-container">
                  <img className="card-img-top mb-3" alt="shopping" src={img} />
                </div>
                <div className="text-center">
                  <h3 className="mb-3" style={{ fontSize: "1.2rem" }}>
                    {title}
                  </h3>
                  <h3 className="text-gold" style={{ fontSize: "1.2rem" }}>
                    Rp.{price}
                  </h3>
                </div>
              </div>
              {/* <div className="overlay"></div> */}
              <div className="card-footer bg-white">
                <Link
                  className="btn-custom btn-custom-center btn-custom-md btn-custom-boxshadow text-white text-decoration-none m-0"
                  to="/product"
                  onClick={() => value.handleProduct(id)}
                >
                  Lihat
                </Link>
              </div>
            </React.Fragment>
          )}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
  }),
};
