import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal({ value }) {
  const {
    cartTotal,
    codevalue,
    discount,
    removeCart,
    handlePromo,
    checkCoupon,
    checkCouponPaste,
  } = value;

  return (
    <React.Fragment>
      <div className="row py-5 p-4 bg-white rounded shadow-sm">
        <div className="col-lg-6">
          <div className="bg-light px-4 py-3 text-uppercase font-weight-bold">
            Kode Promo
          </div>
          <div className="p-4">
            <p className="font-italic mb-4">
              Jika Anda memiliki kode promo, silakan masukkan dalam kotak di
              bawah ini
            </p>
            <div className="input-group mb-4 border p-2">
              <input
                type="text"
                placeholder="Masukkan kode promo"
                aria-describedby="button-addon3"
                className="form-control border-0"
                value={codevalue}
                onPaste={() => checkCouponPaste()}
                onChange={(e) => handlePromo(e)}
              />
              <div className="input-group-append ml-2 border-0">
                <button
                  id="button-addon3"
                  type="button"
                  className="btn-custom btn-custom-md btn-custom-transition px-4"
                  onClick={() => checkCoupon()}
                >
                  <span>
                    <i className="fas fa-gift mr-2"></i>
                    <span>Periksa Kode</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bg-light px-4 py-3 text-uppercase font-weight-bold">
            Ringkasan pesanan
          </div>
          <div className="p-4">
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Diskon</strong>
                <h5 className="font-weight-bold">{discount}</h5>
              </li>

              <li className="d-flex justify-content-between py-3 border-bottom">
                <strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold">Rp.{cartTotal}</h5>
              </li>
            </ul>
            <Link
              to="#"
              className="btn-custom btn-custom-md btn-custom-transition py-2 text-decoration-none text-center btn-block"
            >
              <span>Beli</span>
            </Link>
            <Link
              to="#"
              className="btn-custom btn-custom-md btn-custom-boxshadow py-2 text-decoration-none text-center text-white btn-block"
              onClick={() => removeCart()}
            >
              <span>Hapus Keranjang</span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
