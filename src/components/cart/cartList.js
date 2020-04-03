import React from "react";
import { ProductConsumer } from "../../context";
import CartItem from "./cartItem";

const cartList = () => {
  return (
    <div className="container-fluid">
      {/* row */}
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { cart, removeItem } = value;

              if (cart.length === 0) {
                return (
                  <h1 className="text-center text-muted my-4">
                    your cart is currently empty
                  </h1>
                );
              }
              return (
                <>
                  {cart.map(item => (
                    <div>
                      <CartItem
                        key={item.id}
                        cartItem={item}
                        removeItem={removeItem}
                      />
                      <hr />
                    </div>
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
};

export default cartList;
