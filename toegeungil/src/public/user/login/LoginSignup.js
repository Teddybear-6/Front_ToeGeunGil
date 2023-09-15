/*로그인*/
import React, { useState } from "react";
import { json, useNavigate } from 'react-router-dom'
import './LoginSignup.css';
// import Findpass from "../findpassword/Findpass";

import email_icon from '../imgs/001.png';
// import user_icon from '../imgs/002.png'; //닉네임아이콘
import password_icon from '../imgs/003.png';

const LoginSignup = () => {

    const [action, setAction] = useState("Login");
    const [login, setLogin] = useState({
        login: "",
        pass: ""
    });

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/sign`);
        /*navigate location.href 새로고침이 일어나지 않음*/
    }

    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log(login);
    }

    const loginApi = () => {
        fetch(`http://localhost3000:/loginsignup`, {
            method: 'post',
            headers: 'application/json',
            body: JSON.stringify(login)
        
        }).then(response => response.headers.get("authorization"))
            .then(response => {
                sessionStorage.setItem("Authorizaton", response)
            }).catch(() => {
                console.log("아이디 비번 확인해주세요")
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
                    <img src={email_icon} alt="" />
                    <input type="text" placeholder="Email" name="login" onChange={onChange} />
                </div>
                {/* <div className="input"> //닉네임 인풋박스비활성
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Nickname"/>
                </div> */}
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" name="pass" onChange={onChange} />

                </div>
                <div className="forgot-password" style={{ textAlign: "center" }}>
                    Lost Password?
                    <button style={{ color: "#03532e", margin: "10px", width: "100px", height: "20px", cursor: "pointer" }}> Click Here </button>
                </div>


                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={onClickHandler}>회원가입</div>
                    {/* <div button="button"  className ='submit-containe' href='LoginSiginup' onClick={onClickHandler}>회원가입</div> */}
                    <div className={action === "SignUp" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>로그인</div>

                </div>
            </div>


        </>
    )

};




export default LoginSignup