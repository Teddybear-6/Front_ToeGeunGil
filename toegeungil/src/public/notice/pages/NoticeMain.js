import React, { useState, useEffect, useCallback } from "react";
import NoticeList from "../components/NoticeList";
import Paging from "../components/Paging";

function NoticeMain() {
    const [notices, setNotices] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();

    useEffect(() => {
        //paging
        fetch(process.env.REACT_APP_URL + `/notices?page=${page - 1}&size=12`)
            .then((response) => response.json())
            .then((data) => setNotices(data))

        fetch(process.env.REACT_APP_URL + `/notices/size`)
            .then(res => res.json())
            .then(res => setPageCount(res))

    }, [page]);

    const setPage = useCallback(
        (page) => {
            setPages(page)
        }
    )

    return (
        <>
            <div className="toegeungillayou">
                <NoticeList list={notices}/>
                <Paging count={pageCount} setPage={setPage} page={page} />
            </div>
        </>
    )
}

export default NoticeMain;