// /*비번찾기*/
import React, { useState } from "react";
import { Link, json, useNavigate } from 'react-router-dom';
import email_icon from '../imgs/email.png';

import "../css/user.css"

const Findpass = () => {

    const [action, setAction] = useState("Findpass");
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/`);

        fetch(process.env.REACT_APP_URL + "/user/mailConfirm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email
            }),
        }).then(response => {
            if (response.status === 404) {
                alert("임시 비밀번호 발송에 실패했습니다. 이메일을 확인해주세요")
            } else if (response.ok) {
                alert("임시 비밀번호를 이메일로 발송했습니다.")
            }
        })
    }

    const onChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    return (
        <>
            <div className='toegeungillayout'>
                {/* Findpass */}
                <div className="userContainer">
                    <div className="userHeader">
                        <div className="userText">{action}</div>
                        <div className="userUnderline"></div>
                    </div>
                </div>
                <div className="userInputs">
                    {/* 이메일 입력 */}
                    <div className="userInput">
                        <img src={email_icon} alt="" />
                        <input type="text" placeholder="Email" name="Email" onChange={onChangeHandler} />
                    </div>
                    {/* 이전, 비밀번호찾기 버튼 */}
                    <div className="userSubmitContainer">
                        <div className={action === "findpass" ? "userSubmitOff userGray" : "userSubmitOff"} onClick={onchange}><Link to="/Signup" className="userSubmitOff">이전</Link></div>
                        <div className={action === "findpass" ? "userSubmit userGray" : "userSubmit"} onClick={onClickHandler}>비밀번호찾기</div>
                    </div>
                </div>
            </div>
        </>
    );
}










export default Findpass;