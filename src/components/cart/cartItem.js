/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { Buttons } from "./../table/buttons";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

const cartItem = ({ cartItem, removeItem }) => {
  const { _id, price, createdDate, url } = cartItem;
  const { developer } = cartItem.script;
  const { image } = cartItem.script;
  const date = new Date(createdDate);
  const orderId = _id;
  const developerId = developer;

  return (
    <div className="row mt-5 mt-lg-0 mb-5  text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img
          src={`http://slexpress.tk:3000/images/sc/${image}`}
          width="60"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 ">
        <a
          style={{ textDecoration: "none" }}
          href={`http://${url}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-color-ash">
            <span className="d-lg-none">url :</span> {url}
          </p>
        </a>
      </div>

      <div className="col-10 mx-auto col-lg-2 ">
        <strong>
          <span className="d-lg-none">price :</span> ${price}
        </strong>
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
        <div className="d-flex justify-content-center">
          <div>{date.toLocaleDateString()}</div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 ">
        <TiDeleteOutline
          style={{ cursor: "pointer", color: "#e60000" }}
          className="text-danger cart-icon"
          onClick={() => removeItem(_id)}
          size={20}
        />
      </div>

      <div className="col-10 mx-auto col-lg-2 ">
        <Link
          to={{ pathname: `/payment/${_id}`, query: { orderId, developerId } }}
        >
          <Buttons color="#40a3dc" name="pay" />
        </Link>
      </div>
    </div>
  );
};

export default cartItem;
