import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import auth from "../../services/authService";

const breadcrumbPage = () => {
  if (auth.getCurrentUser()) {
    return (
      <MDBBreadcrumb style={{ marginTop: "-50px" }}>
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Categories</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Profile</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    );
  } else return null;
};

export default breadcrumbPage;
