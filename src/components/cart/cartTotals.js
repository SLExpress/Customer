/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { Buttons } from "../table/buttons";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

const cartTotals = () => {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTotal } = value;
            console.log(cartTotal);

            return (
              <div className="col my-4 ">
                <div className="float-right">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td className="textBold">subtotal : ${cartSubTotal}</td>
                      </tr>

                      <tr>
                        <td className="textBold">total : ${cartTotal}</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link style={{ textDecoration: "none" }} onClick={clearCart}>
                    <Buttons name="clear cart" color="#e60000" />
                  </Link>
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
