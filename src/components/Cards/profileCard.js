import React from "react";
// import Button from "../common/button";
import { Link } from "react-router-dom";
// import { CustomerConsumer } from "../../context/customerContext";
import { Buttons } from "../table/buttons";

const profileCard = ({ title, buttonName, customer }) => {
  return (
    // <CustomerConsumer>
    //   {value => {
    //     const { customer } = value;
    //     const { firstName, lastName, username, email, phone } = customer;
    //     return (
    //       <div className="card">
    //         <div className="card-header textBold">{title}</div>

    //         <div className="card-body">
    //           <h6 className="card-title text-color-ash">{`First Name: ${firstName}`}</h6>
    //           <h6 className="card-title text-color-ash ">{`Last Name: ${lastName}`}</h6>
    //           <h6 className="card-title text-color-ash ">{`User Name:  ${username}`}</h6>
    //           <h6 className="card-title text-color-ash">{`Email:  ${email}`}</h6>
    //           <h6 className="card-title text-color-ash">{`Contact No:  ${phone}`}</h6>
    //           <Link to="/accountSettings" style={{ textDecoration: "none" }}>
    //             <Button buttonName={buttonName} buttonType={buttonType} />
    //           </Link>
    //         </div>
    //       </div>
    //     );
    //   }}

    <div className="card">
      <div className="card-header textBold">{title}</div>

      <div className="card-body">
        <h6 className="card-title text-color-ash">{`First Name: ${customer.firstName}`}</h6>
        <h6 className="card-title text-color-ash ">{`Last Name: ${customer.lastName}`}</h6>
        <h6 className="card-title text-color-ash ">{`User Name:  ${customer.username}`}</h6>
        <h6 className="card-title text-color-ash">{`Email:  ${customer.email}`}</h6>
        <h6 className="card-title text-color-ash">{`Contact No:  ${customer.phone}`}</h6>
        <Link to="/accountSettings" style={{ textDecoration: "none" }}>
          {/* <Button buttonName={buttonName} buttonType={buttonType} /> */}
          <Buttons color="#40a3dc" name={buttonName} />
        </Link>
      </div>
    </div>
    // {/* </CustomerConsumer> */}
  );
};

export default profileCard;
