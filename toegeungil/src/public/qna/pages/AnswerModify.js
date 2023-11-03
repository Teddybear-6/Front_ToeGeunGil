import React, { useEffect, useState } from "react";


function AnswerModify({ answer, setAnswerModify, setAnswer }) {
    const [modifyAnswer, setModifyAnswer] = useState(answer);

    useEffect(() => {
    }, [answer, setAnswerModify])

    const modifyHandler = (e) => {
        setModifyAnswer({ ...modifyAnswer, [e.target.name]: e.target.value })
    }

    const cancelClick = () => {
        alert("답변 수정이 취소 되었습니다.");
        setAnswerModify(false);
    }
    const writeClick = () => {

        fetch(process.env.REACT_APP_URL + `/answer/update`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Authorization": sessionStorage.getItem("Authorizaton")
                },
                body: JSON.stringify(
                    modifyAnswer
                ),
            }).then(response => {
                if (response.ok) {
                    alert("문의사항이 수정 되었습니다.")
                    setAnswerModify(false);
                    setAnswer(modifyAnswer)
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
                <h1 className="write-header">답변 수정하기</h1>
                <div className="write-wrapper textarea">
                    <div className="write-col1">
                        <label>답변 제목</label>
                        <div className="write-text1 textarea">
                            <input className="text-box"
                                type="text"
                                name="answerTitle"
                                value={modifyAnswer.answerTitle}
                                onChange={modifyHandler}
                            />
                        </div>
                    </div>
                    <div className="write-col2 flexsty">
                        <label className="write-content">답변 내용</label>
                        <div className="write-text2 textarea">
                            <textarea className="text-box2"
                                name="answerContent"
                                value={modifyAnswer.answerContent}
                                onChange={modifyHandler}
                            />
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button className="cancel-button" onClick={cancelClick}>취소</button>
                    <button className="write-button" onClick={writeClick}>수정</button>
                </div>
            </div>
        </div>
    )
}

export default AnswerModify;