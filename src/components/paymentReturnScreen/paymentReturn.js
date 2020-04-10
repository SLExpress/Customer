/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { Buttons } from "./../table/buttons";
import Success from "../../images/success.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const paymentReturn = ({
  payment,
  scriptName,
  payherePaymentId,
  day,
  orderId,
  time,
  email,
  onDownload,
}) => {
  return (
    <ReturnWrapper>
      <div class="container">
        <div class="row justify-content-md-center ">
          <div className="card text-center payment-return w-50 mt-5 mb-5">
            <div style={{ backgroundColor: "var(--mainBlue)", height: "80px" }}>
              <SLexpresslk className="logo-and-nav">
                <h1
                  style={{
                    marginTop: "25px",
                    fontSize: "35px",
                    textAlign: "left",
                    marginLeft: "10px",
                    color: "white",
                  }}
                >
                  SLExpress
                </h1>
              </SLexpresslk>
            </div>
            <div className="card-body">
              <img src={Success} alt="success" style={{ height: "200px" }} />
              <h2 className="text-muted" style={{ fontWeight: "bold" }}>
                Payment Successful
              </h2>
              <hr />
              <p className="text-color-ash textBold">
                Your order number is
                <p className="text-color-black">{orderId}</p>
              </p>
              <hr />

              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col col-sm-4">
                    <p className="text-muted">Total</p>
                    <p className="text-muted">Payhere payment Id</p>
                  </div>
                  <div class="col col-sm-4">
                    <p className="text-muted">Rs {payment}</p>
                    <p className="text-muted">{payherePaymentId}</p>
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col col-sm-4">
                    <p className="text-muted">Website</p>
                  </div>
                  <div class="col col-sm-4">
                    <p className="text-muted">{scriptName}</p>
                  </div>
                </div>
              </div>
              <p className=" small-text">
                you'll recieve a detailed receipt on
                <p>{email}</p>
              </p>
              <p>{day}</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
        <center>
          <Link onClick={onDownload}>
            <div className="mt-5 mb-5">
              <Buttons color="#40a3dc" name="Download" className="center" />
            </div>
          </Link>
        </center>
      </div>
    </ReturnWrapper>
  );
};

export default paymentReturn;

const ReturnWrapper = styled.div`
  min-height: calc(100vh - 190px);
  width: 100%;

  @media (max-width: 414px) {
    margin-left: 52%;
  }

  @media (max-width: 375px) {
    margin-left: 41%;

  }

  @media (max-width: 320px) {
    margin-left: 28%;
  }

 
  }
`;

const SLexpresslk = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
  }
`;
