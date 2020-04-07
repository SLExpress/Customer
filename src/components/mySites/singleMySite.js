import React from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { MdUpdate } from "react-icons/md";

const singleMySite = ({ site }) => {
  return (
    <ProductConsumer>
      {value => {
        const { setSingleSiteSettings } = value;
        const datetime = new Date(site.createdDate);
        const dateString = datetime.toDateString();

        return (
          <React.Fragment>
            <div className="card mb-3 mr-3 ml-3" style={{ width: "18rem" }}>
              <Link
                to={`/siteSettings/${site._id}`}
                style={{ textDecoration: "none" }}
                onClick={() => setSingleSiteSettings(site._id)}
              >
                <img
                  src={`http://slexpress.tk:3000/images/sc/${site.script.image}`}
                  // src={img}
                  width="100px"
                  className="img-fluid card-img-top"
                  alt=""
                />
              </Link>
              <div className="price-top">
                <TiDeleteOutline
                  size={20}
                  style={{ color: "var(--lightGrey)" }}
                />
              </div>

              <div className="card-body">
                <p className="text-muted">
                  <MdUpdate />
                  {dateString}
                </p>
              </div>
            </div>
            <br />
          </React.Fragment>
        );
      }}
    </ProductConsumer>
  );
};

export default singleMySite;
