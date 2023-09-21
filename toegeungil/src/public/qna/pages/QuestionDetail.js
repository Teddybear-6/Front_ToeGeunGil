//QuestionMain에서 글 제목 클릭했을 때 content로 이동
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../component/QuestionDetail.css";


export const QuestionDetail = () => {
  const { questionNum } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_URL + `/question/${questionNum}`)
      .then((response) => response.json())
      .then((data) => {
        setDetail(data);
        setLoading(false);
      });
  }, [questionNum]);



  return (
 
    <div className="view-wrapper">
      <div className="customerService-banner">
        <button className="notice-button">공지사항</button>
        <button className="qna-button" >문의하기</button>
        <button className="report-button">신고하기</button>
      </div>
      {loading ? (
        "로딩 중"
      ) : detail ? (
        <>
            {/*질문글 제목 */}
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
      ) : ( "문의글이 없습니다." )}
      <div className="view-answer">
      <label>답변</label>
            <textarea className="answer-box" placeholder="답변을 입력하세요">

            </textarea>
            </div>
          

            <div className="user-button-box">
            <Link to="/qna">
              <button className="user-button">목록으로</button>
            </Link>
          </div>
        
    </div>
 
    
   
   
  )

  
}

export default QuestionDetail;
