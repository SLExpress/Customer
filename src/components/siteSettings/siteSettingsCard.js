import React from "react";
import { ProductConsumer } from "../../context";
import CountDown from "../common/countDown";
import moment from "moment";
import img from "../../images/QueensVilla.png";
import Title from "./../common/title";
import { Status } from "../table/icon";
import { Buttons } from "./../table/buttons";
import { Link } from "react-router-dom";

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
                {/* <div className="col-sm"> */}
                <div className="col-10 mx-auto col-md-6 my-3 mt-5">
                  {/* <div className="card">
                    <div className="card-body"> */}
                  <h5 className="textBold" style={{ fontWeight: "bold" }}>
                    <Title title={name} />
                    {/* {name} */}
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

                  {/* </div>
                  </div> */}
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 p-3">
                  {/* <div className="card">
                    <div className="card-body"> */}
                  <img
                    src={`http://slexpress.tk:3000/images/sc/${image}`}
                    // src={img}
                    alt="single site"
                    className="img-fluid"
                  />
                  {/* </div>
                  </div> */}
                </div>
                {/* <div className="col-sm"></div> */}
              </div>
              <br />
              <div className="row">
                <div className="col-sm">
                  {/* <div className="card">
                    <div className="card-body"> */}

                  <CountDown deadline={deadline} />

                  {/* <div>
                    <div> */}
                  {/* <center> */}

                  {/* </center> */}
                  {/* </div>
                  </div> */}
                </div>
                {/* <div className="col"></div> */}
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
