/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const landingPageScreen = () => {
  return (
    <LandingPageWrapper>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <FaArrowAltCircleRight size={30} className="icon" />
        </div>
        <div className="col-md-auto">
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <button type="button"> Create Website </button>
          </Link>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <FaArrowAltCircleRight size={30} className="icon" />
        </div>
        <div className="col-md-auto">
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <button type="button"> Create Business Plan </button>
          </Link>
        </div>
      </div>
    </LandingPageWrapper>
  );
};

export default landingPageScreen;
const LandingPageWrapper = styled.div`
  button {
    margin-left: 0%;
    position: relative;
    z-index: 1;
    text-align: center;
    min-width: 205px;
    height: 50px;
    line-height: 50px;
    font-size: 21px;
    font-weight: 600;
    display: inline-block;
    padding: 0 40px;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    background-color: #2fa7d9;
    border: none;
    border-radius: 100px;
    -webkit-transition-duration: 500ms;
    -o-transition-duration: 500ms;
    transition-duration: 500ms;
    outline: none;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 414px) {
      margin-left: 52%;
    }

    @media (max-width: 375px) {
      margin-left: 41%;
    }

    @media (max-width: 320px) {
      margin-left: 28%;
    }

    &:hover {
      color: #fff;
      background-color: #1c66de;
    }
  }
`;
