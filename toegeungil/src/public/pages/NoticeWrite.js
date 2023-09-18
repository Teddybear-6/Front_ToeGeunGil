import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/NoticeWrite.css";

const NoticeWrite = () => {
    const [noticeTitle, setNoticeTitle] = useState(''); // 공지 제목
    const [noticeContent, setNoticeContent] = useState(''); // 공지 내용

    const handleTitleChange = (e) => {
        setNoticeTitle(e.target.value);
    }
    console.log(noticeTitle);

    const handleContentChange = (e) => {
        setNoticeContent(e.target.value);
    }
    console.log(noticeContent);

    const cancelClick = () => {
        alert("공지사항 작성이 취소 되었습니다");
    }

    const writeClick = () => {
        fetch(`http://localhost:8001/notices`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    "noticeTitle": noticeTitle,
                    "noticeContent": noticeContent,
                }),
            })
            .then(response => {
                if (response.ok) {
                    alert("공지사항이 등록 되었습니다");
                    console.log("너야너")

                } else {
                    alert("공지사항 등록에 실패했습니다");
                }
            })
            .catch(error => {
                console.error("공지사항 등록 중 오류 발생 : ", error);
                alert("공지사항 등록 중 오류 발생했습니다");
            })
    }

    return (
        <div className="wrapper" >
            <h1 className="write-header">공지사항 작성</h1>
            <div className="write-wrapper">
                <div className="write-col1">
                    <label className="write-title">공지 제목</label>
                    <input className="write-text1"
                        type="text"
                        value={noticeTitle}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="write-col2">
                    <label className="write-content">공지 내용</label>
                    <textarea className="write-text2"
                        value={noticeContent}
                        onChange={handleContentChange}
                    />
                    <div className="button">
                        <Link to="/notice">
                            <button className="cancel-button" onClick={cancelClick}>취소</button>
                        </Link>
                        <Link to="/notice">
                            <button className="write-button" onClick={writeClick}>등록</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeWrite;
