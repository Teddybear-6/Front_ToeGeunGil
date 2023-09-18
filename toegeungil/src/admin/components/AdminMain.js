
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './AdminMain.css';

import React, { useEffect, useState } from 'react';




export const AdminRouter = () => {
  const [questions, setQuestions] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8001/question/list")
      .then(r => r.json())
      .then(data => setQuestions(data))
    console.log(questions)
  }, [])


  return (
    
    <div className='container-fruid'>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">공지사항</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">문의하기</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">신고하기</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">질문게시판</p>

    
        <Table striped bordered hover variant="primary">
       
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

            {
              Object.keys(questions[0]) <= 0 ? console.log('dfdfdf') :
                questions.map((q, index) => {

                  return (
                    <tr>
                      <td>{q.questionNum}</td>
                      <td>{q.questionTitle}</td>
                      <td>{q.questionStatus}</td>
                      <td>{q.questionNick}</td>
                      <td>{q.questionDate}</td>
                    </tr>
                  );
                })
            }
          </tbody>
     
        </Table>
        </div>
 
  
   
  );
}
export default AdminRouter;



