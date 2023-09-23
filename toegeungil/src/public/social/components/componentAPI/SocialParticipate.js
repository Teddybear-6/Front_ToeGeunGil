import { useEffect, useState } from "react";
import DetailsStyle from '../css/SocialDetails.module.css';
import jwt_decode from "jwt-decode";


function SocialParticipate({socialNum, userNum}) { //소설 번호와 회원 번호 받아오기

    const [user, setUser] = useState();

    const [participate, setParticipate] = useState({
        socialNum: '', //소셜 번호
        userNum: '', //회원 번호
    });

    const participateHandler = () => {

        //권한설정
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }

        if (!user) {
            // 유저가 아닐 경우
            alert("회원만 참여가능합니다.")
        } else if (!participate) {
            // 참여 신청이 되어있지 않을 경우
            if (window.confirm("참여하시겠습니까")) {
                fetch(process.env.REACT_APP_URL + `/socials/participate/${socialNum}`, {
                    method: "POST",
                })
                .then(res => res.text())
                .then(res => {
                    alert(res)
                    if (res == "참가 완료되었습니다.") {
                        setParticipate(true)
                    }
                }).catch(r => console.log(r))
            }
        } else if (participate) {
            if (window.confirm("참여 취소하시겠습니까")) {
                fetch(process.env.REACT_APP_URL + `/socials/participate/${socialNum}`, {
                    method: "POST",
                })
                .then(res => res.text())
                .then(res => {
                    alert(res)
                    if (res == "참가 취소 되었습니다.") {
                        setParticipate(false)
                    }
                    
                }).catch(r => console.log(r))
            }
        }
    }

    return (
        <>
            <button className={DetailsStyle.buttonStyle} onClick={participateHandler} name="userNum">참여하기</button>
            {/* <button className={DetailsStyle.buttonStyle}>취소하긴</button> */}
        </>
    )
}

export default SocialParticipate;
