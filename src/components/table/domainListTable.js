/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Tables from "./tables";
import { TableIcon } from "./icon";

class domainListTable extends Component {
  columns = [
    { dUrl: "url.defaultUrl", label: "Default url" },
    { path: "_id", label: "Website ID" },
    { path: "script", label: "Script ID" },
    { date: "date", label: "Date" },
    { url: "url.customUrl", label: "Custom url" },
    {
      key: "buttonAdd",
      content: (site) => (
        <TableIcon
          onSubmit={() => this.props.onAdd(site)}
          name="add"
          color="green"
        />
      ),
    },
    {
      key: "buttonUpdate",
      content: (site) => (
        <TableIcon
          onSubmit={() => this.props.onUpdate(site)}
          name="edit outline"
          color="black"
        />
      ),
    },
    {
      key: "buttonDelete",
      content: (site) => (
        <TableIcon
          onSubmit={() => this.props.onDelete(site)}
          name="trash alternate outline"
          color="red"
        />
      ),
    },
  ];
  render() {
    const { domains, onSort, sortColumn, currentPage } = this.props;

    return (
      <Tables
        columns={this.columns}
        data={domains}
        currentPage={currentPage}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default domainListTable;
