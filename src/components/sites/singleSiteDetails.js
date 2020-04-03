import React from "react";
import { ProductConsumer } from "../../context";
// import { Link } from "react-router-dom";
import Title from "../common/title";
import { Buttons } from "./../table/buttons";
import { apiUrl } from "./../../config/config.json";

const singleSiteDetails = () => {
  return (
    <ProductConsumer>
      {value => {
        const { singleSite, singleSiteDeveloper } = value;
        const {
          name,
          image,
          price,
          // category,
          description,
          demoUrl
        } = singleSite;
        const { username, firstName } = singleSiteDeveloper;
        const url = apiUrl;
        return (
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                  {/* <div className="card">
                    <div className="card-body"> */}
                  <img
                    src={`${url}${image}`}
                    alt="single site"
                    className="img-fluid"
                  />
                  {/* </div>
                  </div> */}
                </div>
                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                  {/* <h5 className="text-title mb-4">{title}</h5> */}
                  {/* <div className="card">
                    <div className="card-body"> */}
                  <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto ">
                    <Title title={name} />
                  </div>

                  <p className="text-main text-capitalize  mb-4">
                    Category : Online Store
                  </p>
                  <p className=" text-muted mb-4">
                    Developer Username: {username}
                  </p>
                  <p className=" text-muted mb-4">
                    Developer Name: {firstName}
                  </p>
                  <p className="text-color-ash mb-4">Price : Rs{price}</p>
                  <p className="text-muted mt-3">Info:</p>
                  <p>{description}</p>
                  {/* <div className="row justify-content-center"> */}
                  <div className="row">
                    {/* style={{ marginLeft: "-40px" }} */}
                    <div className="col-4">
                      <a
                        style={{
                          textDecoration: "none"
                        }}
                        target="_blank"
                        href={`http://${demoUrl}/`}
                        rel="noopener noreferrer"
                      >
                        <Buttons name="Demo" color="#5f5e5e" />
                      </a>
                    </div>
                    {/* <div className="col-4" style={{ marginLeft: "-80px" }}>
                      <Link
                        style={{
                          textDecoration: "none"
                        }}
                        to="http://5e7f1ec010c6e2173fc65446.slexpresslk.com/"
                      >
                        <Buttons name="Create" color="#40a3dc" />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* </div>
            </div> */}
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default singleSiteDetails;
