import React, { Component } from "react";
import { Buttons } from "./../table/buttons";
import { ProductContext } from "../../context";
import { Link } from "react-router-dom";
import { apiUrl } from "./../../config/config.json";
import styled from "styled-components";

class siteList extends Component {
  // Accessing context API
  static contextType = ProductContext;

  render() {
    const url = apiUrl;
    const {
      setSingleSite,

      filteredSites,
    } = this.context;

    return (
      <section className="featured-sites">
        {filteredSites.length === 0 ? (
          <div
            className="col  text-color-ash text-center "
            style={{
              fontSize: "20px",
              marginTop: "20px",
              marginBottom: "500px",
            }}
          >
            sorry, no items available at this moment
          </div>
        ) : (
          <div className="featured-sites-center">
            {filteredSites.map((item) => {
              return (
                <ProductWrapper key={item._id}>
                  <div className="card">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div class="flip-card-front">
                          <article className="site">
                            <div className="img-container">
                              <img src={`${url}${item.image}`} alt="site" />
                            </div>
                            <p className="site-info">{item.name} </p>
                          </article>
                        </div>
                        <div className="flip-card-back ">
                          <Link
                            to={`/addDomain/${item._id}`}
                            style={{ textDecoration: "none" }}
                            className="site-link1"
                          >
                            <Buttons name="Create" color="#40a3dc" />
                          </Link>
                          <a
                            style={{ textDecoration: "none" }}
                            href={`http://${item.demoUrl}/`}
                            className="site-link2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Buttons name="Demo" color="#40a3dc" />
                          </a>
                          <Link
                            style={{ textDecoration: "none" }}
                            className="site-link3"
                            to={`/siteInfo/${item._id}`}
                            onClick={() => setSingleSite(item._id)}
                          >
                            <Buttons name="Info" color="#40a3dc" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </ProductWrapper>
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default siteList;

const ProductWrapper = styled.div`
  .card {
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    height: 250px;
    width: 330px;
  }
`;
