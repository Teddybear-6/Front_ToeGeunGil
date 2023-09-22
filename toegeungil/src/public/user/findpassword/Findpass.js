// /*비번찾기*/
import React, { useState } from "react";
import { Link, json, useNavigate } from 'react-router-dom';
import './Findpass.css';

import name_icon from '../imgs/name.png';
import nickname_icon from '../imgs/nick.png';
import id_icon from '../imgs/id.png';
import email_icon from '../imgs/001.png';

const Findpass = () => {

    const [action, setAction] = useState("Findpass");

    const [login, setFindpass] = useState({
        Name: "",
        nickName: "",
        Email: ""
    });

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/`);
    }


    fetch(process.env.REACT_APP_URL + "/user/userNo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userName": login.Name,
            "nickName": login.nickName,
            "userEmail": login.Email
        }),
    }).then(res => res.json())
        .then(date => console.log(date));


// const sendEmail=()=>{ 

//     const sendEmail=document.getElementById("sendemail");
//     sendEmail.addEventListener('click', function(){
//         const xhr,url ='/sendEmailLogin', Data='email='+document.getElementById('email').value;
//         xhr=doajax(url, data);
//         xhr.onload=function(){
//             const text;
//             if(xhr.status==200){
//                 if(xhr.response=='true'){
//                     text="인증번호를 전송했습니다";
//                     document.getElementById('confrimrandnum').disabled=false;
//                 }else{
//                     text="인증번호 전송에 실패했습니다"
//                 }
//                 alert(text);
//             }
//         }
//     })
//     const confrimrandnum=document.getElementById("confrimrandnum");
//     confrimrandnum.addEventListener('click',function(){
//         const xhr, url='/sendEmailLogin', Data='email='+document.getElementById('email').value 
//         + '&randnum=' + document.getElementById('randnum').value;
//         xhr-doajax(url, data);
//         xhr.onload=function(){
//             if(xhr.status==200){
//                 if(xhr.response=='true'){
//                     alert('임시비밀번호전송');
//                     location.href="/auth/loginsingup";
//                 }else{
//                     alert("번호를 다시 확인해 주세요")
//                 }
//             }
//         }
//     })
// }  


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
                    
                    <img src={name_icon} alt="" />
                    <input type="text" placeholder="Name" name="Name" />
                </div>
                <div className="input">
                    <img src={nickname_icon} alt="" />
                    <input type="text" placeholder="nickName" name="nickName" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="text" placeholder="Email" name="Email" /*onChange={onChange}*/ />

                </div>



                <div className="submit-container">
                    <div className={action === "findpass" ? "submit white" : "submit"} onClick={onchange}><Link to="/Signup" className="textsy">이전</Link></div>
                    <div className={action === "findpass" ? "submit gray" : "submit"} onClick={onClickHandler}>비밀번호찾기</div>


                </div>
            </div>
        </>
    );
}










export default Findpass;