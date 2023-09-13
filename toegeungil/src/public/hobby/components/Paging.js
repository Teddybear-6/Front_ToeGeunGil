import React,{useState} from "react";
import Pagination from "react-js-pagination";
import Pagingcss from "./Paging.css";

const Paging = () =>{

    const [page , setPage] = useState(1);


    const handlerPageChange = (page) =>{
        setPage(page);
    }


    return(
        <Pagination activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlerPageChange}
        />
    );
};


export default Paging;