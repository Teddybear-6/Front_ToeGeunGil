//QuestionMain에서 글 제목 클릭했을 때 content로 이동
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../component/QuestionDetail.css";
// import "../component/AnswerWrite.css";
import jwt_decode from "jwt-decode";

export const QuestionDetail = () => {
  const { questionNum } = useParams();
  const [detail, setDetail] = useState({});
  const [answer, setAnswer] = useState(null);
  const [answerTitle, setAnswerTitle] = useState("");
  const [answerContext, setAnswerContext] = useState(""); //답변글
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {

    fetch(process.env.REACT_APP_URL + `/question/${questionNum}`)
      .then((response) => response.json())
      .then((data) => {
        setDetail(data);
        setLoading(false);
      });


    fetch(process.env.REACT_APP_URL + `/answer/que/${questionNum}`)
      .then((response) => response.json())
      .then((data) => { setAnswer(data['value']) });


    if (sessionStorage.getItem("Authorizaton")) {
      setUser(jwt_decode(sessionStorage.getItem("Authorizaton")));
    }
  }, [questionNum]);


  //관리자인 경우 삭제
  const deleteClick = () => {
    fetch(process.env.REACT_APP_URL + `/question/${questionNum}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("문의가 삭제 되었습니다.");
          navigate("/service/qna");
        } else {
          throw new Error("문의 삭제 실패");
        }
      })
      .catch((error) => {
        console.error("문의 삭제 중 오류 발생 : ", error);
        alert("문의 삭제 중 오류가 발생");
      });

  }


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
    <div className="view-wrapper">
      {loading ? (
        "로딩 중"
      ) : detail ? (
        <>
          {/*질문글 제목 */}
          <div></div>
          <div className="view-name">
            <label>{detail.questionTitle}</label>
          </div>
          <div className="view-nick">
            <label>작성자 : {detail.questionNick}</label>
          </div>

          {/*질문글 내용 */}
          <div className="view-text-box">
            <div className="view-text">
              <label>{detail.questionContent}</label>
            </div>
          </div>
        </>
      ) : (
        "문의글이 없습니다."
      )}

      {/*삭제,수정 버튼*/}
      {((user === undefined) && (user === null)) ? null :
        !(user?.no == detail.userNo) ? null :
          <div className="delSet-button">
            <Link to="/service/qna">
              <button className="delete-button" onClick={deleteClick}>
                삭제
              </button>
            </Link>
            <Link to="/service/qna/modify" state={{ "questionNum": questionNum }}>
              <button className="update-button">수정</button>
            </Link>
          </div>
      }


      {/*답변*/}
      {
        ((user && (answer === null)) && (user?.auth[0] === "ADMIN")) ?
          (<div className="wrapper" >
            <h1 className="write-header1">답변 작성</h1>
            <div className="write-wrapper textarea">
              <div className="write-col1">
                <label>답변 제목</label>
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
          </div>)
          : null
      }
      {answer && <>
        {/*답변글 제목 */}
        <div className="view-name">
          <label>답변 제목 : {answer.answerTitle}</label>
        </div>
        <div className="view-nick">
          <label>작성자 : {answer.answerNick}</label>
        </div>

        {/*답변글 내용 */}
        <div className="view-text-box">
          <div className="view-text">
            <label>{answer.answerContent}</label>
          </div>

        </div>
      </>}
      <div className="user-button-box">
        <Link to="/service/qna">
          <button className="user-button">목록으로</button>
        </Link>

      </div>
    </div>
  );
};

export default QuestionDetail;