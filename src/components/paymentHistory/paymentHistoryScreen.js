/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { Divider, Header, Segment, Label } from "semantic-ui-react";
import { TableConsumer } from "./../../context/tableContext";
import Moment from "react-moment";

const paymentHistoryScreen = () => {
  return (
    <TableConsumer>
      {(value) => {
        const {
          singlePaymentHistory,
          singlePaymentHistoryWebsite,
          singlePaymentHistoryWebsiteUrl,
        } = value;
        const {
          payment,
          payherePayment,
          datePurchased,
          payhereCurrency,
          payhereOrder,
        } = singlePaymentHistory;
        const { _id } = singlePaymentHistoryWebsite;
        const { defaultUrl } = singlePaymentHistoryWebsiteUrl;
        return (
          <div>
            <Segment style={{ height: "450px" }}>
              <Label as="a" color="blue" ribbon>
                Billing Review
              </Label>

              <Header as="h2">Payment Information</Header>
              <div class="alert alert-success" role="alert">
                <p className="text-color-ash">
                  Payhere payment ID: {payherePayment}
                </p>
              </div>
              <p className="text-color-ash">
                Amount:
                {payment}
              </p>
              <p className="text-color-ash">Currency: {payhereCurrency}</p>

              <p className="text-color-ash">
                Date of purchsed:
                <Moment format="DD/MM/YYYY">{datePurchased}</Moment>
              </p>

              <p className="text-color-ash">Order ID: {payhereOrder}</p>

              <Divider section />

              <Header as="h2">Website Information</Header>
              <p className="text-color-ash">Website ID: {_id}</p>
              <p className="text-color-ash">Default Url: {defaultUrl}</p>
            </Segment>
          </div>
        );
      }}
    </TableConsumer>
  );
};

export default paymentHistoryScreen;
