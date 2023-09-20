import React, { useState, useEffect } from "react";
import '../components/NoticeMain.css';
import '../components/NoticeBanner.css';
import { Link } from "react-router-dom";
// import '../components/testLogin';

const NoticeList = () => {
    const [list, setList] = useState([]);


    const getList = () => {
        fetch(process.env.REACT_APP_URL+`/notices`)
            .then(response => response.json())
            .then(data => setList(data))
    }

    useEffect(
        () => {
            getList();

        }, [])



    const noticeClick = () => {
        alert("공지사항을 작성하시겠습니까?")
    }

    return (
        <div className='layout'>
            <div className="notice-wrapper">
                <div className="customerService-banner">
                    <button className="notice-button">공지사항</button>
                    <button className="qna-button">문의하기</button>
                    <button className="report-button">신고하기</button>
                </div>
                <table className="table-wrapper">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((notice) => (
                                <tr key={notice.noticeNum}>
                                    <td>{notice.noticeNum}</td>
                                    <td>
                                        <Link to={`/notice/${notice.noticeNum}`}
                                            style={{ textDecoration: "none", color: "#87746B" }} className="title-link">{notice.noticeTitle}</Link>
                                    </td>
                                    <td>{notice.noticeDate}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    {/* 관리자일 경우 */}
                    <div className="main-button-box">
                        <Link to={"/notice/write"}>
                            <button className="main-button" onClick={noticeClick}>공지사항 작성</button>
                        </Link>
                    </div>
                </table>
            </div >
        </div>
    )
}

export default NoticeList;