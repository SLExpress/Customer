import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { Table } from "semantic-ui-react";

const Tables = ({ columns, sortColumn, onSort, data, currentPage }) => {
  return (
    <Table basic="very" style={{ margin: 20 }}>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} currentPage={currentPage} />
    </Table>
  );
};

export default Tables;
