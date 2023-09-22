
import { useState, useEffect } from "react";
import "./JoinUser.css"
import detailSytle from "../components/hobbyDetail.module.css"
function JoinUser({ detail ,join , joinClickHandler  , joinuser }) {

  


    useEffect(() => {


    }, [joinuser])
 


    return (

        <>
            {
                joinuser?.map && joinuser?.map((i) =>
                    <img className="socialDetailsParticipateImg" key={i} src="/participate.png" />
                )
            }
            
            {detail.close == "N" ?
                (!join ? 
                    <button onClick={joinClickHandler} className={detailSytle.joinBtn}>참여하기</button>:
                    <button onClick={joinClickHandler} className={detailSytle.joinBtn}>취소하기</button>)
                : <button disabled="disabled" className={detailSytle.cBtn}>마감되었습니다.</button>

            }
        </>

    )
}

export default JoinUser;