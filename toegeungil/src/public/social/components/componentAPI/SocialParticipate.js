import { useEffect, useState } from "react";
import DetailsStyle from '../css/SocialDetails.module.css';


function SocialParticipate() {

    const [socialNum, setSocialNum] = useState(); //소셜 번호
    const [userNum, setUserNUm] = useState(); //회원 번호

    const participateHandler = () => {
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
            <button className={DetailsStyle.buttonStyle}>참여하기</button>
            <button className={DetailsStyle.buttonStyle}>취소하긴</button>
        </>
    )
}

export default SocialParticipate;
