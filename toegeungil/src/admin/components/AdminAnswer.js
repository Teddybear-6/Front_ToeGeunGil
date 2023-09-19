import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

import React, { useEffect, useState } from 'react';

//답변 게시판(멤버)

export const AdminAnswer = () => {
    const [answers, setAnswer] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:8001/answer/list")
            .then(response => response.json())
            .then(data => setAnswer(data))
        console.log(answers)
    }, [])

    return (
        <>
            <div className='container-fruid'>
                <Nav className='justify-content-center' activeKey="/home">
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
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(answers[0]) <= 0? console.log("하이") : 
                                answers.map((a, index) => { 
                                    return(
                                        <tr>
                                            <td>{a.answerNum}</td>
                                            <td>{a.answerTitle}</td>
                                            <td>{a.answerContent}</td>
                                            <td>{a.answerNick}</td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </Table>
            </div>
           

        </>
    );
}
export default AdminAnswer;
