/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import SearchBox from "../common/searchBox";
import { Buttons } from "./../table/buttons";
import { Link } from "react-router-dom";
import { apiUrl } from "./../../config/config.json";
import { ProductContext } from "../../context";
import styled from "styled-components";

class allSiteList extends Component {
  // Accessing context API
  static contextType = ProductContext;

  render() {
    const url = apiUrl;
    const {
      setSingleSite,
      handleSiteChange,
      search,
      sortedSites,
    } = this.context;

    return (
      <div>
        <section className="featured-sites">
          <center className="mb-5">
            <SearchBox
              handleChange={handleSiteChange}
              search={search}
              placeholder="Search"
            />
          </center>
          {sortedSites.length === 0 ? (
            <div
              className="col  text-color-ash text-center "
              style={{
                fontSize: "20px",
                marginTop: "20px",
                marginBottom: "500px",
              }}
            >
              sorry, no items matched your search
            </div>
          ) : (
            <div className="featured-sites-center">
              {sortedSites.map((item) => {
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
      </div>
    );
  }
}
export default allSiteList;

const ProductWrapper = styled.div`
  .card {
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    height: 250px;
    width: 330px;
  }
`;
