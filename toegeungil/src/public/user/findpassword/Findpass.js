// /*비번찾기*/
import React, { useState } from "react";
import {json, useNavigate} from 'react-router-dom';
import './Findpass.css';

import name_icon from '../imgs/name.png';
import id_icon from '../imgs/id.png'; 
import email_icon from '../imgs/001.png';

const Findpass =()=>{

    const [action, setAction] = useState("Findpass");
    
    const [login, setFindpass] = useState({
        name : "",
        id : "",
        email: ""
    });
    
    const navigate = useNavigate();
    
    const onClickHandler = () =>{
        navigate(`/signup`);
        
    }

    // const onChange= (e) =>{
    //     setLogin({...login,
    //         [e.target.name] : e.target.value
    //     })
    //     console.log(Findpass);
    // } 

    // const loginApi = () =>{
    //     fetch(url,{
    //         method: 'post',
    //         headers : 'application/json',
    //         body : JSON.stringify(Findpass)
    //     });
    // }

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
                    <input type="text" placeholder="Name" name="name" />
                </div>
                <div className="input">
                    <img src={id_icon} alt="" />
                    <input type="email" placeholder="ID"  name="id" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="text" placeholder="Email" name="email" /*onChange={onChange}*//>
                    
                </div>
            
                    
                
                <div className="submit-container">
                <div className={action === "Login"?"submit gray":"submit"} onClick={onClickHandler}>이전</div>
                    <div className={action === "SignUp"?"submit gray":"submit"} onClick={()=>{setAction("findPass")}}>비밀번호찾기</div>

                </div>
            </div>
            
        
            </>
        );
        
};




export default Findpass;