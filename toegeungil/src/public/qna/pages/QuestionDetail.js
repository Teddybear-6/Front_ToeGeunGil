//QuestionMain에서 글 제목 클릭했을 때 content로 이동
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../component/QuestionDetail.css";
// import "../component/AnswerWrite.css";
import AnswerWrite from "./AnswerWrite";


export const QuestionDetail = () => {
  const { questionNum } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_URL + `/question/${questionNum}`)
      .then((response) => response.json())
      .then((data) => {
        setDetail(data);
        setLoading(false);
      });
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
      <div className="delSet-button">
        <Link to="/service/qna">
          <button className="delete-button" onClick={deleteClick}>
            삭제
          </button>
          <button className="update-button">수정</button>
        </Link>
      </div>

      {/*답변*/}
      <div>
        <AnswerWrite />
      </div>

      {/* <div className="user-button-box">
        <Link to="/service/answer/">
          <button className="answer-button">답변글 등록</button>
          </Link>
          <Link to="/service/qna">
            <button className="user-button">목록으로</button>
          </Link>
      
      </div> */}
    </div>
  );
};

export default QuestionDetail;
