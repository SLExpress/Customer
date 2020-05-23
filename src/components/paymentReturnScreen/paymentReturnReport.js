import React, { Component } from "react";
import { Grid, Table } from "semantic-ui-react";
import { MDBAnimation } from "mdbreact";
import { Header, Icon, Button } from "semantic-ui-react";
import MenuBar from "./../common/menuBar";
import jsPDF from "jspdf";
import "jspdf-autotable";

class paymentReturnReport extends Component {
  generatePdf = () => {
    var doc = new jsPDF("p", "pt");
    doc.rect(
      20,
      20,
      doc.internal.pageSize.width - 40,
      doc.internal.pageSize.height - 40,
      "S"
    );

    doc.setTextColor(47, 167, 217);
    doc.setFontSize(32);
    doc.text(30, 55, "SLExpress");
    doc.setFontSize(12);
    doc.text(415, 40, "Email: admin@slexpress.lk");
    doc.text(440, 60, "Call Us: 077 714 5020");
    doc.line(20, 70, 575, 70);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(28);
    doc.setFontType("bold");
    doc.text(190, 140, "Payment Receipt");

    var tempDate = new Date();
    var date =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();

    var time =
      +" " +
      tempDate.getHours() +
      ":" +
      tempDate.getMinutes() +
      ":" +
      tempDate.getSeconds();

    doc.setFontSize(10);
    doc.setFontType("normal");
    doc.text(40, 190, "Email: " + localStorage.getItem("email"));
    doc.text(40, 205, "Username: " + localStorage.getItem("username"));
    doc.text(40, 220, "Date: " + date);
    doc.text(40, 235, "Time: " + time);

    doc.setFontSize(15);
    const headers = [["WEBSITE NAME", "PAYMENT", "DATE"]];

    const siteName = this.props.scriptName;
    const payment = this.props.payment;
    const timeCreated = this.props.day;

    const data = [[siteName, payment, timeCreated]];
    let content = {
      startY: 270,
      head: headers,
      body: data,
    };

    doc.autoTable(content);

    doc.setFontSize(12);
    let finalY = doc.lastAutoTable.finalY; // The y position on the page
    doc.text(
      41,
      finalY + 50,
      "Payhere Payment ID: " + this.props.payherePaymentId
    );
    doc.text(41, finalY + 80, "Order ID: " + this.props.orderId);
    doc.text(41, finalY + 110, "Email: " + this.props.email);
    doc.text(41, finalY + 140, "Time: " + this.props.time);

    doc.save("e-Receipt.pdf");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Grid>
            <Grid.Column width={3}>
              <MenuBar />
              <br />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginTop: "20px" }}>
              <Header as="h2" centered>
                <Icon name="chart line" />
                <Header.Content>
                  Payment Summary
                  <Header.Subheader></Header.Subheader>
                </Header.Content>
              </Header>
              <MDBAnimation type="fadeIn">
                <Button
                  animated
                  onClick={this.generatePdf}
                  color="green"
                  floated="right"
                  style={{ marginBottom: "10px" }}
                >
                  <Button.Content visible>Generate</Button.Content>
                  <Button.Content hidden>
                    <Icon inverted color="" name="file pdf" />
                  </Button.Content>
                </Button>
                <Table celled selectable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Website Name</Table.HeaderCell>
                      <Table.HeaderCell>Payment</Table.HeaderCell>
                      <Table.HeaderCell>Time</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>{this.props.scriptName}</Table.Cell>
                      <Table.Cell>{this.props.payment}</Table.Cell>
                      <Table.Cell>{this.props.time}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <br />
                <br />
                <p>Order ID: {this.props.orderId}</p>
                <p>Email: {this.props.email}</p>
                <p>Date: {this.props.day}</p>
              </MDBAnimation>
            </Grid.Column>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default paymentReturnReport;
