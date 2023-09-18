import React, { useState, useEffect } from "react";
import '../components/NoticeMain.css';
import { Link, useNavigate } from "react-router-dom";

const NoticeList = () => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    // const [admin, setAdmin] = useState(false); // 관리자 여부 상태

    const getList = () => {
        fetch("http://localhost:8001/notices")
            .then(response => response.json())
            .then(data => setList(data))
    }

    useEffect(
        () => {
            getList();
        }, [])

        // const goWrite=()=>{
        //     navigate("/notice/write")
        // }

        const noticeClick=()=>{
            alert("공지사항을 작성하시겠습니까?")
        }

    return (
        <div className="notice-wrapper">
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
                {/* 관리자일 경우 */}
                <Link to={"/notice/write"}>
                    <button className="main-button" onClick={noticeClick}>공지사항 작성</button>
                </Link>
            </table>

        </div >
    )
}

export default NoticeList;

