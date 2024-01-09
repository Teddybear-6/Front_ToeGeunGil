import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Pagingcss from "../css/Paging.css";

const Paging = ({ page, count, setPage, localfilters, categoryCode }) => {

    useEffect(() => {
        setPage(1)
    }, [localfilters, categoryCode]);

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