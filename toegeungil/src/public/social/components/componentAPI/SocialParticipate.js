import { useEffect, useState } from "react";
import DetailsStyle from '../css/SocialDetails.module.css';
import jwt_decode from "jwt-decode";


function SocialParticipate({socialNum}) { //소설 번호 받아오기

    console.log("받아온 소셜 넘버 : ", socialNum); //받아온 소셜 넘버 확인

    const [user, setUser] = useState();
    const [participate, setParticipate] = useState();

    useEffect(() => {
        //권한설정
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    }, []);

    const participateHandler = () => {

        console.log("나 유저: ", user)

        if ((user === undefined) && (user === null)) {
            // 유저가 아닐 경우
            alert("회원만 참여가능합니다.")
        } else if (!participate) {
            // 참여 신청이 되어있지 않을 경우
            if (window.confirm("[social] 참여하시겠습니까")) {
                fetch(process.env.REACT_APP_URL + `/socials/participate/${socialNum}/${user.no}`, {
                    method: "POST",
                })
                .then(res => res.text())
                .then(res => {
                    alert(res) //참가 완료 알림
                    setParticipate(true)
                }).catch(r => console.log(r))
            }
        } else if (participate) {
            if (window.confirm("참여 취소하시겠습니까")) {
                fetch(process.env.REACT_APP_URL + `/socials/participate/${socialNum}/${user.no}`, {
                    method: "POST",
                })
                .then(res => res.text())
                .then(res => {
                    alert(res) //참가 취소 알림
                    setParticipate(false)
                }).catch(r => console.log(r))
            }
        }
    }

    return (
        <>
            <button className={DetailsStyle.buttonStyle} onClick={participateHandler}>참여하기</button>
            {/* <button className={DetailsStyle.buttonStyle}>취소하긴</button> */}
        </>
    )
}

export default SocialParticipate;
