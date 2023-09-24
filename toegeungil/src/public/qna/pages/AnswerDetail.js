//QuestionMain에서 글 제목 클릭했을 때 content로 이동
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../component/QuestionDetail.css";


export const AnswerDetail = () => {
  const { answerNum } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  //질문 상세보기 상태 
  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_URL + `/answer/${answerNum}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setDetail(data);
        setLoading(false);
      });


  }, [answerNum]);


  //관리자인 경우 삭제
  const deleteClick = () => {
    fetch(process.env.REACT_APP_URL + `/answer/${answerNum}`, {
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
      {loading ? (
        "로딩 중"
      ) : detail ? (
        <>
          {/*답변글 제목 */}
          <div className="view-name">
            <label>글제목 : {detail.answerTitle}</label>
          </div>
          <div className="view-nick">
            <label>작성자 : {detail.answerNick}</label>
          </div>

          {/*답변글 내용 */}
          <div className="view-text-box">
            <div className="view-text">
              <label>{detail.answerContent}</label>
            </div>

          </div>
        </>
      ) : ("문의글이 없습니다.")}


      <div className="user-button-box">
        <Link to="/service/answer">
          <button className="user-button">목록으로</button>
          <Link to="/servoce/answer">
            <button className="user-button" onClick={deleteClick}>삭제</button>
          </Link>
        </Link>
      </div>

    </div>
  )



}

export default AnswerDetail;