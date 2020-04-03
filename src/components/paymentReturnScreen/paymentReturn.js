// import React from "react";

import Success from "../../images/success.png";
import styled from "styled-components";
import { Buttons } from "./../table/buttons";
import { Link } from "react-router-dom";
import React from "react";

const paymentReturn = ({
  payment,
  scriptName,
  payherePaymentId,
  day,
  orderId,
  time,
  email,
  onDownload
}) => {
  return (
    <ReturnWrapper>
      <div class="container">
        <div class="row justify-content-md-center ">
          <div className="card text-center payment-return w-50 mt-5 mb-5">
            <div className="card-body">
              <img src={Success} alt="success" style={{ height: "200px" }} />
              <h2 className="text-muted" style={{ fontWeight: "bold" }}>
                Payment Successful
              </h2>
              <hr />
              <p className="text-color-ash textBold">
                Your order number is{" "}
                <p className="text-color-black">{orderId}</p>
              </p>
              <hr />

              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col col-sm-4">
                    <p className="text-muted">Total</p>
                    <p className="text-muted">Payhere payment Id</p>
                  </div>
                  <div class="col col-sm-4">
                    <p className="text-muted">Rs {payment}</p>
                    <p className="text-muted">{payherePaymentId}</p>
                  </div>
                </div>
                <div class="row justify-content-md-center">
                  <div class="col col-sm-4">
                    <p className="text-muted">Website</p>
                  </div>
                  <div class="col col-sm-4">
                    <p className="text-muted">{scriptName}</p>
                  </div>
                </div>
              </div>
              <p className=" small-text">
                you'll recieve a detailed receipt on
                <p>{email}</p>
              </p>
              <p>{day}</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
        <Link onClick={onDownload}>
          <div className="mt-5 mb-5">
            <Buttons color="#40a3dc" name="Download" className="center" />
          </div>
        </Link>
      </div>
    </ReturnWrapper>
  );
};

export default paymentReturn;

// class paymentReturn extends Component {
//   render() {
//     const {
//       payment,
//       scriptName,
//       payherePaymentId,
//       day,
//       orderId,
//       time,
//       email,
//       onDownload
//     } = this.props;
//     return (
//       <ReturnWrapper>
//         <div class="container">
//           <div class="row justify-content-md-center ">
//             <div id="divToPrint">
//               <div className="card text-center payment-return w-50 mt-5 mb-5">
//                 <div className="card-body">
//                   <img
//                     src={Success}
//                     alt="success"
//                     style={{ height: "200px" }}
//                   />
//                   <h2 className="text-muted" style={{ fontWeight: "bold" }}>
//                     Payment Successful
//                   </h2>
//                   <hr />
//                   <p className="text-color-ash textBold">
//                     Your order number is{" "}
//                     <p className="text-color-black">{orderId}</p>
//                   </p>
//                   <hr />

//                   <div class="container">
//                     <div class="row justify-content-md-center">
//                       <div class="col col-sm-4">
//                         <p className="text-muted">Total</p>
//                         <p className="text-muted">Payhere payment Id</p>
//                       </div>
//                       <div class="col col-sm-4">
//                         <p className="text-muted">Rs {payment}</p>
//                         <p className="text-muted">{payherePaymentId}</p>
//                       </div>
//                     </div>
//                     <div class="row justify-content-md-center">
//                       <div class="col col-sm-4">
//                         <p className="text-muted">Website</p>
//                       </div>
//                       <div class="col col-sm-4">
//                         <p className="text-muted">{scriptName}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <p className=" small-text">
//                     you'll recieve a detailed receipt on
//                     <p>{email}</p>
//                   </p>
//                   <p>{day}</p>
//                   <p>{time}</p>
//                 </div>
//                 <Link onClick={onDownload}>
//                   <center>
//                     <Buttons
//                       color="#40a3dc"
//                       name="Download"
//                       className="center"
//                     />
//                   </center>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ReturnWrapper>
//     );
//   }
// }

// export default paymentReturn;

const ReturnWrapper = styled.div`
  min-height: calc(100vh - 190px);
  width: 100%;

  @media (max-width: 414px) {
    margin-left: 52%;
  }

  @media (max-width: 375px) {
    margin-left: 41%;
  }

  @media (max-width: 320px) {
    margin-left: 28%;
  }

 
  }
`;
