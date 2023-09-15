import { useEffect, useState } from "react";
import DetailsStyle from '../css/SocialDetails.module.css';


function SocialParticipate({postNum}) {
    //얼렁뚱땅 일단 내버려두기

    //localhost:8001/socials/participate/{게시글 번호}
    //userNum = 값 주면 등록 (POST)
    const [userNum, setuserNum] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8001/socials/participate/${postNum}`, {
            method: "POST",
            headers: { //데이터 타입 지정
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                "userNum" : userNum
            }) //실제 데이터 파싱하여 body에 저장
        })
            .then(response => response.json())
    }, []);

    return(
        <button className={DetailsStyle.buttonStyle}>참여하기</button>
    )
}

export default SocialParticipate;