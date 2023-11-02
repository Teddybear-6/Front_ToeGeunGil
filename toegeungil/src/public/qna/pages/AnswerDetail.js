//QuestionMain에서 글 제목 클릭했을 때 content로 이동
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../component/QuestionDetail.css";


export const AnswerDetail = ({ answer }) => {
  const { answerNum } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  //질문 상세보기 상태 



  //관리자인 경우 삭제
  const deleteClick = () => {
    fetch(process.env.REACT_APP_URL + `/answer/${answer.answerNum}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("답변이 삭제 되었습니다.");
          navigate("/service/answer");
        } else {
          throw new Error("답변 삭제 실패");
        }
      })
      .catch((error) => {
        console.error("답변 삭제 중 오류 발생 : ", error);
        alert("답변 삭제 중 오류가 발생");
      });

  }



  return (

    <div className="view-wrapper">
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
    </div>
  )

}

export default AnswerDetail;