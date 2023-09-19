import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import '../components/NoticeView.css';
import '../components/NoticeBanner.css';

const NoticeView = () => {
    const { noticeNum } = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true); // 로딩 상태 관리

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8001/notices/${noticeNum}`)
            .then(response => response.json())
            .then(data => {
                setDetail(data);
                setLoading(false);
            })
    }, [noticeNum])

    return (
        <div className="view-wrapper">
            <div className="customerService-banner">
                <button className="notice-button">공지사항</button>
                <button className="qna-button">문의하기</button>
                <button className="report-button">신고하기</button>
            </div>
            {
                loading ? (
                    "로딩 중"
                ) : (
                    detail ? (
                        <>
                            <div className="view-name">
                                <label>{detail.noticeTitle}</label>
                            </div>
                            <div>
                                <div className="view-date">
                                    <label>{detail.noticeDate}</label>
                                </div>
                                <div className="view-text-box">
                                    <div className="view-text">
                                        <label>{detail.noticeContent}</label>
                                    </div>
                                </div>
                                <div className="view-button-box" >
                                    <Link to="/notice">
                                        <button className="view-button">목록으로</button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : "공지사항이 없습니다"
                )
            }
        </div>
    )
}

export default NoticeView;