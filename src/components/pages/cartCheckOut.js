import React, { Component } from "react";
import Cart from "../cart/cart";
import { ProductContext } from "../../context";
import Loader from "./../common/loader";

class cartCheckout extends Component {
  static contextType = ProductContext;

  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <div
          // className="card"
          style={{
            // marginBottom: "150px",
            // marginTop: "150px",
            marginLeft: "150px",
            marginRight: "150px"
          }}
        >
          <div className="card-body">
            <Cart />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default cartCheckout;

// const cartCheckOut = () => {
//   return (
//     <React.Fragment>
//       <div
//         // className="card"
//         style={{
//           // marginBottom: "150px",
//           // marginTop: "150px",
//           marginLeft: "150px",
//           marginRight: "150px"
//         }}
//       >
//         <div className="card-body">
//           <Cart />
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default cartCheckOut;
