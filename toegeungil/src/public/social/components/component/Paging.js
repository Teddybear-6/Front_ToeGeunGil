import React, { useState } from "react";
import Pagination from "react-js-pagination";
import Pagingcss from "../css/Paging.css";

const Paging = ({ page, count, setPage }) => {


    return (
        <Pagination activePage={page}
            itemsCountPerPage={12}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={setPage}
        />
    );
};


export default Paging;