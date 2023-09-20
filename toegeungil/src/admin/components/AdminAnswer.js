import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../public/layout/Header';

import React, { useEffect, useState } from 'react';

import Nav from '../../public/qna/component/Nav';

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
        <Header/>
       
        <Nav/>

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
      

        </>
    );
}
export default AdminAnswer;
