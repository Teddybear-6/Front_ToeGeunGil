import React, { useState, useEffect } from "react";
import '../components/NoticeMain.css';
import { Link } from "react-router-dom";

const NoticeList = () => {
    const [list, setList] = useState([]);

    const getList = () => {
        fetch("http://localhost:8001/notices")
            .then(response => response.json())
            .then(data => setList(data))
    }

    useEffect(
        () => {
            getList();
        }, [])

    return (
        <div>
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
                                        style={{ textDecoration: "none", color: "#87746B"}} className="title-link">{notice.noticeTitle}</Link>
                                </td>
                                <td>{notice.noticeDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* 관리자일 경우 */}
            {/* <div className="main-button-box" >
                <Link to="/notice">
                    <button className="main-button">게시글 작성 버튼</button>
                </Link>
            </div> */}
        </div >
    )
}

export default NoticeList;

