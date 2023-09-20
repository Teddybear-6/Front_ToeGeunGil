import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import '../components/NoticeView.css';
import '../components/NoticeBanner.css';

const NoticeDelete = () => {
    const { noticeNum } = useParams();
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동을 제어

    const deleteClick = () => {
        fetch(`http://localhost:8001/notices/${noticeNum}`, {method: "DELETE"})
        .then(response=>{
            if(response.ok){
                alert("공지사항이 삭제되었습니다")
                navigate("/notice");
            }else{
                throw new Error("공지사항 삭제 실패하였습니다")
            }
        })
        .catch(error=>{
            console.error("공지사항 삭제 중 오류 발생 : ", error);
            alert("공지사항 삭제 중 오류가 발생하였습니다");
        })
    }

    return (
        <div className="wrapper" >
            <div className="customerService-banner">
                <button className="notice-button">공지사항</button>
                <button className="qna-button">문의하기</button>
                <button className="report-button">신고하기</button>
            </div>
            <h1 className="delete-header">공지사항 삭제</h1>
            <p>정말로 이 공지사항을 삭제하시겠습니까?</p>
            {/* <div className="write-wrapper textarea">
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
            </div> */}
            <div className="button">
                <Link to={`/notice/${noticeNum}/delete`}>
                    <button className="cancel-button" onClick={deleteClick}>확인</button>
                </Link>
                {/* <Link to="/notice">
                    <button className="write-button" onClick={updateClick}>등록</button>
                </Link> */}
            </div>
        </div>
    )
}

export default NoticeDelete;