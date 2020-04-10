/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">SLExpress</h5>
              <p>Build You Dream Website</p>
            </MDBCol>
            <MDBCol md="6">
              <ul>
                <h5 className="title">Company</h5>
                <li className="list-unstyled">
                  <Link
                    to="/pricing"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/aboutus"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    About Us
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/contactus"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/categories"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </React.Fragment>
  );
};

export default Footer;
