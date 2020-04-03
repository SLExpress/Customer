import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Button from "../common/button";
import { Buttons } from "./../table/buttons";
import styled from "styled-components";
import { ProductContext } from "../../context";
// import { FaCartPlus } from "react-icons/fa";
import Loading from "../common/loading";
// import Title from "../common/title";
// import { MDBView } from "mdbreact";
import SearchBox from "../common/searchBox";
import { createWebsite } from "../../services/siteCategoryService";
import { apiUrl } from "./../../config/config.json";

class allSiteList extends Component {
  // Accessing context API
  static contextType = ProductContext;

  state = {
    loading: false,
    time: 90
  };

  fetchData = () => {
    this.setState({ loading: true });
  };

  async reduceTimer(id) {
    await setInterval(async () => {
      if (this.state.time !== 0) {
        this.setState(prevState => {
          return { time: prevState.time - 1 };
        });
      } else {
        // window.location = `/siteSettings/${id}`;
        window.location = `/siteCreateSettings/${id}`;
      }
    }, 1000);
  }

  handlecreateWebsite = async (domain, id) => {
    await createWebsite(domain, id);
  };
  render() {
    const url = apiUrl;
    const {
      // addToCart,
      setSingleSite,
      // setSingleSiteSettings,
      // setSingleSiteSettingsCreate,
      // filteredSites,
      // siteData,
      // handleCreateWebsite,
      handleSiteChange,
      search,
      sortedSites
    } = this.context;
    // const { path } = this.props;
    const { loading } = this.state;

    if (loading) {
      return <Loading time={this.state.time} />;
    }

    return (
      <div>
        {/* <Title title="Premium Themes" center="true" /> */}
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
                marginBottom: "500px"
              }}
            >
              sorry, no items matched your search
            </div>
          ) : (
            <div className="featured-sites-center">
              {sortedSites.map(item => {
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

// const ProductWrapper = styled.div`
//   .card {
//     transition: var(--mainTransition);
//     padding-top: 15px;
//     padding-left: 15px;
//     padding-right: 15px;
//     padding-bottom: 15px;
//   }

//   .cart-btn {
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     padding: 0.2rem 0.4rem;
//     background: var(--primaryColor);
//     border: none;
//     color: var(--mainWhite);
//     font-size: 1.4rem;
//     border-radius: 0.5rem 0 0 0;
//     transform: translate(100%, 100%);
//     transition: all 1s linear;
//   }

//   .cart-btn:hover {
//     color: var(--darkBlue);
//     cursor: pointer;
//   }
// `;
