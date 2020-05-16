/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import auth from "./../services/authService";
import { getPurchaseHistory } from "./../services/paymentService";
import {
  getDomainList,
  deleteCustomDomain,
  addCustomDomain,
  updateCustomDomain,
} from "./../services/siteCategoryService";
import Swal from "sweetalert2";

const TableContext = React.createContext();
class TableProvider extends Component {
  state = {
    paymentHistory: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
    singlePaymentHistory: {},
    singlePaymentHistoryWebsite: {},
    singlePaymentHistoryWebsiteUrl: {},
    domains: [],
  };

  handleDeleteCustomDomain = async (websiteId) => {
    try {
      const data = { websiteId };
      await deleteCustomDomain(data);
    } catch (ex) {}
  };

  handleDelete = async (websiteId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          this.handleDeleteCustomDomain(websiteId);
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "custom domain has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {
            window.location = "/domainList";
          });
        }
      });
    } catch (error) {}
  };

  handleAddCustomDomain = async (websiteId, customDomain) => {
    try {
      await addCustomDomain(websiteId, customDomain);
    } catch (ex) {}
  };

  handleAdd = async (websiteId) => {
    try {
      Swal.fire({
        title: "Add Custom Domain",

        input: "text",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Add",
      }).then((result) => {
        if (result.value) {
          const customDomain = result.value;
          this.handleAddCustomDomain(websiteId, customDomain);
          Swal.fire({
            icon: "success",
            title: "Added!",
            text: "custom domain has been add",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {
            window.location = "/domainList";
          });
        }
      });
    } catch (error) {}
  };

  handleUpdateCustomDomain = async (customDomain, websiteId) => {
    try {
      await updateCustomDomain(customDomain, websiteId);
    } catch (ex) {}
  };

  handleUpdate = async (websiteId) => {
    try {
      Swal.fire({
        title: "Update Custom Domain",
        input: "text",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Update",
      }).then((result) => {
        if (result.value) {
          const customDomain = result.value;
          this.handleUpdateCustomDomain(customDomain, websiteId);
          Swal.fire({
            icon: "success",
            title: "Updated!",
            text: "custom domain has been updated",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {
            window.location = "/domainList";
          });
        }
      });
    } catch (error) {}
  };

  async populatePurchases() {
    try {
      if (auth.getCurrentUser()) {
        const { data } = await getDomainList();

        this.setState({
          domains: data,
        });

        console.log(this.state.domains);
      }
    } catch (error) {}
  }

  async populateDomains() {
    try {
      if (auth.getCurrentUser()) {
        const { data: paymentHistory } = await getPurchaseHistory();

        this.setState({
          paymentHistory: paymentHistory.purchases,
        });

        console.log(this.state.paymentHistory);
      }
    } catch (error) {}
  }

  componentDidMount = async () => {
    try {
      await this.populatePurchases();
      await this.populateDomains();

      this.setState({
        singlePaymentHistory: this.getsinglePaymentHistory(),
        singlePaymentHistoryWebsite: this.getsinglePaymentHistoryWebsite(),
        singlePaymentHistoryWebsiteUrl: this.getsinglePaymentHistoryWebsiteUrl(),
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

  setSinglePaymentHistory = (payment) => {
    const { paymentHistory } = this.state;

    let payments = paymentHistory.find((item) => item._id === payment._id);
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
        singlePaymentHistoryWebsiteUrl: payments.website.url,
      },
      () => console.log(this.state.singlePaymentHistory)
    );
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePreviousPageChange = (page) => {
    this.setState({ currentPage: page - 1 });
  };

  handleNextPageChange = (page) => {
    this.setState({ currentPage: page + 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
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
          handleAdd: this.handleAdd,
          setSinglePaymentHistory: this.setSinglePaymentHistory,
          handleUpdate: this.handleUpdate,
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

const TableConsumer = TableContext.Consumer;
export { TableProvider, TableConsumer, TableContext };
