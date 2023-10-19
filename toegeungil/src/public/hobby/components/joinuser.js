
import { useState, useEffect } from "react";
import "./JoinUser.css"
import detailSytle from "../components/hobbyDetail.module.css"
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

function JoinUser({ detail, join, joinClickHandler, joinuser }) {
    const [user, setUser] = useState();



    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }

    }, [joinuser])



    return (

        <>
            {
                joinuser?.map && joinuser?.map((i) =>
                    <img className="socialDetailsParticipateImg" key={i} src="/participate.png" />
                )
            }

            {detail.close == "N" ? !user ? <Link to="/login" className={detailSytle.buttonStyle}>회원전용</Link> :
                (!join ?
                    <button onClick={joinClickHandler} className={detailSytle.joinBtn}>참여하기</button> :
                    <button onClick={joinClickHandler} className={detailSytle.joinBtn}>취소하기</button>)
                : <button disabled="disabled" className={detailSytle.cBtn}>마감되었습니다.</button>

            }
        </>

    )
}

export default JoinUser;