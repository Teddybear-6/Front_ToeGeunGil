import { useEffect, useState } from "react";

function SocialParticipateList({postNum}) {
    //게시글 번호 입력하면 리스트로 참여 회원 보여줌
    const [participate, setParticipate] = useState([{}]);

    useEffect(() => {
        fetch(`http://localhost:8001/socials/participate/2`)
            .then(response => response.json())
            .then(data => setParticipate(data));
    },[]);

    console.log(participate.length)

    return(
        <>
            {participate.map((r,i) => 
            <div key={i}>
                <div key={i}>{r.userNum}</div>
            </div>)}
        </>
    )

}

export default SocialParticipateList;