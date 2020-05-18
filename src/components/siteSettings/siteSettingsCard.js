/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import CountDown from "../common/countDown";
import Title from "./../common/title";
import { Status } from "../table/icon";
import { ProductConsumer } from "../../context";
import moment from "moment";

const siteSettingsCard = ({ deadline }) => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          singleMySiteSettings,
          singleMySiteSettingsScript,
          singleMySiteSettingsUrl,
        } = value;
        const { createdDate, paid, price } = singleMySiteSettings;
        const { defaultUrl, customUrl } = singleMySiteSettingsUrl;
        const { image, name } = singleMySiteSettingsScript;
        const time = new Date(createdDate);
        const correctTime = moment(time).add(7, "days").toDate();
        const deadline = new Date(correctTime).getTime();
        localStorage.setItem("deadline", deadline);

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
                      href={`http://${defaultUrl}/`}
                    >
                      <p className="text-color-ash">{defaultUrl}</p>
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

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`http://${customUrl}/`}
                  >
                    <p className="text-color-ash"> Custom Domain:{customUrl}</p>
                  </a>
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
