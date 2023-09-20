import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../components/NoticeView.css';
import '../components/NoticeBanner.css';

const NoticeView = () => {
    const { noticeNum } = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true); // 로딩 상태 관리

    useEffect(() => {
        setLoading(true);
    fetch(process.env.REACT_APP_URL+`/notices/${noticeNum}`)
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
                                <div className="user-button-box" >
                                    <Link to="/notice">
                                        <button className="user-button">목록으로</button>
                                    </Link>
                                </div>
                                {/* 관리자일 경우 */}
                                <div className="admin-button-box">
                                    <Link to={`/notice/${noticeNum}/delete`}>
                                        <button className="admin-button1">삭제</button>
                                    </Link>
                                    <Link to={`/notice/${noticeNum}/modify`}>
                                        <button className="admin-button2">수정</button>
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