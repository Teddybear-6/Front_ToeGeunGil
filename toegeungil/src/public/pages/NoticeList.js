import React, { useState, useEffect } from "react";
import '../components/NoticeMain.css';

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

    const goMain = (noticeNum) => {
        window.location.href = `/notice/${noticeNum}`;
    }

    return (
        <div>
            <table className="notice-wrapper">
                <thead>
                    <tr>
                        <th className="notice-header">번호</th>
                        <th className="notice-header">제목</th>
                        <th className="notice-header">작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((notice) => (
                            <tr className="notice-box" key={notice.noticeNum} onClick={() => goMain(notice.noticeNum)}>
                                <td className="notice-content">{notice.noticeNum}</td>
                                <td className="notice-content">{notice.noticeContent}</td>
                                <td className="notice-content">{notice.noticeDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default NoticeList;

