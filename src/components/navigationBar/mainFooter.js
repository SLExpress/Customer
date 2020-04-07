import React from "react";
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
          <SocialLinksFooter />
        </div>
      )}
    </React.Fragment>
  );
};

export default mainFooter;
