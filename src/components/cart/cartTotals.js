import React from "react";
import { ProductConsumer } from "../../context";
// import PayPalButton from "./payPalButton";
// import Button from "../common/button";
import { Link } from "react-router-dom";
import { Buttons } from "../table/buttons";

const cartTotals = () => {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubTotal, cartTotal } = value;
            console.log(cartTotal);

            return (
              <div className="col my-4 ">
                {/* <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clear cart
                </button> */}

                <div className="float-right">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td className="textBold">
                          subtotal : ${cartSubTotal}
                          {/* <p className="textBold">subtotal : ${cartSubTotal}</p> */}
                        </td>
                      </tr>
                      {/* <tr>
                        <td className="textBold">tax : ${cartTax}</td>
                      </tr> */}
                      <tr>
                        <td className="textBold">total : ${cartTotal}</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link style={{ textDecoration: "none" }} onClick={clearCart}>
                    {/* <Button buttonName="clear cart" /> */}
                    <Buttons name="clear cart" color="#e60000" />
                  </Link>
                  {/* <PayPalButton clearCart={clearCart} cartTotal={cartTotal} /> */}
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default cartTotals;
