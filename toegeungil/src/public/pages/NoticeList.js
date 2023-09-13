import { Children, useEffect, useState } from "react";
import NoticeTable from "../components/NoticeTable";
import NoticeTableRow from "../components/NoticeTableRow";
import NoticeTableColumn from "../components/NoticeTableColumn";

const NoticeList = () => {
    const [notice, setNotice] = useState([]);
    const [error, setError] = useState(null);

    useEffect(
        () => {
            fetch("http://localhost:8001/notices")
                .then(response => response.json())
                // .then((data) => console.log(data))
                .then(data => setNotice(data))
                .catch((error) => setError(error))
        }, [])

    return (
        <>
            <NoticeTable noticeHeadersName={['번호', '제목', '작성일']} children={notice} />
        </>
    )
}

export default NoticeList;