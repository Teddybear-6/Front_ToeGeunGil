import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../components/NoticeWrite.css";

const NoticeWrite = () => {
    const { noticeNum } = useParams();
    const [title, setTitle] = useState(''); // 공지 제목
    const [content, setContent] = useState(''); // 공지 내용

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    console.log(title);

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const writeClick = () => {
        alert("공지사항이 등록 되었습니다");
    }

    const cancelClick = () => {
        alert("공지사항이 등록이 취소 되었습니다");
    }

    console.log(content);


    return (
        <div>
            <h1 className="write-header">공지사항 작성</h1>
            <div className="write-wrapper">
                <div className="write-col1">
                    <label className="write-title">공지 제목</label>
                    <input className="write-text1"
                        type="text"
                        // value={noticeTitle}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="write-col2">
                    <label className="write-content">공지 내용</label>
                    <textarea className="write-text2"
                        // value={noticeContent}
                        onChange={handleContentChange}
                    />
                </div>
            </div>
            <Link to="/notice">
                <button className="write-button" onClick={writeClick}>등록</button>
            </Link>
            <Link to="/notice">
                <button className="cancel-button" onClick={cancelClick}>취소</button>
            </Link>
        </div>
    )
}



export default NoticeWrite;
