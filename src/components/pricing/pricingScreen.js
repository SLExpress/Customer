/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import SinglePricingCard from "./../pricing/singlePricingCard";
import { ProductConsumer } from "../../context";

const pricingScreen = () => {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <div className="card-deck mb-3 text-center">
            {value.pricingData.map((item) => {
              return <SinglePricingCard key={item.id} cardInfo={item} />;
            })}
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default pricingScreen;
