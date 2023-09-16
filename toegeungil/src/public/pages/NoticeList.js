import React, { useState, useEffect } from "react";
import '../components/NoticeTable.css';
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
        }
    )

    return (
        <div>
            <table className="notice-wrapper">
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
                            <tr className="notice-box" key={notice.noticeNum}>
                                <Link to={`/notice/${notice.noticeNum}`}>
                                    <td className="notice-number">{notice.noticeNum}</td>
                                    <td className="notice-number">{notice.noticeContent}</td>
                                    <td className="notice-number">{notice.noticeDate}</td>
                                </Link>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default NoticeList;

