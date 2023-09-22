import React, { useState, useEffect } from "react";
import '../components/NoticeMain.css';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const NoticeList = () => {
    const [user, setUser] = useState('');
    const [list, setList] = useState([]);


    const getList = () => {
        fetch(process.env.REACT_APP_URL + `/notices`)
            .then(response => response.json())
            .then(data => setList(data))
    }

    useEffect(() => {
        // jwt 토큰 복호화 
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        getList();
    }, [])



    const noticeClick = () => {
        alert("공지사항을 작성하시겠습니까?")
    }

    return (
        <div className='layout'>
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
                                        <Link to={`/service/notice/${notice.noticeNum}`}
                                            style={{ textDecoration: "none", color: "#87746B" }} className="title-link">{notice.noticeTitle}</Link>
                                    </td>
                                    <td>{notice.noticeDate}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    {/* 관리자일 경우 */}
                    { !user ? null : (user.auth[0] =='ADMIN') ?
                        <div className="main-button-box">
                        <Link to={"/service/notice/write"}>
                            <button className="main-button" onClick={noticeClick}>공지사항 작성</button>
                        </Link>
                    </div>
                    :null}
                </table>
            </div >
        </div>
    )
}

export default NoticeList;