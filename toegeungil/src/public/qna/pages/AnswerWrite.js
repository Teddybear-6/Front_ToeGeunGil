import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
function AnswerWrite({ user, questionNum }) {

    const [answerTitle, setAnswerTitle] = useState("");
    const [answerContext, setAnswerContext] = useState(""); //답변글


    const handleTitleChange = (e) => {
        setAnswerTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setAnswerContext(e.target.value);
    }

    const cancelClick = () => {
        alert("답변 작성이 취소 되었습니다");
    }

    const writeClick = () => {
        fetch(process.env.REACT_APP_URL + `/answer/regist`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Authorization": sessionStorage.getItem("Authorizaton")
                },
                body: JSON.stringify({
                    "answerTitle": answerTitle,
                    "answerContent": answerContext,
                    "questionNum": questionNum,
                    "userNo": user.no,
                    "answerNick": user.nickName

                })
            })
            .then(response => {
                if (response.ok) {
                    alert("답변이 등록 되었습니다");
                } else {
                    alert("답변 등록에 실패했습니다");
                }
            })
            .catch(error => {
                console.error("답변 등록 중 오류 발생 : ", error);
                alert("답변 등록 중 오류 발생했습니다");
            })
    }

    return (
        <div className="wrapper" >
            <h1 className="write-header1">답변 작성</h1>
            <div className="write-wrapper textarea">
                <div className="write-col1">
                    <label className="write-content">답변 제목</label>
                    <div className="write-text1 textarea">
                        <input className="text-box"
                            type="text"
                            value={answerTitle}
                            onChange={handleTitleChange}
                        />
                    </div>
                </div>
                <div className="write-col2 flexsty">
                    <label className="write-content">답변 내용</label>
                    <div className="write-text2 textarea">
                        <textarea className="text-box2"
                            value={answerContext}
                            onChange={handleContentChange}
                        />
                    </div>
                </div>
            </div>
            <div className="button">
                <Link to="/service/qna">
                    <button className="cancel-button" onClick={cancelClick}>취소</button>
                </Link>
                <Link to="/service/qna">
                    <button className="write-button" onClick={writeClick}>등록</button>
                </Link>
            </div>
        </div>
    )
}


export default AnswerWrite;