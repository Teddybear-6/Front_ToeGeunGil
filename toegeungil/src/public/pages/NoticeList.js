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

    const goView = (noticeNum) => {
        window.location.href = `/notice/${noticeNum}`;
    }

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
                            <tr key={notice.noticeNum} onClick={() => goView(notice.noticeNum)}>
                                <td>{notice.noticeNum}</td>
                                <td>{notice.noticeContent}</td>
                                <td>{notice.noticeDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default NoticeList;

