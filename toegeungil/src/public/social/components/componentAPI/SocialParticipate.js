import { useEffect, useState } from "react";
import DetailsStyle from '../css/SocialDetails.module.css';
import jwt_decode from "jwt-decode";
import { Link, NavLink } from "react-router-dom";
import SocialParticipateView from "./SocialParticipateView";


function SocialParticipate({ socials, socialNum, socialFixedNum, socialWriter, participateLength }) { //소설 번호 받아오기

    // console.log("fixNum : " + socialFixedNum); //최대 인원 초과시 참여 불가를 위해 
    // console.log("작성자 번호 : " + socialWriter); //작성자에게는 참여자 리스트 보이기
    
    const [user, setUser] = useState();
    const [participate, setParticipate] = useState();

    useEffect(() => {
        //권한설정
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }

    }, [socials, participateLength]);

    const join = (user) => {
        //회원AND참가여부 true false 조회
        fetch(process.env.REACT_APP_URL + `/socials/participate/${socialNum}/${user.no}`)
            .then(response => response.json()) //json으로 받는다
            .then(data => setParticipate(data));
    }

    const participateHandler = () => {

        // console.log("나 유저: ", user)
        // console.log("참가여부 : ", participate) //undefined

        if (!participate) {
            if (window.confirm("[social] 참여하시겠습니까?")) {
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
            if (window.confirm("[social] 참여 취소하시겠습니까")) {
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

    const participateExceed = () => {
        alert("[social] 정원이 초과되어 참여가 불가능합니다.");
    }

    return (
        <>
            {
                !user ? <Link to="/login" className={DetailsStyle.buttonStyle}>회원전용</Link> :
                    (user.no==socialWriter) ? <SocialParticipateView socials={socials} /> :
                    <>
                        {join(user)}
                        {(participate ?
                            <button className={DetailsStyle.buttonStyle} onClick={participateHandler}>참여취소</button> : (participateLength.length == socials.socialFixedNum ? 
                            <button className="buttonOff_so" onClick={participateExceed}>정원초과</button> :
                            <button className={DetailsStyle.buttonStyle} onClick={participateHandler}>참여하기</button>)
                            
                        )}
                    </>
            }
        </>
    )
}

export default SocialParticipate;
