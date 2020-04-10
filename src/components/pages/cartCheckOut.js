/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Cart from "../cart/cart";
import Loader from "./../common/loader";
import { ProductContext } from "../../context";

class cartCheckout extends Component {
  static contextType = ProductContext;

  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <div
          style={{
            marginLeft: "150px",
            marginRight: "150px",
          }}
        >
          <div className="card-body">
            <Cart />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default cartCheckout;
