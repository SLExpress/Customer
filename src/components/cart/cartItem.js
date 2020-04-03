import React from "react";
// import { FaTrash } from "react-icons/fa";
import { Buttons } from "./../table/buttons";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

const cartItem = ({ cartItem, removeItem }) => {
  // const { id, title, price, count, total, img } = cartItem;
  // const { _id, name, price, count, total, image } = cartItem;
  const { _id, price, createdDate, url } = cartItem;
  const { developer } = cartItem.script;
  // const { image, name } = cartItem.script;
  const { image } = cartItem.script;
  const date = new Date(createdDate);
  const orderId = _id;
  const developerId = developer;
  return (
    <div className="row mt-5 mt-lg-0 mb-5  text-center align-items-center">
      {/* image */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img
          src={`http://slexpress.tk:3000/images/sc/${image}`}
          width="60"
          className="img-fluid"
          alt=""
        />
      </div>
      {/* end of image */}
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
      {/* title */}
      {/* <div className="col-10 mx-auto col-lg-2 ">
        <span className="d-lg-none">product :</span> {name}
      </div> */}
      {/* end of title */}
      {/* price  */}
      <div className="col-10 mx-auto col-lg-2 ">
        <strong>
          <span className="d-lg-none">price :</span> ${price}
        </strong>
      </div>
      {/* end of price */}
      {/* count controls */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
        <div className="d-flex justify-content-center">
          <div>
            {/* <span className=" text-muted mx-3"></span> */}
            {date.toLocaleDateString()}
          </div>
        </div>
      </div>
      {/* end of count controls */}
      {/* item total */}
      <div className="col-10 mx-auto col-lg-2 ">
        {/* <strong className="text-muted"> */}

        <TiDeleteOutline
          style={{ cursor: "pointer", color: "#e60000" }}
          className="text-danger cart-icon"
          onClick={() => removeItem(_id)}
          size={20}
        />

        {/* </strong> */}
      </div>
      {/* end of item total */}
      {/* remove item */}
      <div className="col-10 mx-auto col-lg-2 ">
        <Link
          to={{ pathname: `/payment/${_id}`, query: { orderId, developerId } }}
        >
          <Buttons color="#40a3dc" name="pay" />
        </Link>
      </div>
      {/* end of remove item */}
    </div>
    // <div className="row mt-5 mt-lg-0 mb-5 text-capitalize text-center align-items-center">
    //   {/* image */}
    //   <div className="col-10 mx-auto col-lg-2 pb-2">
    //     <img src={image} width="60" className="img-fluid" alt="" />
    //   </div>
    //   {/* end of image */}
    //   {/* title */}
    //   <div className="col-10 mx-auto col-lg-2 ">
    //     <span className="d-lg-none">product :</span> {name}
    //   </div>
    //   {/* end of title */}
    //   {/* price  */}
    //   <div className="col-10 mx-auto col-lg-2 ">
    //     <strong>
    //       <span className="d-lg-none">price :</span> ${price}
    //     </strong>
    //   </div>
    //   {/* end of price */}
    //   {/* count controls */}
    //   <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
    //     <div className="d-flex justify-content-center">
    //       <div>
    //         <span className=" text-muted mx-3">{count}</span>
    //       </div>
    //     </div>
    //   </div>
    //   {/* end of count controls */}
    //    {/* item total */}
    //    <div className="col-10 mx-auto col-lg-2 ">
    //     <strong className="text-muted">item total : ${total} </strong>
    //   </div>
    //   {/* end of item total */}
    //   {/* remove item */}
    //   <div className="col-10 mx-auto col-lg-2 ">
    //     <FaTrash
    //       style={{ cursor: "pointer" }}
    //       className="text-danger cart-icon"
    //       onClick={() => removeItem(_id)}
    //     />
    //   </div>
    //   {/* end of remove item */}

    // </div>
  );
};

export default cartItem;
