import { useEffect, useState } from "react";
import NoticeTable from "../components/NoticeTable";

const NoticeList = () => {
    const [notice, setNotice] = useState([]);

    useEffect(
        () => {
            fetch("http://localhost:8001/notices")
                .then(response => response.json())
                .then(data => setNotice(data))
        }, [])

    return (
        <>
            <div>
                <NoticeTable noticeHeadersName={['번호 제목 작성일']} children={notice} />
            </div>
        </>
    )
}

export default NoticeList;