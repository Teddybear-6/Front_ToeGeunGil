/*회원가입*/
import React,{useCallback, useState} from "react";
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
    const[action, setAction] = useState("SignUp");

    const navigate = useNavigate();
    
    const onClickHandler = () =>{
        navigate(`/login`);
        
    }

    //초기화값 세팅 
    const [name, setName] = React.useState("");
    const [id, setId] = React.useState("");
    const [nickname, setNickName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail]= React.useState("");

    //오류메세지 상태저장
    const [nameMessage, setNameMessage] = React.useState("");
    const [idMessage, setIdMessage] = React.useState("");
    const [nicknameMessage, setNickNameMassage]=React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");
    const [emailMessage, setEmailMessage] = React.useState("");

    //유효성검사
    const [isname, setIsName] = React.useState(false);
    const [isId, setIsId] = React.useState(false);
    const [isnickname, setIsNickName]= React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [isEmail, setIsEmail] = React.useState(false);


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


    // 네임
    const onChangeName = (e) => {
        const currentName = e.target.value;
        setName(currentName);
    
        if (currentName.length < 2 || currentName.length > 5) {
            setNameMessage("네임은 2글자 이상 5글자 이하로 입력해주세요!");
            setIsName(false);
        } else {
            setNameMessage("사용가능한 네임 입니다.");
            setIsName(true);
        }
    };
    
    // 아이디
    const onChangeId = (e) => {
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[a-zA-z0-9]{4,12}$/;
    
        if (!idRegExp.test(currentId)) {
            setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
            setIsId(false);
        } else {
            setIdMessage("사용가능한 아이디 입니다.");
            setIsId(true);
        }
    };

    // 닉네임
    const onChangeNickName = (e) => {
        const currentNickName = e.target.value;
        setNickName(currentNickName);
    
        if (currentNickName.length < 2 || currentNickName.length > 5) {
            setNickNameMassage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
            setIsNickName(false);
        } else {
            setNickNameMassage("사용가능한 닉네임 입니다.");
            setIsNickName(true);
        }
    };

    // 패스워드
    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPassword)) {
        setPasswordMessage(
            "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
        );
        setIsPassword(false);
        } else {
        setPasswordMessage("안전한 비밀번호 입니다.");
        setIsPassword(true);
        }
    };

    // 이메일
    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp =
        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    
        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false);
        } else {
            setEmailMessage("사용 가능한 이메일 입니다.");
            setIsEmail(true);
        }
    };

    
    const callSignUp = ()=>{


        fetch(process.env.REACT_APP_URL+"/user/regist",{
            method: "POST",
            headers :{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "userName": name,
                "nickName": nickname,
                "userEmail": email,
                "userPassword": password,
                
            }),
        }).then(res => res.text())
        .then(date => date=="Success"? successFunction():alert("가입이 실패되었습니다."));
    }
    
    const successFunction = ()=>{
        alert("가입이 완료되었습니다.")
        navigate(`/login`);
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
                <img src={name_icon} alt="" />
                <input type="text" onChange={onChangeName} placeholder="Name" />
            </div> 
            {/* <div className="input">
                <img src={id_icon} alt="" />
                <input type="text" placeholder="ID" />
                <button type="button" onClick="fn_dbcheckId({this.checkId})" name="dbcheckId" className="checkId">
                check</button>
                <input type="hidden" name="idDuplication" value="idUncheck"/>
            </div>  */}
                <div className="input">
                <img src={nickname_icon} alt="" />
                <input type="text" onChange={onChangeNickName} placeholder="Nickname" />
            </div> 
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="text" onChange={onChangeEmail} placeholder="Email" />
            </div> 
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" onChange={onChangePassword} placeholder="password" />
            </div> 
            {/* <div className="input">
                <img src={birth_icon} alt="" />
                <input type="text" placeholder="Birth" />
            </div>  */}
            

            <div className="submit-container">
            <div className={action === "Signup"?"submit gray":"submit"} onClick={onClickHandler}>이전</div>
            <div className={action === "Back"?"submit gray":"submit"} onClick={callSignUp}>회원가입</div>
            
            </div>
        
        </div>
        </>
        
    );

    };



export default Signup;