import React, { Component } from "react";
import styled from "styled-components";
import { Buttons } from "./../table/buttons";
import { Link } from "react-router-dom";
import { siteData } from "./../../context/siteData";

class testing extends Component {
  render() {
    return (
      <section className="featured-sites">
        <div className="featured-sites-center">
          {siteData.map(item => {
            return (
              <ProductWrapper key={item._id}>
                <div className="card">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div class="flip-card-front">
                        <article className="site">
                          <div className="img-container">
                            <img src={item.image} alt="pic" />
                          </div>
                          <p className="site-info">{item.name}</p>
                        </article>
                      </div>
                      <div className="flip-card-back ">
                        <Link
                          to="/"
                          style={{ textDecoration: "none" }}
                          className="site-link1"
                        >
                          <Buttons name="Create" color="#40a3dc" />
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          className="site-link2"
                        >
                          <Buttons name="Create" color="#40a3dc" />
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          className="site-link3"
                        >
                          <Buttons name="Create" color="#40a3dc" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ProductWrapper>
            );
          })}
        </div>
      </section>
    );
  }
}
export default testing;

const ProductWrapper = styled.div`
  .card {
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    height: 250px;
    width: 330px;
  }
`;
