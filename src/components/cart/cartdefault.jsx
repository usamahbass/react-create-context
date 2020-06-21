import React, { Component } from "react";
import Empty from "../../assets/svg/empty.svg";

export default class CartDefault extends Component {
  render() {
    return (
      <div>
        <div className="py-5 container">
          <figure className="figure">
            <img
              src={Empty}
              alt="kosong"
              className="figure-img img-fluid img-lg-default"
            />
          </figure>
        </div>
      </div>
    );
  }
}
