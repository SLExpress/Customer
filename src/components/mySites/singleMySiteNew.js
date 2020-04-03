import React from "react";
import { MDBView } from "mdbreact";
import { Buttons } from "./../table/buttons";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { MdUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
import { Status } from "./../table/icon";
import { deleteWebsite } from "./../../services/siteCategoryService";
// import img from "./../../images/QueensVilla.png";
import Swal from "sweetalert2";

const singleMySiteNew = ({ site }) => {
  const handleDeleteWebsite = async websiteId => {
    try {
      const data = { websiteId };
      await deleteWebsite(data);
    } catch (ex) {}
  };

  const onDeleteWebsite = async websiteId => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          handleDeleteWebsite(websiteId);
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "website has been deleted",
            showConfirmButton: true,
            timer: 1500
          }).then(function() {
            window.location = "/mySites";
          });
        }
      });
    } catch (error) {}
  };

  return (
    <ProductConsumer>
      {value => {
        const { setSingleSiteSettings } = value;
        const datetime = new Date(site.createdDate);
        const dateString = datetime.toDateString();
        // const timeString = datetime.toLocaleTimeString();

        return (
          <ProductWrapper>
            <div className="card">
              <MDBView hover zoom>
                <article className="mysite">
                  {/* Image container */}
                  <div className="myimg-container">
                    {/* Setting up a default image */}
                    <img
                      src={`http://slexpress.tk:3000/images/sc/${site.script.image}`}
                      alt="site"
                    />

                    {/* Link to the page */}

                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/siteSettings/${site._id}`}
                      className="mysite-link2"
                      onClick={() => setSingleSiteSettings(site._id)}
                    >
                      <Buttons name="View" color="#40a3dc" />
                    </Link>

                    <Link
                      style={{ textDecoration: "none" }}
                      className="mysite-link3"
                      onClick={() => onDeleteWebsite(site._id)}
                    >
                      <Buttons name="Delete" color="#40a3dc" />
                    </Link>
                  </div>

                  {/* name of the site*/}

                  <p className="mysite-info">
                    <MdUpdate />
                    {dateString}
                    {site.paid && <Status name="Details" color="#40a3dc" />}
                  </p>
                </article>
              </MDBView>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default singleMySiteNew;
const ProductWrapper = styled.div`
  .card {
    transition: var(--mainTransition);
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--primaryColor);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }

  .cart-btn:hover {
    color: var(--darkBlue);
    cursor: pointer;
  }
`;
