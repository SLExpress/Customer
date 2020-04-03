import React from "react";
import { ProductConsumer } from "../../context";
import CountDown from "../common/countDown";
import { apiUrl } from "./../../config/config.json";
// import auth from "./../../services/authService";
import moment from "moment";
import { Buttons } from "./../table/buttons";
import { Link } from "react-router-dom";

const siteSettingsCreateCard = ({ subdomain }) => {
  const domain = subdomain;
  return (
    <ProductConsumer>
      {value => {
        const { singleMySiteSettingsCreate } = value;
        const { name, image } = singleMySiteSettingsCreate;
        const url = apiUrl;

        const siteCreatedTime = localStorage.getItem("siteCreatedTime");
        const time = new Date(siteCreatedTime);
        const correctTime = moment(time)
          .add(7, "days")
          .toDate();
        const dateString = time.toDateString();
        const timeString = time.toLocaleTimeString();

        // const serverTime = localStorage.getItem("serverTime");
        // const serverCorrectTime = new Date(serverTime * 1000);
        // console.log(serverCorrectTime);

        // const unique = localStorage.getItem("unique");
        // const username = auth.getCurrentUser();
        // console.log(time);
        // console.log(correctTime);
        // console.log(serverTime);

        // Deadline Prop
        const deadline = new Date(correctTime).getTime();

        return (
          <div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-sm">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="textBold" style={{ fontWeight: "bold" }}>
                        Your website is successfully created!
                      </h5>
                      <h5 className="textBold" style={{ fontWeight: "bold" }}>
                        {name}
                      </h5>

                      <p className="text-color-ash">
                        <a
                          style={{ textDecoration: "none" }}
                          href={`http://${domain}.slexpresslk.com/`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="text-color-ash">
                            {`${domain}.slexpresslk.com`}
                          </p>
                        </a>
                      </p>

                      <p className="text-color-ash">
                        Created date: {dateString}
                      </p>
                      <p className="text-color-ash">
                        Created time: {timeString}
                      </p>
                      <Link to="cartCheckout">
                        {" "}
                        <Buttons color="#40a3dc" name="Pay Now" />
                      </Link>

                      {/* <p className="text-color-ash">Password Admin123</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card">
                    <div className="card-body">
                      <img
                        src={`${url}${image}`}
                        alt="single site"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm"></div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <div>
                    <div>
                      <center>
                        <CountDown deadline={deadline} />
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default siteSettingsCreateCard;
