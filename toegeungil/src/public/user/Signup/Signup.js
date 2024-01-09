/*회원가입*/
import React, { useCallback, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import password_icon from '../imgs/pass.png';
import name_icon from '../imgs/name.png';
import nickname_icon from '../imgs/nickname.png';
import email_icon from '../imgs/email.png';

import "../css/user.css"

const Signup = () => {
    const [action, setAction] = useState("SignUp");

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/login`)
    }

    //초기화값 세팅 
    const [name, setName] = React.useState("");
    const [id, setId] = React.useState("");
    const [nickname, setNickName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [role, setrole] = React.useState("회원");
    const [authList, setAuthList] = useState(["회원", "강사"]);
    //오류메세지 상태저장
    const [nameMessage, setNameMessage] = React.useState("");
    const [idMessage, setIdMessage] = React.useState("");
    const [nicknameMessage, setNickNameMassage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");
    const [emailMessage, setEmailMessage] = React.useState("");

    //유효성검사
    const [isname, setIsName] = React.useState(false);
    const [isId, setIsId] = React.useState(false);
    const [isnickname, setIsNickName] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [isEmail, setIsEmail] = React.useState(false);
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    //input입력값에 따라 조건-> 유효성 검사
    /**ex)id값을 입력하고 -> 값저장 -> currentld value
    값을 변경->(상태값변경) setld(currentld)그리고 조건 저장
    입력값 조건에 해당하지 않으면 메세지 출력(유효성 값을 false)
    조건에 해당하면 메세지 값변경, 유혀성 상태 값을 true로 바꿈

    이메일 , 비밀번호 , 이름,  닉네임

    이메일이 데이터베이스에 이미 있는지 검사하고
    있으면 버튼 막고
    없으면 사용가능한 이메일입니다.
    
    다쓰고 가입 버튼 누르면 api    @PostMapping("/regist") 

    */

    const callSignUp = () => {

        fetch(process.env.REACT_APP_URL + "/user/regist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "userName": name,
                "nickName": nickname,
                "userEmail": email,
                "userPassword": password,
                "role": role

            }),
        }).then(res => res.text())
            .then(date => date == "Success" ? successFunction() : alert("가입이 실패되었습니다."));
    }

    const successFunction = () => {
        alert("가입이 완료되었습니다.")
        navigate(`/login`);
    }

    const mailSet = (e) => {
        setEmail(e.target.value)
    }

    const nickNameSet = (e) => {
        setNickName(e.target.value)
    }

    const nameSet = (e) => {
        setName(e.target.value)
    }

    const passSet = (e) => {
        setPassword(e.target.value)
    }

    const roleSet = (e) => {
        setrole(e.target.value)
    }

    const findEmail = () => {
        if (emailRegEx.test(email)) {
            fetch(process.env.REACT_APP_URL + "/user/findEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "applcation/json"
                },
                body: email
            }).then(res => res.text())
                .then(date => alert(date))
        } else {
            alert("이메일을 입력해주세요");
        }

    }

    const onChangeHandler = (e) => {

    }

    return (
        <>
            <div className='toegeungillayout'>
                {/* SignUp */}
                <div className="userContainer">
                    <div className="userHeader">
                        <div className="userText">{action}</div>
                        <div className="userUnderline"></div>
                    </div>
                </div>
                <div className="userInputs">
                    {/* name */}
                    <div className="userInput">
                        <img src={name_icon} alt="" />
                        <input type="text" placeholder="Name" onChange={nameSet} />
                    </div>
                    <div className="userInputRadio">
                        <img src={name_icon} alt="" />
                        {authList.map((value, i) => (
                            <React.Fragment key={i}>
                                <span> {value}</span>
                                <input className="userAuthCheck" id={value} type="radio"
                                    value={value}
                                    checked={role === value}
                                    onChange={roleSet}
                                />

                            </React.Fragment>
                        ))}

                    </div>
                    {/* nickname */}
                    <div className="userInput">
                        <img src={nickname_icon} alt="" />
                        <input type="text" placeholder="Nickname" onChange={nickNameSet} />
                    </div>
                    {/* email */}
                    <div className="userInput">
                        <img src={email_icon} alt="" />
                        <input type="email" onChange={mailSet} placeholder="Email" />
                        {/* 이메일 중복 체크 */}
                        <button type="button" name="dbcheckId" onClick={findEmail} className="userCheckId">
                            check </button>
                    </div>
                    {/* pass */}
                    <div className="userInput">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="password" onChange={passSet} />
                    </div>
                    {/* 이전, 회원가입 버튼 */}
                    <div className="userSubmitContainer">
                        <div className={action === "Signup" ? "userSubmitOff userGray" : "userSubmitOff"} onClick={onClickHandler}>이전</div>
                        <div className={action === "Back" ? "userSubmit userGray" : "userSubmit"} onClick={callSignUp}>회원가입</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Signup;