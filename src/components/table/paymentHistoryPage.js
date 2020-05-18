/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Pagination from "./pagintation";
import PurchaseTable from "./paymentHistoryTable";
import { paginate } from "./paginate";
import { SearchBar } from "./icon";
import { TableContext } from "../../context/tableContext";
import { MDBAnimation } from "mdbreact";
import { Button, Icon } from "semantic-ui-react";
import _ from "lodash";
import jsPDF from "jspdf";
import "jspdf-autotable";

class paymentHistoryPage extends Component {
  static contextType = TableContext;

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
    doc.text(190, 140, "Payment Analysis ");

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

    const data = this.context.paymentHistory.map((site) => [
      site.website.url.defaultUrl,
      site.payment,
      new Date(site.datePurchased),
    ]);

    let content = {
      startY: 270,
      head: headers,
      body: data,
    };

    doc.autoTable(content);

    var totalPayment = 0;

    this.context.paymentHistory.map(
      (site) => (totalPayment = totalPayment + parseFloat(site.payment))
    );

    doc.setFontSize(12);
    let finalY = doc.lastAutoTable.finalY; // The y position on the page
    doc.text(41, finalY + 50, "Total Payment: Rs." + totalPayment);
    doc.text(
      41,
      finalY + 80,
      "Total Websites Purchased: " + this.context.paymentHistory.length
    );
    // doc.text(41, finalY + 110, "Website ID: " + this.props.email);
    // doc.text(41, finalY + 140, "Currency: " + this.props.time);

    doc.save("SLExpress Payment Analysis.pdf");
  };

  render() {
    const {
      paymentHistory,
      handlePageChange,
      handlePreviousPageChange,
      handleNextPageChange,
      handleSort,
      currentPage,
      pageSize,
      searchQuery,
      handleSearch,
      sortColumn,
      handleDelete,
      setSinglePaymentHistory,
    } = this.context;

    const { length: count } = paymentHistory;

    let filtered = paymentHistory;
    if (searchQuery)
      filtered = paymentHistory.filter((c) =>
        c.website.url.defaultUrl
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const allPurchases = paginate(sorted, currentPage, pageSize);

    const { length: totalCount } = filtered;

    return (
      <>
        {count === 0 ? (
          <p>There are no transactions done so far.</p>
        ) : (
          <p>Showing {totalCount} successful transactions with slexpress.</p>
        )}
        <MDBAnimation type="fadeIn">
          <Button animated onClick={this.generatePdf} color="green">
            <Button.Content visible>Generate</Button.Content>
            <Button.Content hidden>
              <Icon inverted color="" name="file pdf" />
            </Button.Content>
          </Button>

          <SearchBar value={searchQuery} onChange={handleSearch} />
          <PurchaseTable
            purchases={allPurchases}
            currentPage={currentPage}
            sortColumn={sortColumn}
            onDelete={handleDelete}
            onSort={handleSort}
            onSelect={setSinglePaymentHistory}
          />
          <div className="mb-2">
            <Pagination
              itemCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPreviousPageChange={handlePreviousPageChange}
              onPageChange={handlePageChange}
              onNextPageChange={handleNextPageChange}
            />
          </div>
        </MDBAnimation>
      </>
    );
  }
}
export default paymentHistoryPage;
