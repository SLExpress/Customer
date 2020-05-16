/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Pagination from "./pagintation";
import DomainTable from "./domainListTable";
import { paginate } from "./paginate";
import { SearchBar } from "./icon";
import { TableContext } from "../../context/tableContext";
import _ from "lodash";

class domainListPage extends Component {
  static contextType = TableContext;

  render() {
    const {
      domains,
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
      handleAdd,
      handleUpdate,
      setSinglePaymentHistory,
    } = this.context;

    const { length: count } = domains;

    let filtered = domains;
    if (searchQuery)
      filtered = domains.filter((c) =>
        c.url.defaultUrl.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const allDomains = paginate(sorted, currentPage, pageSize);

    const { length: totalCount } = filtered;

    return (
      <>
        {count === 0 ? (
          <p>There are no transactions done so far.</p>
        ) : (
          <p>You have created {totalCount} websites with slexpress.</p>
        )}

        <SearchBar value={searchQuery} onChange={handleSearch} />
        <DomainTable
          domains={allDomains}
          currentPage={currentPage}
          sortColumn={sortColumn}
          onDelete={handleDelete}
          onSort={handleSort}
          onSelect={setSinglePaymentHistory}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
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
      </>
    );
  }
}
export default domainListPage;
