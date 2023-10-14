import React, { useEffect } from "react";
import Pagination from "react-js-pagination";


const Paging = ({ page, count, setPage, localfilters, cagegoryCode }) => {
    useEffect(() => {
        setPage(1)
    }, [localfilters, cagegoryCode])

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