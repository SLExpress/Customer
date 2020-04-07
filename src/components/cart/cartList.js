import React from "react";
import CartItem from "./cartItem";
import { ProductConsumer } from "../../context";

const cartList = () => {
  return (
    <div className="container-fluid">
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
