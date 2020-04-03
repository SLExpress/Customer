import React, { Component } from "react";
import { Buttons } from "./buttons";
import Tables from "./tables";
import { Status } from "./icon";
import { Link } from "react-router-dom";

class paymentHistoryTable extends Component {
  columns = [
    { path: "website.url.defaultUrl", label: "Default url" },
    { path: "website._id", label: "Website ID" },
    { path: "payherePayment", label: "Payment ID" },
    { path: "payment", label: "Payment" },
    { date: "datePurchased", label: "Date" },
    { path: "payhereOrder", label: "Order ID" },
    { path: "payhereCurrency", label: "Currency" },
    {
      key: "button",
      label: "Status",
      content: s => <Status name="Details" color="#40a3dc" />
    },
    {
      key: "buttonD",
      content: payment => (
        <Link to={`/singlePaymentHistory/${payment._id}`}>
          <Buttons
            onSubmit={() => this.props.onSelect(payment)}
            name="Details"
            color="#40a3dc"
          />
        </Link>
      )
    }

    // {
    //   key: "buttonU",
    //   content: category => (
    //     <Buttons
    //       onSubmit={() => this.props.onDelete(category)}
    //       name="Delete"
    //       color="#e60000"
    //     />
    //   )
    // }
  ];
  render() {
    const { purchases, onSort, sortColumn, currentPage } = this.props;

    return (
      <Tables
        columns={this.columns}
        data={purchases}
        currentPage={currentPage}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default paymentHistoryTable;
