/*로그인*/
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './LoginSignup.css';

import email_icon from '../imgs/001.png';
import user_icon from '../imgs/002.png';
import password_icon from '../imgs/003.png';

const LoginSignup =()=>{

    const[action, setAction] = useState("Login");
    const navigate = useNavigate();
    
    const onClickHandler = () =>{
        navigate(`/sign`);
        /*navigate location.href 새로고침이 일어나지 않음*/
    }

    return(
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
                    <input type="text" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Nickname"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                    
                </div>
                <div className="forgot-password" style={{textAlign:"center" }}>
                    Lost Password? 
                    <button style={{color:"#03532e", margin:"10px", width:"100px", height:"20px", cursor:"pointer"}}> Click Here </button>
                </div>
                    
                
                <div className="submit-container">
                    <div className={action === "Login"?"submit gray":"submit"} onClick={onClickHandler}>회원가입</div>
                    <div className={action === "SignUp"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>로그인</div>
                </div>
            </div>
            
        
            </>
        );
        
};




export default LoginSignup