import React from "react";
// import Button from "../common/button";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// import { FaTrash, FaAmazonPay } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { MdUpdate } from "react-icons/md";

// const singleMySite = ({ site }) => {
//   return (
//     <ProductConsumer>
//       {value => {
//         const { addToCart, setSingleSiteSettings } = value;
//         return (
//           <React.Fragment>
//             <div className="container">
//               <div className="row">
//                 <div className="col">
//                   <div className="card" style={{ width: "9rem" }}>
//                     <div className="card-body">
//                       {/* <div className="col-10 mx-auto col-lg-2 pb-2"> */}
//                       <Link
//                         to={`/siteSettings/${site.id}`}
//                         style={{ textDecoration: "none" }}
//                         onClick={() => setSingleSiteSettings(site.id)}
//                       >
//                         <img
//                           src={site.img}
//                           width="100px"
//                           className="img-fluid"
//                           alt=""
//                         />
//                       </Link>

//                       {/* </div> */}
//                     </div>
//                   </div>
//                   <br />
//                 </div>

//                 <div className="col" style={{ marginRight: "-30px" }}>
//                   {site.paid ? (
//                     <Button buttonName="Paid" buttonType="ash" />
//                   ) : (
//                     <Link
//                       to="/cartCheckOut"
//                       onClick={() => addToCart(site.id)}
//                       style={{ textDecoration: "none" }}
//                     >
//                       <Button buttonName="Pay Now" buttonType="blue" />
//                     </Link>
//                   )}
//                 </div>
//                 <div className="col" style={{ marginLeft: "-220px" }}>
//                   <Button buttonName="Delete" buttonType="red" />
//                 </div>
//               </div>
//             </div>
//           </React.Fragment>
//         );
//       }}
//     </ProductConsumer>
//   );
// };

// export default singleMySite;

// const singleMySite = ({ site }) => {
//   return (
//     <ProductConsumer>
//       {value => {
//         const { setSingleSiteSettings } = value;
//         return (
//           <React.Fragment>
//             <div className="container mb-5">
//               <div className="row mb-5">
//                 <div className="col mb-5">
//                   <div className="card" style={{ width: "9rem" }}>
//                     <div className="card-body">
//                       {/* <div className="col-10 mx-auto col-lg-2 pb-2"> */}
//                       <Link
//                         to={`/siteSettings/${site.id}`}
//                         style={{ textDecoration: "none" }}
//                         onClick={() => setSingleSiteSettings(site.id)}
//                       >
//                         <img
//                           src={`http://slexpress.tk:3000/images/sc/${site.script.image}`}
//                           width="100px"
//                           className="img-fluid"
//                           alt=""
//                         />
//                       </Link>

//                       {/* </div> */}
//                     </div>
//                   </div>
//                   <br />
//                 </div>

//                 <div className="col" style={{ marginRight: "-30px" }}>
//                   {site.paid ? (
//                     <p style={{ color: "var(--lightGrey)" }}>Paid</p>
//                   ) : (
//                     <Link
//                       to="/cartCheckOut"
//                       // onClick={() => addToCart(site.id)}
//                       style={{ textDecoration: "none" }}
//                     >
//                       <FaAmazonPay
//                         size={30}
//                         style={{ color: "var(--lightGrey)" }}
//                       />
//                     </Link>
//                   )}
//                 </div>
//                 <div className="col" style={{ marginLeft: "-220px" }}>
//                   <FaTrash size={20} className="text-danger" />
//                 </div>
//                 <div className="col" style={{ marginLeft: "-220px" }}>
//                   <Link
//                     style={{ textDecoration: "none" }}
//                     onClick={() => setSingleSiteSettings(site.id)}
//                     to={`/siteSettings/${site.id}`}
//                   >
//                     <IoIosArrowForward
//                       size={25}
//                       style={{ color: "var(--lightGrey)" }}
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </React.Fragment>
//         );
//       }}
//     </ProductConsumer>
//   );
// };

// export default singleMySite;

const singleMySite = ({ site }) => {
  return (
    <ProductConsumer>
      {value => {
        const { setSingleSiteSettings } = value;
        const datetime = new Date(site.createdDate);
        const dateString = datetime.toDateString();
        // const timeString = datetime.toLocaleTimeString();

        return (
          <React.Fragment>
            {/* <div className="container mb-5"> */}
            {/* <div className="row"> */}
            {/* <div className="col mb-5"> */}
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
            {/* </div> */}

            {/* <div className="col" style={{ marginRight: "-30px" }}> */}
            {/* {site.paid ? (
                    <p style={{ color: "var(--lightGrey)" }}>Paid</p>
                  ) : (
                    <Link
                      to="/cartCheckOut"
                      // onClick={() => addToCart(site.id)}
                      style={{ textDecoration: "none" }}
                    >
                      <FaAmazonPay
                        size={30}
                        style={{ color: "var(--lightGrey)" }}
                      />
                    </Link>
                  )} */}

            {/* </div> */}
            {/* <div className="col" style={{ marginLeft: "-220px" }}>
                  <FaTrash size={20} className="text-danger" />
                </div>
                <div className="col" style={{ marginLeft: "-220px" }}>
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={() => setSingleSiteSettings(site.id)}
                    to={`/siteSettings/${site.id}`}
                  >
                    <IoIosArrowForward
                      size={25}
                      style={{ color: "var(--lightGrey)" }}
                    />
                  </Link>
                </div> */}
            {/* </div> */}
            {/* </div> */}
          </React.Fragment>
        );
      }}
    </ProductConsumer>
  );
};

export default singleMySite;
