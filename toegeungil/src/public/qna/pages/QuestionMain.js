import "../component/QuestionMain.css";
import Header from "../../public/layout/Header";
import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";


export const PublicRouter = () => {
  const [questions, setQuestions] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:8001/question/list")
      .then((r) => r.json())
      .then((data) => setQuestions(data));
    console.log(questions);
  }, []);

  return (
    <>
      {/* Question Admin Main페이지 */}
      <Header />
      <Navbar />

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
        {Object.keys(questions[0]) <= 0? console.log("dfdfdf")
          : questions.map((q, index) => {
              return (
                <tr>
                  <td>{q.questionNum}</td>
                  <td>{q.questionTitle}</td>
                  <td>{q.questionStatus}</td>
                  <td>{q.questionNick}</td>
                  <td>{q.questionDate}</td>
                </tr>
              );
            })}
      </tbody>
    </>
  );
};
export default PublicRouter;
