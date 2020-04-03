import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { Up, Down } from "./icon";

class tableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <Down />;
    return <Up />;
  };

  render() {
    console.log(this.props.columns);
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell key="No">No</Table.HeaderCell>
          {this.props.columns.map(column => (
            <Table.HeaderCell
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
    );
  }
}
export default tableHeader;
