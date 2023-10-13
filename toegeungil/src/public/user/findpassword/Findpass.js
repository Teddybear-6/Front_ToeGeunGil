// /*비번찾기*/
import React, { useState } from "react";
import { Link, json, useNavigate } from 'react-router-dom';
import './Findpass.css';
import email_icon from '../imgs/email.png';

const Findpass = () => {

    const [action, setAction] = useState("Findpass");
    const [email , setEmail]= useState();
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
        
            if(response.status===404){

                alert("임시 비밀번호 발송에 실패했습니다. 이메일을 확인해주세요")
            }else if(response.ok){
                
                alert("임시 비밀번호를 이메일로 발송했습니다.")
            }

    })

    }


    const onChangeHandler = (e)=>{
        setEmail( e.target.value)

    } 



console.log(email)

    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="inputs">
                {/* <div className="input">
                    
                    <img src={name_icon} alt="" />
                    <input type="text" placeholder="Name" name="Name" />
                </div>
                <div className="input">
                    <img src={nickname_icon} alt="" />
                    <input type="text" placeholder="nickName" name="nickName" />
                </div> */}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="text" placeholder="Email" name="Email" onChange={onChangeHandler} />

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