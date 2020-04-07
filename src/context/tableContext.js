import React, { Component } from "react";
import auth from "./../services/authService";
import { siteCategoryData } from "./siteCategoryData";
import { getPurchaseHistory } from "./../services/paymentService";

const TableContext = React.createContext();
class TableProvider extends Component {
  state = {
    categories: siteCategoryData,
    paymentHistory: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
    singlePaymentHistory: {},
    singlePaymentHistoryWebsite: {},
    singlePaymentHistoryWebsiteUrl: {}
  };

  async populatePurchases() {
    try {
      if (auth.getCurrentUser()) {
        const { data: paymentHistory } = await getPurchaseHistory();

        this.setState({
          paymentHistory: paymentHistory.purchases
        });

        console.log(this.state.paymentHistory);
      }
    } catch (error) {}
  }

  componentDidMount = async () => {
    try {
      await this.populatePurchases();

      this.setState({
        singlePaymentHistory: this.getsinglePaymentHistory(),
        singlePaymentHistoryWebsite: this.getsinglePaymentHistoryWebsite(),
        singlePaymentHistoryWebsiteUrl: this.getsinglePaymentHistoryWebsiteUrl()
      });
    } catch (error) {}
  };

  getsinglePaymentHistory = () => {
    return localStorage.getItem("payment")
      ? JSON.parse(localStorage.getItem("payment"))
      : {};
  };

  getsinglePaymentHistoryWebsite = () => {
    return localStorage.getItem("paymentWebsite")
      ? JSON.parse(localStorage.getItem("paymentWebsite"))
      : {};
  };

  getsinglePaymentHistoryWebsiteUrl = () => {
    return localStorage.getItem("paymentWebsiteUrl")
      ? JSON.parse(localStorage.getItem("paymentWebsiteUrl"))
      : {};
  };

  setSinglePaymentHistory = payment => {
    const { paymentHistory } = this.state;

    let payments = paymentHistory.find(item => item._id === payment._id);
    localStorage.setItem("payment", JSON.stringify(payments));
    localStorage.setItem("paymentWebsite", JSON.stringify(payments.website));
    localStorage.setItem(
      "paymentWebsiteUrl",
      JSON.stringify(payments.website.url)
    );

    this.setState(
      {
        singlePaymentHistory: { ...payments },
        singlePaymentHistoryWebsite: payments.website,
        singlePaymentHistoryWebsiteUrl: payments.website.url
      },
      () => console.log(this.state.singlePaymentHistory)
    );
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handlePreviousPageChange = page => {
    this.setState({ currentPage: page - 1 });
  };

  handleNextPageChange = page => {
    this.setState({ currentPage: page + 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  render() {
    return (
      <TableContext.Provider
        value={{
          ...this.state,
          handlePageChange: this.handlePageChange,
          handlePreviousPageChange: this.handlePreviousPageChange,
          handleNextPageChange: this.handleNextPageChange,
          handleSort: this.handleSort,
          handleSearch: this.handleSearch,
          handleDelete: this.handleDelete,
          setSinglePaymentHistory: this.setSinglePaymentHistory
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

const TableConsumer = TableContext.Consumer;
export { TableProvider, TableConsumer, TableContext };
