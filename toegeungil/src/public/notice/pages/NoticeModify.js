import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "../components/NoticeWrite.css";

const NoticeModify = () => {
    const { noticeNum } = useParams(); // url에서 noticeNum 가져오기
    const [notice, setNotice] = useState({});
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        fetch(process.env.REACT_APP_URL + `/notices/${noticeNum}`)
            .then(response => response.json())
            .then(data => {
                setNotice(data);
                setTitle(data.noticeTitle);
                setContent(data.noticeContent);
            })
    }, [noticeNum])

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const cancelClick = () => {
        alert("공지사항 작성이 취소 되었습니다");
    }

    const updateClick = () => {

        fetch(process.env.REACT_APP_URL + `/notices/${noticeNum}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": sessionStorage.getItem("Authorizaton")
            },
            body: JSON.stringify({
                "noticeTitle": title,
                "noticeContent": content,
            }),
        })
            .then(response => {
                if (response.ok) {
                    alert("공지사항이 수정되었습니다");
                    navigate("/service/notice"); // 수정 완료 후 공지사항 목록 페이지로 이동
                } else {
                    throw new Error("공지사항 수정에 실패하였습니다");
                }
            })
            .catch(error => {
                console.error("공지사항 수정 중 오류 발생 :", error);
                alert("공지사항 수정 중 오류가 발생하였습니다");
            })
    }
    return (
        <div className='layout'>
            <div className="wrapper" >
                <h1 className="write-header">공지사항 수정</h1>
                {user && user.auth[0] === 'ADMIN' ? (
                    <div className="write-wrapper textarea">
                        <div className="write-col1">
                            <label>공지 제목</label>
                            <div className="write-text1 textarea">
                                <input className="text-box"
                                    type="text"
                                    defaultValue={notice.noticeTitle}
                                    onChange={handleTitleChange}
                                />
                            </div>
                        </div>
                        <div className="write-col2 flexsty">
                            <label className="write-content">공지 내용</label>
                            <div className="write-text2 textarea">
                                <textarea className="text-box2"
                                    defaultValue={notice.noticeContent}
                                    onChange={handleContentChange}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>관리자가 아닙니다 공지사항 수정 권한이 없습니다</p>
                )}
                {!user ? null : (user.auth[0] == 'ADMIN') ?
                    <div className="button">
                        <Link to="/service/notice">
                            <button className="cancel-button" onClick={cancelClick}>취소</button>
                        </Link>
                        <Link to="/service/notice">
                            <button className="write-button" onClick={updateClick}>등록</button>
                        </Link>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default NoticeModify;