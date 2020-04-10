/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import ToggleDropDown from "./toggleDropDown";
import { ProductConsumer } from "../../context";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoDark from "../../images/LogoDark.png";
import styled from "styled-components";

const topHeader = ({ firstName, lastName }) => {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems } = value;
        return (
          <HeaderWrapper>
            <div className="jumbotron jumbotron-fluid topHeaderBackGround ">
              <div className="container">
                <nav className="nav">
                  <a className="nav-link active" href="/">
                    <img
                      src={LogoDark}
                      alt="logo"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </a>
                  <a className="nav-link" href="/myAccount">
                    <h4 className="topHeaderNavTitle">
                      {firstName} {lastName}
                    </h4>
                  </a>
                  <ToggleDropDown style={{ background: "var(--mainBlue)" }} />
                </nav>
                <Link
                  to="/cartCheckOut"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <div className="nav-cart">
                    <FaCartPlus className="nav-icon" />

                    <div className="cart-items">{cartItems}</div>
                  </div>
                </Link>

                <hr className="my-4"></hr>
                <nav className="nav topHeaderNav ">
                  <a
                    className="nav-link active topHeaderNavTitle"
                    href="/myAccount"
                  >
                    Profile
                  </a>
                  <a className="nav-link topHeaderNavTitle" href="/myPayments">
                    Payments & Billing
                  </a>
                  <a className="nav-link topHeaderNavTitle" href="/mySites">
                    My Sites
                  </a>
                  <a className="nav-link topHeaderNavTitle" href="/categories">
                    Categories
                  </a>
                </nav>
              </div>
            </div>
          </HeaderWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default topHeader;

const HeaderWrapper = styled.div`
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: absolute;
    top: 70px;
    right: 120px;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
