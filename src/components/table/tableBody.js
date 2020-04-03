import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import Moment from "react-moment";

class tableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else if (column.date)
      return <Moment format="DD/MM/YYYY">{_.get(item, column.date)}</Moment>;
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns, currentPage } = this.props;

    return (
      <>
        {data &&
          data.map((item, index) => (
            <Table.Body>
              <Table.Row key={item._id}>
                <Table.Cell key={index}>
                  {5 * (currentPage - 1) + index + 1}
                </Table.Cell>
                {columns.map(column => (
                  <Table.Cell key={this.createKey(item, column)}>
                    {this.renderCell(item, column)}
                  </Table.Cell>
                ))}
              </Table.Row>
            </Table.Body>
          ))}
      </>
    );
  }
}

export default tableBody;
