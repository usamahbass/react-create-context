import React from "react";
import { Link } from "react-router-dom";

export default function CartTable({ item, value }) {
  const { id, title, img, company, total, count } = item;
  const { plusProduct, minusProduct, removeProduct } = value;

  return (
    <tr>
      <th scope="row" className="border-0">
        <div className="p-2">
          <img
            src={img}
            alt="img"
            width="70"
            className="img-fluid rounded shadow-sm"
          />
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0">
              {" "}
              <Link
                to="#"
                className="text-dark text-decoration-none d-inline-block align-middle"
              >
                {title}
              </Link>
            </h5>
            <span className="text-muted font-weight-normal font-italic d-block">
              {company}
            </span>
          </div>
        </div>
      </th>
      <td className="border-0 align-middle">
        <strong>{total}</strong>
      </td>
      <td className="border-0 align-middle">
        <strong className="ml-4">{count}</strong>
      </td>
      <td className="border-0 align-middle">
        <Link to="#" className="text-dark ml-4" onClick={() => plusProduct(id)}>
          <i className="fas fa-plus"></i>
        </Link>
      </td>
      <td className="border-0 align-middle">
        <Link
          to="#"
          className="text-dark ml-4"
          onClick={() => minusProduct(id)}
        >
          <i className="fas fa-minus"></i>
        </Link>
      </td>
      <td className="border-0 align-middle">
        <Link
          to="#"
          className="text-dark ml-4"
          onClick={() => removeProduct(id)}
        >
          <i className="fas fa-trash"></i>
        </Link>
      </td>
    </tr>
  );
}
