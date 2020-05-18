/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import PaymentReturn from "../paymentReturnScreen/paymentReturnReport";
import { getPaymentStatus } from "../../services/paymentService";
import { getCustomer } from "../../services/userService";
import queryString from "query-string";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class returnPage extends Component {
  state = {
    data: {
      payment: "",
      scriptName: "",
      payherePaymentId: "",
      processedDate: "",
      orderId: "",
    },
    email: "",
  };

  async componentDidMount() {
    Swal.fire({
      icon: "success",
      title: "Payment Successfull",
      text: "You will get email reciept shortly",
      showConfirmButton: false,
      timer: 1500,
    });
    const values = queryString.parse(this.props.location.search);
    console.log(values.order_id);
    const { data: status } = await getPaymentStatus(values.order_id);
    console.log(status);

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
      orderId: status.orderId,
    };
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", -150, -50);

      pdf.save("eReciept.pdf");
    });
  }
  render() {
    const { data } = this.state;
    const timestamp = data.processedDate;
    var date = new Date(timestamp);
    const day = date.toDateString();
    const time = date.toLocaleTimeString();

    return (
      <div>
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
