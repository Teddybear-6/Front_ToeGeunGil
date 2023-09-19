import  'QnaMain.css';
import React, { useEffect, useState } from 'react';

//question (관리자)게시판 

export const AdminRouter = () => {
  const [questions, setQuestions] = useState([{}]);


  useEffect(() => {
    fetch("http://localhost:8001/question/list")
      .then(r => r.json())
      .then(data => setQuestions(data))
    console.log(questions)
  }, [])

  return (


    <div className="notice-wrapper">
      <div className="customerService-banner">
        <button className="notice-button">공지사항</button>
        <button className="qna-button">문의하기</button>
        <button className="report-button">신고하기</button>
      </div>
      <table className="table-wrapper">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>답변상태</th>
          </tr>
        </thead>

        <tbody>

          {
            Object.keys(questions[0]) <= 0 ? console.log('dfdfdf') :
              questions.map((q, index) => {
                <tr>
                  <td>{q.questionNum}</td>
                  <td>{q.questionTitle}</td>
                  <td>{q.questionNick}</td>
                  <td>{q.questionDate}</td>
                  <td>{q.questionStatus}</td>
                </tr>
              
          },[])
          };

        </tbody>            {/* 관리자일 경우 */}
        {/* <Link to={"/question/write"}>
          <button className="main-button" onClick={noticeClick}>공지사항 작성</button>
        </Link> */}

      </table>
    </div>

  )
}
export default AdminRouter;



