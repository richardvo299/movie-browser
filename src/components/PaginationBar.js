import React from "react";
import Pagination from "react-js-pagination";

const PaginationBar = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <Pagination
        activePage={props.currentPage}
        onChange={props.click}
        totalItemsCount={props.totalPageNum * props.limit}
        itemsCountPerPage={props.limit}
        pageRangeDisplayed={3}
        itemClass={"page-item"}
        itemClassPrev={"page-item"}
        itemClassNext={"page-item"}
        linkClass={"page-link"}
      />
    </div>
  );
};

export default PaginationBar;
