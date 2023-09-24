import "../component/QuestionMain.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../component/AnswerWrite.css";

export const AnswerMain = () => {
  const [answer, setAnswer] = useState([{}]);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL + `/answer/list`)
      .then((r) => r.json())
      .then((data) => setAnswer(data));
    console.log(answer);
  }, []);

  return (
    <>
      {/* Question Admin Main페이지 */}

      <div className="layout">
        <div className="notice-wrapper">
          <table className="table-wrapper">
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성일</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(answer[0]) <= 0
                ? console.log("답변")
                : answer.map((a, index) => {
                    return (
                      <tr key={a.answerNum}>
                        <td>{a.answerNum}</td>
                        <td>
                          <Link
                            to={`/service/answer/${a.answerNum}`}
                            style={{ textDecoration: "none", color: "#87746B" }}
                            className="title-link"
                          >
                            {a.answerTitle}{" "}
                          </Link>
                        </td>
                        {/* <td>{a.answerNick}</td> */}
                        <td>{a.answerDate}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
        <div className="user-button-box">
          <Link to="/service/answer/write">
            <button className="user-button">글쓰기</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AnswerMain;