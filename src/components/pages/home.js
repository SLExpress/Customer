import React from "react";
import ServicesBanner from "./../banner/servicesBanner";
import Banner from "../banner/banner";
import auth from "../../services/authService";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const home = () => {
  if (auth.getCurrentUser()) return <Redirect to="/landingPage" />;
  return (
    <HomePageWrapper>
      <div className="container-fluid">
        <div className="row">
          <Banner />
          <ServicesBanner />
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default home;

// Styled Components
const HomePageWrapper = styled.div`
  background-color: #ffffff;
  color: white;
`;
