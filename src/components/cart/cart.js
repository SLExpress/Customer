import React from "react";
import CartColumns from "../cart/cartColumns";
import CartList from "../cart/cartList";
import CartTotals from "../cart/cartTotals";

const cart = () => {
  return (
    <section className="py-5">
      <div className="container"></div>
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
};

export default cart;
