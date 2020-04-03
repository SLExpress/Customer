// import React from "react";
// import { ProductConsumer } from "../../context";
// import SingleSite from "./singleSite";
// import Loading from "../common/loading";

// const siteList = () => {
//   return (
//     <ProductConsumer>
//       {value => {
//         const { loading, filteredSites } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <section className="featured-sites">
//             <div className="featured-sites-center">
//               {filteredSites.map(item => {
//                 return <SingleSite key={item.id} site={item} />;
//               })}
//             </div>
//           </section>
//         );
//       }}
//     </ProductConsumer>
//   );
// };
// export default siteList;

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
// import SearchBox from "../common/searchBox";
// import { createWebsite } from "../../services/siteCategoryService";
import { apiUrl } from "./../../config/config.json";
// import auth from "./../../services/authService";
// import uuid from "uuid";
// import { Redirect } from "react-router-dom";
class siteList extends Component {
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
        window.location = `/siteCreateSettings/${id}`;
      }
    }, 1000);
  }

  // handleCreateWebsite = async (id, domain) => {
  //   await createWebsite(domain, id);
  // };

  render() {
    const url = apiUrl;
    const {
      // addToCart,
      setSingleSite,
      // setSingleSiteSettingsCreate,
      filteredSites
      // handleCreateWebsite
      // handleSiteChange,
      // search,
      // sortedSites
    } = this.context;
    // const { path } = this.props;
    const { loading } = this.state;
    // const username = auth.getCurrentUser();
    // const uuid = require("uuid");
    // const unique = uuid.v4();

    if (loading) {
      return <Loading time={this.state.time} />;
    }

    return (
      <section className="featured-sites">
        <div className="featured-sites-center">
          {filteredSites.map(item => {
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
