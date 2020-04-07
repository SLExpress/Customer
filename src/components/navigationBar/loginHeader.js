import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../../context";

export default function Header({ currentUser }) {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems } = value;
        return (
          <div>
            <HeaderWrapper>
              <div className="loginHeader">
                <div className="container-fluid">
                  <div className="row">
                    <div className="line">
                      <div className="container">
                        <div className="row ">
                          <div className="col-md-6 col-sm-6 col-xs-6">
                            <Phone id="phone-number">
                              <a
                                href="tel:077 714 5020"
                                style={{
                                  color: "#fff",
                                  textDecoration: "none"
                                }}
                              >
                                <i className="fa fa-phone" />
                                <span className="text-to-hidden no-wrap">
                                  Call Us: 077 714 5020
                                </span>
                              </a>
                              <span id="middle-border">&nbsp;</span>
                              <a
                                href="mailto:admin@slexpress.lk"
                                style={{
                                  color: "#fff",
                                  textDecoration: "none"
                                }}
                              >
                                <i className="fa fa-envelope" />
                                <span className="text-to-hidden">
                                  Email: admin@slexpress.lk
                                </span>
                              </a>
                            </Phone>
                          </div>
                          <div className="col-md-3 offset-md-3  col-sm-6 col-xs-6">
                            <div id="phone-number">
                              <i className="fa fa-lock" />
                              <Link
                                style={{
                                  color: "#fff",
                                  textDecoration: "none"
                                }}
                                to="/logout"
                              >
                                <span className="login-register">
                                  {currentUser} / Logout
                                </span>
                              </Link>
                              <span id="middle-border">&nbsp;</span>
                              <Link
                                to="/cartCheckOut"
                                style={{
                                  color: "#fff",
                                  textDecoration: "none"
                                }}
                              >
                                <div className="nav-cart">
                                  <FaCartPlus className="nav-icon" />

                                  <div className="cart-items">{cartItems}</div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4">
                          <div>
                            <SLexpresslk className="logo-and-nav">
                              <h1
                                style={{ marginTop: "25px", fontSize: "45px" }}
                              >
                                <center>
                                  <Link
                                    to="/"
                                    style={{
                                      color: "#fff",
                                      textDecoration: "none",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    SLExpress
                                  </Link>
                                </center>
                              </h1>
                            </SLexpresslk>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div id="nav-bar">
                            <ul>
                              <li>
                                <Link
                                  style={{
                                    color: "#fff",
                                    textDecoration: "none"
                                  }}
                                  to="/myAccount"
                                >
                                  PROFILE
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    color: "#fff",
                                    textDecoration: "none"
                                  }}
                                  to="/myPayments"
                                >
                                  PAYMENTS & BILLING
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    color: "#fff",
                                    textDecoration: "none"
                                  }}
                                  to="/mySites"
                                >
                                  MY SITES
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    color: "#fff",
                                    textDecoration: "none"
                                  }}
                                  to="/categories"
                                >
                                  CATEGORIES
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    color: "#fff",
                                    textDecoration: "none"
                                  }}
                                  to="/inquiries "
                                >
                                  INQUIRIES
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </HeaderWrapper>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

// Styled Components
const HeaderWrapper = styled.div`
  .loginHeader {
    margin-bottom: 50px !important;
  }import breadcrumbPage from './../common/breadcrumbPage';


  a {
    text-decoration: none;
  }

  color: white;
  .line {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    min-height: 45px;
    display: flex;
    align-items: center;
  }

  i {
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);

    margin-right: 10px;
  }
  .login-register {
    color: #fff;
    text-decoration: none;
  }
  .logo-and-nav {
    /* height: 100px; */
    display: flex;
    align-items: center;
    text-decoration:none h2 {
      color: white;

      @media (max-width: 575px) {
        margin-top: -70px;
      }

      @media (max-width: 320px) {
        font-size: 1.6rem;
      }
    }
  }

  background-color: #2fa7d9;

  .login-register {
    color: #fff;
  }

  #phone-number {
    display: flex;
    height: 100%;
    align-items: center;

    @media (max-width: 578px) {
      float: right;
    }

    #middle-border {
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      height: 45px;
      margin-left: 20px;
      margin-right: 15px;
    }

    .no-wrap {
      white-space: nowrap;
    }

    .text-to-hidden {
      @media (max-width: 1000px) {
        display: none;
      }
    }
  }

  #nav-bar {
    min-height: 30px;

    margin-top: 40px;
    ul {
      display: flex;
      padding-left: 0;

      @media (max-width: 413px) {
        display: none;
      }

      li {
        display: inline;
        margin: auto;
        border-bottom: 2px solid transparent;
        padding: 5px 5px;
        transition: all 0.2s;
      }
      li:hover {
        border-bottom: 2px solid #acacac;
        color: #acacac;
        cursor: pointer;
      }
    }
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
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

const Phone = styled.div`
  z-index: 10;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const SLexpresslk = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
  }
`;
