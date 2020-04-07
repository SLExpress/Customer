import React from "react";

const cartColumns = () => {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row ">
        <div className="col-10 mx-auto col-lg-2 card-header">
          <p className="text-uppercase">site</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 card-header">
          <p className="text-uppercase">url</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 card-header">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 card-header">
          <p className="text-uppercase">date</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 card-header">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 card-header">
          <p className="text-uppercase">pay now</p>
        </div>
      </div>
    </div>
  );
};

export default cartColumns;
