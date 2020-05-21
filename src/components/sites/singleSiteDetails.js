/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Title from "../common/title";
import { Buttons } from "./../table/buttons";
import { ProductConsumer } from "../../context";
import { apiUrl } from "./../../config/config.json";

const singleSiteDetails = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { singleSite, singleSiteDeveloper, singleSiteCategories } = value;
        const { name, image, price, description, demoUrl } = singleSite;
        const { username, firstName, lastName } = singleSiteDeveloper;

        const url = apiUrl;
        return (
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                  <img
                    src={`${url}${image}`}
                    alt="single site"
                    className="img-fluid"
                  />
                </div>
                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                  <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto ">
                    <Title title={name} />
                  </div>
                  {singleSiteCategories.map((item) => {
                    return (
                      <p className="text-main text-capitalize  mb-4">
                        Category : {item.name}
                      </p>
                    );
                  })}

                  <p className=" text-muted mb-4">
                    Developer Username: {username}
                  </p>

                  <p className=" text-muted mb-4">
                    Developer Name: {firstName}
                    {lastName}
                  </p>
                  <p className="text-color-ash mb-4">Price : Rs{price}</p>
                  <p className="text-muted mt-3">Info:</p>
                  <p>{description}</p>
                  <div className="row">
                    <div className="col-4">
                      <a
                        style={{
                          textDecoration: "none",
                        }}
                        target="_blank"
                        href={`http://${demoUrl}/`}
                        rel="noopener noreferrer"
                      >
                        <Buttons name="Demo" color="#5f5e5e" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default singleSiteDetails;

// const { singleSite, singleSiteDeveloper } = value;
// const { username, firstName } = singleSiteDeveloper;
