import { useEffect, useState } from "react";
import DetailsStyle from '../css/SocialDetails.module.css';


function SocialParticipate({ detao, participate, participateHandler, participateUser }) {

    useEffect(()=> {
    }, [participateUser])

    return (
        <button className={DetailsStyle.buttonStyle}>참여하기</button>
    )
}

export default SocialParticipate;