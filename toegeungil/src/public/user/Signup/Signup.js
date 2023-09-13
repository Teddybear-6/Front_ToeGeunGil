/*회원가입*/
import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import './Signup.css';


import user_icon from '../imgs/002.png';
import password_icon from '../imgs/003.png';
import name_icon from '../imgs/name.png';
import id_icon from '../imgs/id.png';
import birth_icon from '../imgs/birth.png';
import nickname_icon from '../imgs/nick.png';
import email_icon from '../imgs/email.png';


const Signup =()=>{
    const[action, setAction] = useState("Signup");

    

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
                <img src={name_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div> 
            <div className="input">
                <img src={id_icon} alt="" />
                <input type="text" placeholder="ID" />
            </div> 
            <div className="input">
                <img src={nickname_icon} alt="" />
                <input type="text" placeholder="Nickname" />
            </div> 
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="text" placeholder="password" />
            </div> 
            <div className="input">
                <img src={birth_icon} alt="" />
                <input type="text" placeholder="Birth" />
            </div> 
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="text" placeholder="Email" />
            </div> 

            <div className="submit-container">
            <div className={action === "Signup"?"submit gray":"submit"} onClick={()=>{setAction("Signup")}}>이전</div>
            <div className={action === "Back"?"submit gray":"submit"} onClick={()=>{setAction("Back")}}>회원가입</div>
                
            </div>
            





        </div>
        </>
    );
};

export default Signup