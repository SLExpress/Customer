import React from "react";
// import Footer from "./footer";
import SocialLinksFooter from "./socialLinksFooter";

const mainFooter = ({ currentUser }) => {
  return (
    <React.Fragment>
      {currentUser && (
        <div>
          <SocialLinksFooter />
        </div>
      )}
      {!currentUser && (
        <div>
          {/* <Footer /> */}
          <SocialLinksFooter />
        </div>
      )}
    </React.Fragment>
  );
};

export default mainFooter;
