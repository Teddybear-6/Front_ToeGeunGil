import "../component/QuestionMain.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export const QuestionMain = () => {
  const [questions, setQuestions] = useState([{}]);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL+`/question/list`)
      .then((r) => r.json())
      .then((data) => setQuestions(data));
    console.log(questions);
  }, []);

  return (
    <>
      {/* Question Admin Main페이지 */}

      <div className="layout">
     
          <table className="table-wrapper">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>답변상태</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(questions[0]) <= 0
                ? console.log("dfdfdf")
                : questions.map((q, index) => {
                    return (
                      <tr key={q.questionNum}>
                        <td>{q.questionNum}</td>
                        <td>
                          <Link to={`/service/qna/${q.questionNum}`} style={{textDecoration:"none", color:"#87746B"}} 
                          className="title-link">{q.questionTitle} </Link>
                        </td>
                        <td>{q.questionStatus}</td>
                        <td>{q.questionNick}</td>
                        <td>{q.questionDate}</td>
                      </tr>
                    );
                  })}
            </tbody>
            
          </table>
        </div>
      
    </>
  );
};
export default QuestionMain;