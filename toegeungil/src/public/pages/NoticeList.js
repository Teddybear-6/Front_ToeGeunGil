import { Children, useEffect, useState } from "react";
import NoticeTable from "../components/NoticeTable";
import NoticeTableRow from "../components/NoticeTableRow";
import NoticeTableColumn from "../components/NoticeTableColumn";

const NoticeList = () => {
    const [notice, setNotice] = useState([{
        notiNum: 1,
        noticeTitle: "test",
        noticeDate: "2023-09-12"
    }, {
        notiNum: 2,
        noticeTitle: "test2",
        noticeDate: "2023-09-12"
    },
    {
        notiNum: 3,
        noticeTitle: "test3",
        noticeDate: "2023-09-12"
    }
    ]);

    useEffect(
        () => {

            // fetch("http://localhost:8001/notices")
            //     .then(response => response.json())
            //     .then((data) => console.log(data))
            //     .then(data => setNotice(data))
            //     .catch((error) => console.log("error:", error))
        }, [])

    return (
        <>
            <NoticeTable noticeHeadersName={['번호', '제목', '작성일']} children={notice}/>
        </>
    )
}

export default NoticeList;