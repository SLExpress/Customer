import React from "react";
import { ProductConsumer } from "../../context";
import SinglePricingCard from "./../pricing/singlePricingCard";

const pricingScreen = () => {
  return (
    <ProductConsumer>
      {value => {
        return (
          <div className="card-deck mb-3 text-center">
            {value.pricingData.map(item => {
              return <SinglePricingCard key={item.id} cardInfo={item} />;
            })}
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default pricingScreen;
