import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../components/NoticeView.css';

const NoticeView = () => {
    const { noticeNum } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(
        () => {
            fetch(`http://localhost:8001/notices/${noticeNum}`)
                .then(response => response.json())
                .then(data => setDetail(data))
        }, [])

    // const goMain = () => {
    //     window.location.href = "/notice";
    // }

    return (
        <div className="view-wrapper">
            {
                detail ? (
                    <>
                        <div className="view-name">
                            <label>{detail.noticeTitle}</label>
                        </div>
                        <div className="view-date">
                            <label>{detail.noticeDate}</label>
                        </div>
                        <div className="view-content">
                            <label>{detail.noticeContent}</label>
                        </div>
                        <Link to="/notice">
                            <button className="view-button">목록으로</button>
                        </Link>
                    </>
                ) : "공지사항이 없습니다"
            }
            {/* <button className="view-button" onClick={goMain}>목록으로</button> */}
        </div>
    )
}

export default NoticeView;