import React from "react";
import expiredImage from "../../images/expired.jpg";
import { Buttons } from "./../table/buttons";
import { Link } from "react-router-dom";

const expired = () => {
  return (
    <React.Fragment>
      <section className=" text-center section-padding-100-0 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                style={{ paddingTop: "3rem" }}
                src={expiredImage}
                alt="expired"
              />
              <h2>Opps! This page Could Not Be Found!</h2>
              <p style={{ fontWeight: "bold", color: "#b2bec3" }}>
                Sorry bit the page you are looking for does not exist, have been
                removed or name changed
              </p>
              <div style={{ paddingBottom: "5rem" }}>
                <center>
                  <Link
                    to="/"
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    <Buttons color="#40a3dc" name="Home" className="center" />
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default expired;
