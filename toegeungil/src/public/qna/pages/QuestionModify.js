import React, { useState, useEffect } from "react";
import "../component/AnswerWrite.css";
import jwt_decode from "jwt-decode";
import { useLocation, Link } from "react-router-dom";

const QuestionModidy = ({ detail, setDetail }) => {
    const [user, setUser] = useState("");
    const questionNum = useLocation().state.questionNum;

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")));
        }
    }, [questionNum])

    console.log(questionNum)

    const modifyHandler = (e) => {
        setDetail({ ...detail, [e.target.name]: e.target.value })
    }


    const cancelClick = () => {
        alert("문의사항 작성이 취소 되었습니다.");
    }
    const writeClick = () => {


        fetch(process.env.REACT_APP_URL + `/question/update`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Authorization": sessionStorage.getItem("Authorizaton")
                }, body: JSON.stringify({
                    "questionNum": questionNum,
                    "questionTitle": detail.questionTitle,
                    "questionContent": detail.questionContent,

                }),
            }).then(response => {
                if (response.ok) {
                    alert("문의사항이 수정 되었습니다.")
                } else {
                    alert("문의사항 수정에 실패했습니다.")
                }
            }).catch(error => {
                console.log("문의사항 수정 중 오류 발생 : ", error);
                alert("문의사항 수정 중 오류 발생");
            })
    }
    return (
        <div className='layout'>
            <div className="wrapper" >
                <h1 className="write-header">문의사항 수정하기</h1>
                <div className="write-wrapper textarea">
                    <div className="write-col1">
                        <label>문의 제목</label>
                        <div className="write-text1 textarea">
                            <input className="text-box"
                                type="text"
                                name="questionTitle"
                                value={detail.questionTitle}
                                onChange={modifyHandler}
                            />
                        </div>
                    </div>
                    <div className="write-col2 flexsty">
                        <label className="write-content">문의 내용</label>
                        <div className="write-text2 textarea">
                            <textarea className="text-box2"
                                name="questionContent"
                                value={detail.questionContent}
                                onChange={modifyHandler}
                            />
                        </div>
                    </div>
                </div>
                <div className="button">
                    <Link to="/service/qna">
                        <button className="cancel-button" onClick={cancelClick}>취소</button>
                    </Link>
                    <Link to="/service/qna">
                        <button className="write-button" onClick={writeClick}>수정</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QuestionModidy;