import React, { Component } from "react";
import Pagination from "./pagintation";
import PurchaseTable from "./paymentHistoryTable";
import { paginate } from "./paginate";
import { SearchBar } from "./icon";
import { TableContext } from "../../context/tableContext";
import _ from "lodash";

class paymentHistoryPage extends Component {
  static contextType = TableContext;

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
      setSinglePaymentHistory
    } = this.context;

    const { length: count } = paymentHistory;

    let filtered = paymentHistory;
    if (searchQuery)
      filtered = paymentHistory.filter(c =>
        c.website.url.defaultUrl
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const allPurchases = paginate(sorted, currentPage, pageSize);

    const { length: totalCount } = filtered;

    return (
      <>
        <div className="container">
          {count === 0 ? (
            <p>There are no entries in the database.</p>
          ) : (
            <p>Showing {totalCount} entries in the database.</p>
          )}

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
        </div>
      </>
    );
  }
}
export default paymentHistoryPage;
