import React, { Component } from "react";
import queryString from "query-string";
import { getPaymentStatus } from "../../services/paymentService";
import PaymentReturn from "../paymentReturnScreen/paymentReturn";
import { getCustomer } from "../../services/userService";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import { Buttons } from "./../table/buttons";
// import { Link } from "react-router-dom";

class returnPage extends Component {
  state = {
    data: {
      payment: "",
      scriptName: "",
      payherePaymentId: "",
      processedDate: "",
      orderId: ""
    },
    email: ""
  };

  async componentDidMount() {
    Swal.fire({
      icon: "success",
      title: "Payment Successfull",
      text: "You will get email reciept shortly",
      showConfirmButton: false,
      timer: 1500
    });
    const values = queryString.parse(this.props.location.search);
    console.log(values.order_id);
    const { data: status } = await getPaymentStatus(values.order_id);
    console.log(status);
    // console.log(status.payment);
    this.setState({ data: this.mapToViewModel(status) });
    const { data: customer } = await getCustomer();
    this.setState({ email: customer.email });
    console.log(this.state.email);
  }

  mapToViewModel(status) {
    return {
      payment: status.payment,
      scriptName: status.scriptName,
      payherePaymentId: status.payherePaymentId,
      processedDate: status.processedDate,
      orderId: status.orderId
    };
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", -150, -50);
      // pdf.output('dataurlnewwindow');
      pdf.save("eReciept.pdf");
    });
  }
  render() {
    const { data } = this.state;
    const timestamp = data.processedDate;
    var date = new Date(timestamp);
    const day = date.toDateString();
    const time = date.toLocaleTimeString();
    // console.log(date.toDateString());
    // console.log(date.toTimeString());
    // console.log(date.toLocaleDateString());
    // console.log(date.toLocaleTimeString());
    // console.log(date.toGMTString());
    // console.log(date);
    // console.log(timestamp);
    // http://localhost:3000/returnPage?order_id=5e29e24ffee0ef7944319071
    return (
      <div>
        {/* {data.payment}...{data.scriptName}..{data.payherePaymentId}..
        {data.processedDate}..{data.orderId} */}
        <div id="divToPrint">
          <PaymentReturn
            payment={data.payment}
            scriptName={data.scriptName}
            payherePaymentId={data.payherePaymentId}
            day={day}
            orderId={data.orderId}
            time={time}
            email={this.state.email}
            onDownload={this.printDocument}
          />
        </div>
      </div>
    );
  }
}

export default returnPage;
