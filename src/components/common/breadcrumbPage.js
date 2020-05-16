/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import auth from "../../services/authService";
import { ProductContext } from "./../../context/context";
import { Link } from "react-router-dom";

class breadcrumbPage extends Component {
  static contextType = ProductContext;

  renderBreadcrumb(item) {
    const parts = item.split("/");
    const combined = parts.join("");
    return combined;
  }
  render() {
    const { breadcrumb, getBreadcrumb } = this.context;

    if (auth.getCurrentUser()) {
      return (
        <MDBBreadcrumb style={{ marginTop: "-50px" }}>
          <MDBBreadcrumbItem>
            <Link
              to={"/"}
              onClick={() => getBreadcrumb("")}
              style={{ textDecoration: "none", color: "#000" }}
            >
              Home
            </Link>
          </MDBBreadcrumbItem>

          <MDBBreadcrumbItem active>
            <Link
              to={"/" + this.renderBreadcrumb(breadcrumb)}
              onClick={() => getBreadcrumb(breadcrumb)}
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              {breadcrumb}
            </Link>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      );
    } else return null;
  }
}

export default breadcrumbPage;
