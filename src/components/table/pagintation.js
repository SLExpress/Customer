import React from "react";
import { Icon } from "semantic-ui-react";
import _ from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const pagination = props => {
  const {
    itemCount,
    pageSize,
    currentPage,
    onPreviousPageChange,
    onPageChange,
    onNextPageChange
  } = props;

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {currentPage !== 1 && (
          <li
            className="page-item"
            as="a"
            icon
            onClick={() => onPreviousPageChange(currentPage)}
          >
            <Icon name="chevron left" style={{ marginTop: "5px" }} />
          </li>
        )}

        {pages.map(page => (
          <li className="page-item" as="a" key={page}>
            <Link
              className="page-link"
              href="#"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))}

        {currentPage !== pageCount && (
          <li
            className="page-item"
            as="a"
            icon
            onClick={() => onNextPageChange(currentPage)}
          >
            <Icon name="chevron right" style={{ marginTop: "5px" }} />
          </li>
        )}
      </ul>
    </nav>
  );
};

pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
export default pagination;
