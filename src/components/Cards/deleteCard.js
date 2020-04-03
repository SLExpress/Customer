import React, { Component } from "react";
import { Buttons } from "../table/buttons";
// import Modal from "./../common/modal";
import { ProductContext } from "./../../context";
import { Link } from "react-router-dom";

class deleteCard extends Component {
  static contextType = ProductContext;

  render() {
    // const { open, show, close, size } = this.context;
    const { title, buttonName, onDelete } = this.props;
    return (
      <div className="card">
        <div className="card-header textBold">{title}</div>

        <div className="card-body">
          <h6 className="card-title text-color-ash">
            Once you delete your account, there is no going back. Please be
            certain.
          </h6>

          <Link
            onClick={onDelete}
            style={{ textDecoration: "none" }}
            to="/myAccount"
          >
            <Buttons color="#e60000" name={buttonName} />
          </Link>
        </div>
        {/* <Modal
          title="Delete Your Account"
          content="Are you sure you want to delete your account"
          onDelete={onDelete}
          open={open}
          close={close}
          size={size}
        /> */}
      </div>
    );
  }
}

export default deleteCard;

// const deleteCard = ({ buttonType, title, buttonName, onDelete }) => {

//   confirmation = () => {
//     return <Confirm onDelete={onDelete} />;
//   };
//   return (
//     <div className="card">
//       <div className="card-header textBold">{title}</div>

//       <div className="card-body">
//         <h6 className="card-title text-color-ash">
//           Once you delete your account, there is no going back. Please be
//           certain.
//         </h6>

//         <Link onClick={this.confirmation} style={{ textDecoration: "none" }}>
//           <Button buttonName={buttonName} buttonType={buttonType} />
//         </Link>
//         {/* <Link onClick={onDelete} style={{ textDecoration: "none" }}>
//           <Button buttonName={buttonName} buttonType={buttonType} />
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default deleteCard;
