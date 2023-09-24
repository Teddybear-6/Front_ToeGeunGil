import React from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";

const pagings = ({ page, count, setPage }) => {

    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={12}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={setPage}
        />
    );
};


export default pagings;