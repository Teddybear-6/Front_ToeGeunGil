import { useState } from "react";

function TestLogin() {

    const [userEmail, setUserEmail] = useState("testUser2@gmail.com");
    const [userPassword, setUserPassword] = useState("jhs123");

    const onclickLoginHandeler = () => {
        console.log(userEmail)
        console.log(userPassword)
        fetch(`http://localhost:8001/login`, {
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
                throw new Error('400 or 500 에러 발생')
            }

            return response.headers.get("Authorization")
        })
            .then(response => {
                sessionStorage.setItem("Authorizaton", response)

            }).catch(() => {
                alert("아이디 비번 확인해주세요")
            })
    }


    const onClickLogoutHandler = () => {
        sessionStorage.removeItem("Authorizaton");
    }

    return (
        <>
            <h1>아이디 :{userEmail}</h1>
            <input type="email" name="userEmail" onChange={e => setUserEmail(e.target.value)} />
            <h1>비밀번호 :{userPassword}</h1>
            <input type="password" name="userEmail" onChange={e => setUserPassword(e.target.value)} />
            <button onClick={onclickLoginHandeler}>로그인</button>
            <button onClick={onClickLogoutHandler}>로그아웃</button>
        </>
    )

}

export default TestLogin;