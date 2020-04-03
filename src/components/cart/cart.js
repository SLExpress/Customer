import React from "react";
// import Title from "../common/title";
import CartColumns from "../cart/cartColumns";
import CartList from "../cart/cartList";
import CartTotals from "../cart/cartTotals";

const cart = () => {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        {/* <Title title="your cart items" center="true" /> */}
      </div>
      {/* cart columns */}
      <CartColumns />

      {/* cart list */}
      <CartList />
      {/* cart totals */}
      <CartTotals />
    </section>
  );
};

export default cart;
