import React from "react";
import CartTable from "./carttable";

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="border-0 bg-light">
              <div className="p-2 px-3 text-uppercase">Produk</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Harga</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Jumlah</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Tambah</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Kurang</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Hapus</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <React.Fragment>
                <CartTable key={item.id} item={item} value={value} />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
