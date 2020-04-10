/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import MenuBar from "./../common/menuBar";
import OpenNewTicketForm from "./../Inquiries/openNewTicketForm";

class openNewTicket extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <MenuBar />
          </div>
          <div
            className="col"
            style={{ marginLeft: "100px", marginTop: "-810px" }}
          >
            <h4 className="textBold">Open New Ticket</h4>
            <p className="card-text text-color-ash">
              SLExpress team always availlable to answer your problems
            </p>
            <Card fluid>
              <OpenNewTicketForm />
            </Card>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default openNewTicket;
