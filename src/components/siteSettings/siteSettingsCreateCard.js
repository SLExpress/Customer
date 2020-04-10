/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import CountDown from "../common/countDown";
import { Buttons } from "./../table/buttons";
import { Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import { apiUrl } from "./../../config/config.json";
import moment from "moment";

const siteSettingsCreateCard = ({ subdomain }) => {
  const domain = subdomain;
  return (
    <ProductConsumer>
      {(value) => {
        const { singleMySiteSettingsCreate } = value;
        const { name, image } = singleMySiteSettingsCreate;
        const url = apiUrl;

        const siteCreatedTime = localStorage.getItem("siteCreatedTime");
        const time = new Date(siteCreatedTime);
        const correctTime = moment(time).add(7, "days").toDate();
        const dateString = time.toDateString();
        const timeString = time.toLocaleTimeString();

        const deadline = new Date(correctTime).getTime();

        return (
          <div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-sm">
                  <div className="cards" style={{ width: "500px" }}>
                    <div className="card-bodys">
                      <h1 className="textBold" style={{ fontWeight: "bold" }}>
                        Your website has successfully created!
                      </h1>
                      <center>
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
                      </center>
                      <Divider
                        as="h4"
                        className="header"
                        horizontal
                        style={{
                          margin: "3em 0em",
                          textTransform: "uppercase",
                        }}
                      >
                        <a href="/aboutus">Important</a>
                      </Divider>
                      <p
                        className="text-color-ash"
                        style={{ marginTop: "-20px" }}
                      >
                        You have seven days to complete your payment from now.
                        If you are unable to complete your payment within seven
                        days, this website will be automatically deleted.
                      </p>
                      <p className="text-color-ash"></p>
                      <center>
                        {" "}
                        <Link to="/cartCheckout">
                          <Buttons color="#40a3dc" name="Pay Now" />
                        </Link>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 p-3">
                  <div className="cards">
                    <div className="card-bodys">
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
