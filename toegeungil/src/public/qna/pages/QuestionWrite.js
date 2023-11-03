import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../component/AnswerWrite.css";
import jwt_decode from "jwt-decode";

const QuestionWrite = () => {
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionContent, setQuestionContent] = useState('');
    const [user, setUser] = useState("");
    useEffect(() => {

        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")));
        }
    }, [])



    const handleTitleChange = (e) => {
        setQuestionTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setQuestionContent(e.target.value);
    }
    const cancelClick = () => {
        alert("문의사항 작성이 취소 되었습니다.");
    }
    const writeClick = () => {
        fetch(process.env.REACT_APP_URL + `/question/regist`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Authorization": sessionStorage.getItem("Authorizaton")
                }, body: JSON.stringify({
                    "questionTitle": questionTitle,
                    "questionContent": questionContent,
                    "userNo": user.no,
                    "questionNick": user.nickName

                }),
            }).then(response => {
                if (response.ok) {
                    alert("문의사항이 등록 되었습니다.")
                } else {
                    alert("문의사항 등록에 실패했습니다.")
                }
            }).catch(error => {
                console.log("문의사항 등록 중 오류 발생 : ", error);
                alert("문의사항 등록 중 오류 발생");
            })
    }
    return (
        <div className='layout'>
            <div className="wrapper" >
                <h1 className="write-header">문의사항 작성</h1>
                <div className="write-wrapper textarea">
                    <div className="write-col1">
                        <label className="write-content">문의 제목</label>
                        <div className="write-text1 textarea">
                            <input className="text-box"
                                type="text"
                                value={questionTitle}
                                onChange={handleTitleChange}
                            />
                        </div>
                    </div>
                    <div className="write-col2 flexsty">
                        <label className="write-content">문의 내용</label>
                        <div className="write-text2 textarea">
                            <textarea className="text-box2"
                                value={questionContent}
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
        </div>
    )
}

export default QuestionWrite;