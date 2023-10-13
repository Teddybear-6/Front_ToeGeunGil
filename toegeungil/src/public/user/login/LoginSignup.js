/*로그인*/
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import email_icon from '../imgs/email.png';
import password_icon from '../imgs/pass.png';

const LoginSignup = ({ setLogin }) => {
    const [action, setAction] = useState("Login");
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/signup`);
        /*navigate location.href 새로고침이 일어나지 않음*/
    }

    const loginApi = () => {

        console.log("로그인 요청")
        fetch(process.env.REACT_APP_URL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "applcation/json"
            },
            body: JSON.stringify({
                userId: userEmail,
                userPass: userPassword,
            }),
        }).then(response => {
            console.log(response.status)
            if (!response.ok) {
                throw new Error('400 or 500 에러발생')
            }
            alert("로그인 성공")
            return response.headers.get("authorization")
        })
            .then(response => {
                sessionStorage.setItem("Authorizaton", response)
                setLogin(true)
                navigate("/Mypage")
            }).catch((e) => {
                alert("아이디 비번 확인해주세요")
                navigate("/Findpass")
            })
            .then(response => {

            })
    }

    const onClickLogoutHandler = () => {
        sessionStorage.removeItem("Authorizaton");
    }

    return (
        <>
            <div className='toegeungillayout'>
                {/* login */}
                <div className="userContainer">
                    <div className="userHeader">
                        <div className="userText">{action}</div>
                        <div className="userUnderline"></div>
                    </div>
                </div>
                <div className="userInputs">
                    {/* email 입력 */}
                    <div className="userInput">
                        <img src={email_icon} alt="setUserEmail" />
                        <input type="text" placeholder="Email" name="login" onChange={e => setUserEmail(e.target.value)} />
                    </div>
                    {/* password 입력 */}
                    <div className="userInput">
                        <img src={password_icon} alt="setUserPassword" />
                        <input type="password" placeholder="Password" name="pass" onChange={e => setUserPassword(e.target.value)} />
                    </div>
                    {/* 비밀번호 찾기 */}
                    <div className="userForgotPassword" style={{ textAlign: "center" }}>
                        Lost Password?
                        <Link to="/findpass">
                            <button className="userForgotPasswordButton"> Click Here </button>
                        </Link>
                    </div>
                    {/* 회원가입, 로그인 */}
                    <div className="userSubmitContainer">
                        <div className={action === "Login" ? "userSubmit userGray" : "userSubmit"} onClick={onClickHandler}>회원가입</div>
                        <div className={action === "Signup" ? "userSubmit userGray" : "userSubmit"} onClick={loginApi}>로그인</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LoginSignup;