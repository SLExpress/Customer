/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Header from "./header";
import LoginHeader from "./loginHeader";

const mainHeader = ({ currentUser, lastName, firstName }) => {
  return (
    <React.Fragment>
      {currentUser && (
        <div>
          <LoginHeader
            currentUser={currentUser}
            lastName={lastName}
            firstName={firstName}
          />
        </div>
      )}
      {!currentUser && (
        <div>
          <Header />
        </div>
      )}
    </React.Fragment>
  );
};
export default mainHeader;
