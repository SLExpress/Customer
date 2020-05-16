/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

import _ from "lodash";
import Moment from "react-moment";
import styled from "styled-components";

class tableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else if (column.date)
      return <Moment format="DD/MM/YYYY">{_.get(item, column.date)}</Moment>;
    else if (column.url) {
      const url = _.get(item, column.url);
      if (url == null) return "Not added";
      else
        return (
          <a
            style={{ textDecoration: "none", color: "#000" }}
            href={`http://${url}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {url}
          </a>
        );
    } else if (column.dUrl) {
      const dUrl = _.get(item, column.dUrl);
      return (
        <a
          style={{ textDecoration: "none", color: "#000" }}
          href={`http://${dUrl}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {dUrl}
        </a>
      );
    }

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
              <StyledTable key={item._id}>
                <Table.Cell key={index}>
                  {5 * (currentPage - 1) + index + 1}
                </Table.Cell>
                {columns.map((column) => (
                  <Table.Cell key={this.createKey(item, column)}>
                    {this.renderCell(item, column)}
                  </Table.Cell>
                ))}
              </StyledTable>
            </Table.Body>
          ))}
      </>
    );
  }
}

export default tableBody;

const StyledTable = styled(Table.Row)`
  padding: 9px 7px;
  border-top: 1px solid #e9ecef;
  white-space: nowrap;
`;
