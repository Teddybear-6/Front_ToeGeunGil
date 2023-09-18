import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import '../components/NoticeView.css';

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
            {
                loading ? (
                    "로딩 중"
                ) : (
                    detail ? (
                        <>
                            <div className="view-name">
                                <label>{detail.noticeTitle}</label>
                            </div>
                            <div className="view-content">
                                <div className="view-date">
                                    <label>{detail.noticeDate}</label>
                                </div>
                                <div className="view-text-box">
                                    <div className="view-text">
                                        <label>{detail.noticeContent}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="view-button-box" >
                                <Link to="/notice">
                                    <button className="view-button">목록으로</button>
                                </Link>
                            </div>
                        </>
                    ) : "공지사항이 없습니다"
                )
            }
        </div>
    )
}

export default NoticeView;