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
        console.log(noticeTitle);
        fetch(process.env.REACT_APP_URL + `/notices`,
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
        <div className='layout'>
            <div className="wrapper" >
                <h1 className="write-header">공지사항 작성</h1>
                <div className="write-wrapper textarea">
                    <div className="write-col1">
                        <label>공지 제목</label>
                        <div className="write-text1 textarea">
                            <input className="text-box"
                                type="text"
                                value={noticeTitle}
                                onChange={handleTitleChange}
                            />
                        </div>
                    </div>
                    <div className="write-col2 flexsty">
                        <label className="write-content">공지 내용</label>
                        <div className="write-text2 textarea">
                            <textarea className="text-box2"
                                value={noticeContent}
                                onChange={handleContentChange}
                            />
                        </div>
                    </div>
                </div>
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
    )
}

export default NoticeWrite;