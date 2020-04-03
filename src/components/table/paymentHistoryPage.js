import React, { Component } from "react";
import Pagination from "./pagintation";
import { paginate } from "./paginate";
import PurchaseTable from "./paymentHistoryTable";
// import { toast } from "react-toastify";
// import { getCategories } from "../../services/siteCategoryService";
import { SearchBar } from "./icon";
import _ from "lodash";
// import { siteCategoryData } from "./../../context/siteCategoryData";
import { TableContext } from "../../context/tableContext";

class paymentHistoryPage extends Component {
  // state = {
  //   categories: siteCategoryData,
  //   currentPage: 1,
  //   pageSize: 5,
  //   searchQuery: "",
  //   sortColumn: { path: "title", order: "asc" }
  // };

  // componentDidMount = async () => {
  //   // const { data: categories } = await getCategories();
  //   // this.setState({ categories: categories.categories });
  //   // console.log("categories", categories);
  // };
  // handleDelete = async category => {
  //   console.log("Deleted");
  //   // const categories = this.state.categories.filter(
  //   //   d => d._id !== category._id
  //   // );
  //   // this.setState({ categories });

  //   // try {
  //   //   console.log(category._id);
  //   //   await deleteCategory(category._id);
  //   // } catch (ex) {
  //   //   if (ex.response && ex.response.status === 404)
  //   //     toast.error("This site has already been deleted.");

  //   //   //this.setState({categories});
  //   // }
  // };

  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  // handlePreviousPageChange = page => {
  //   this.setState({ currentPage: page - 1 });
  // };

  // handleNextPageChange = page => {
  //   this.setState({ currentPage: page + 1 });
  // };

  // handleSort = sortColumn => {
  //   this.setState({ sortColumn });
  // };

  // handleSearch = query => {
  //   // console.log("search wada");
  //   this.setState({ searchQuery: query, currentPage: 1 });
  // };

  // getPageData = () => {
  //   const {
  //     pageSize,
  //     currentPage,
  //     sortColumn,
  //     searchQuery,
  //     categories: allCategories
  //   } = this.state;

  //   let filtered = allCategories;
  //   if (searchQuery)
  //     filtered = allCategories.filter(c =>
  //       c.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  //     );

  //   const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  //   const categories = paginate(sorted, currentPage, pageSize);

  //   return { totalCount: filtered.length, data: categories };

  // };

  static contextType = TableContext;

  render() {
    const {
      // categories,
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
      setSinglePaymentHistory
    } = this.context;

    // const { length: count } = this.state.categories;
    // const { length: count } = categories;
    const { length: count } = paymentHistory;
    // const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    /////////////////////////////////////////////////////////////////////////////////////////////

    // let filtered = categories;
    let filtered = paymentHistory;
    if (searchQuery)
      filtered = paymentHistory.filter(c =>
        c.website.url.defaultUrl
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase())
      );
    // if (searchQuery)
    //   filtered = categories.filter(c =>
    //     c.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    //   );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const allPurchases = paginate(sorted, currentPage, pageSize);
    // const allCategories = paginate(sorted, currentPage, pageSize);
    const { length: totalCount } = filtered;

    // return { totalCount: filtered.length, data: categories };
    /////////////////////////////////////////////////////////////////////////////////////////////////
    // if (count === 0) return <p>There are no categories in the database.</p>;

    // const { totalCount, data: categories } = this.getPageData();
    return (
      <>
        <div className="container">
          {count === 0 ? (
            <p>There are no entries in the database.</p>
          ) : (
            <p>Showing {totalCount} entries in the database.</p>
          )}

          {/* <SearchBar value={searchQuery} onChange={this.handleSearch} /> */}
          <SearchBar value={searchQuery} onChange={handleSearch} />
          <PurchaseTable
            purchases={allPurchases}
            // categories={allPurchases}
            currentPage={currentPage}
            sortColumn={sortColumn}
            // onDelete={this.handleDelete}
            // onSort={this.handleSort}
            onDelete={handleDelete}
            onSort={handleSort}
            onSelect={setSinglePaymentHistory}
          />
          <div className="mb-2">
            <Pagination
              itemCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              // onPreviousPageChange={this.handlePreviousPageChange}
              // onPageChange={this.handlePageChange}
              // onNextPageChange={this.handleNextPageChange}
              onPreviousPageChange={handlePreviousPageChange}
              onPageChange={handlePageChange}
              onNextPageChange={handleNextPageChange}
            />
          </div>
        </div>
      </>
    );
  }
}
export default paymentHistoryPage;
