/*로그인*/
import React, { useState } from "react";
import { Link, json, useNavigate } from 'react-router-dom';
// import './LoginSignup.css';
import './Login.css';
// import Findpass from "../findpassword/Findpass";

import email_icon from '../imgs/001.png';
// import user_icon from '../imgs/002.png'; //닉네임아이콘
import password_icon from '../imgs/003.png';

const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    const [userEmail, setUserEmail] = useState("testUser12@gmail.com");
    const [userPassword, setUserPassword] = useState("jhs123");

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/signup`);
        /*navigate location.href 새로고침이 일어나지 않음*/
    }

    const loginApi = () => {

        console.log("로그인 요청")
        fetch(process.env.REACT_APP_URL+ "/login", {
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
            console.log("no")
            alert("로그인 성공")
            return response.headers.get("authorization")
        })
            .then(response => {
                sessionStorage.setItem("Authorizaton", response)
                navigate("/Mypage")
            }).catch((e) => {
                alert("아이디 비번 확인해주세요")
                navigate("/Findpass")
            })
            .then(response=> {
                
            })
    }
    const onClickLogoutHandler = () => {
        sessionStorage.removeItem("Authorizaton");
    }
    
    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="setUserEmail" />
                    <input type="text" placeholder="Email" name="login" onChange={e => setUserEmail(e.target.value)} />
                </div>

                <div className="input">
                    <img src={password_icon} alt="setUserPassword" />
                    <input type="password" placeholder="Password" name="pass" onChange={e => setUserPassword(e.target.value)} />

                </div>
                <div className="forgot-password" style={{ textAlign: "center" }}>
                    Lost Password?
                    <Link to="/findpass">
                    <button style={{ color: "#03532e", margin: "10px", width: "100px", height: "20px", cursor: "pointer" }}> Click Here </button>
                    </Link>
                </div>


                <div className="submit-container">
                    
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={onClickHandler}>회원가입</div>
                    <div className={action === "Signup" ? "submit gray" : "submit"} onClick={loginApi}>로그인</div>
                    {/* <div className={action === "Logout" ? "submit gray" : "submit"} onClick={loginApi}>로그아웃</div> */}

                </div>
            </div>


        </>
    )

};




export default LoginSignup;