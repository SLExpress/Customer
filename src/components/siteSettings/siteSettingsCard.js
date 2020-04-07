import React from "react";
import CountDown from "../common/countDown";
import Title from "./../common/title";
import { Status } from "../table/icon";
import { Buttons } from "./../table/buttons";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import moment from "moment";

const siteSettingsCard = () => {
  return (
    <ProductConsumer>
      {value => {
        const { singleMySiteSettings, singleMySiteSettingsScript } = value;
        const { url, createdDate, paid, price } = singleMySiteSettings;
        const { image, name } = singleMySiteSettingsScript;
        const time = new Date(createdDate);
        const correctTime = moment(time)
          .add(7, "days")
          .toDate();
        const deadline = new Date(correctTime).getTime();
        const dateString = time.toDateString();
        const timeString = time.toLocaleTimeString();

        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 mt-5">
                  <h5 className="textBold" style={{ fontWeight: "bold" }}>
                    <Title title={name} />
                  </h5>
                  <p className="text-color-ash">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`http://${url}/`}
                    >
                      <p className="text-color-ash">{url}</p>
                    </a>
                  </p>
                  <p className="text-color-ash">Created date:{dateString}</p>
                  <p className="text-color-ash">Created time:{timeString}</p>
                  <p className="text-color-ash">Price:{price}</p>
                  {paid && (
                    <p className="text-color-ash">
                      Payment successful{" "}
                      <Status name="Details" color="#40a3dc" />
                    </p>
                  )}
                  {!paid && (
                    <p className="text-color-ash">
                      Payment unsuccessful <p></p>
                    </p>
                  )}
                  {!paid && (
                    <Link to="/cartCheckOut">
                      {" "}
                      <p className="text-color-ash">
                        <Buttons name="Pay Now" color="#40a3dc" />
                      </p>
                    </Link>
                  )}
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 p-3">
                  <img
                    src={`http://slexpress.tk:3000/images/sc/${image}`}
                    alt="single site"
                    className="img-fluid"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm">
                  <CountDown deadline={deadline} />
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

export default siteSettingsCard;
