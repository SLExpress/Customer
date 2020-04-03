import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../common/button";
import styled from "styled-components";
import { ProductContext } from "../../context";
import { FaCartPlus } from "react-icons/fa";
import Loading from "../common/loading";

class singleSite extends Component {
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
        window.location = `/siteSettings/${id}`;
      }
    }, 1000);
  }

  render() {
    const { addToCart, setSingleSite, setSingleSiteSettings } = this.context;
    const { site } = this.props;
    const { loading } = this.state;

    if (loading) {
      return <Loading time={this.state.time} />;
    }

    return (
      <ProductWrapper>
        <div className="card">
          <article className="site">
            {/* Image container */}
            <div className="img-container">
              {/* Setting up a default image */}
              <img src={site.img} alt="site" />
              <button className="cart-btn">
                <FaCartPlus onClick={() => addToCart(site.id)} />
              </button>
              {/* Link to the page */}
              <Link
                style={{ textDecoration: "none" }}
                className="site-link1"
                onClick={() => {
                  this.fetchData();
                  this.reduceTimer(site.id);
                  setSingleSiteSettings(site.id);
                  addToCart(site.id);
                }}
              >
                <Button buttonName="Create" buttonType="blue" />
              </Link>

              <a
                style={{ textDecoration: "none" }}
                href={site.url}
                className="site-link2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button buttonName="Demo" buttonType="blue" />
              </a>

              <Link
                style={{ textDecoration: "none" }}
                to={`/siteInfo/${site.id}`}
                onClick={() => setSingleSite(site.id)}
                className="site-link3"
              >
                <Button buttonName="Info" buttonType="blue" />
              </Link>
            </div>

            {/* name of the site*/}

            <p className="site-info">{site.title} </p>
          </article>
        </div>
      </ProductWrapper>
    );
  }
}

export default singleSite;

const ProductWrapper = styled.div`
  .card {
    transition: var(--mainTransition);
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--primaryColor);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }

  .cart-btn:hover {
    color: var(--darkBlue);
    cursor: pointer;
  }
`;
