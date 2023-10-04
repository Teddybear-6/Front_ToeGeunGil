import { useEffect, useState } from "react";
import SocialUser from "./SocialUser";


function SocialParticipateView({ socials }) {

    //해당 게시글 참여자 리스트
    const [participate, setParticipate] = useState();


    useEffect(() => {
        //참여자 밑 인원수만큼 이미지 아이콘 뿌려주기
        if (socials.socialNum) {
            fetch(process.env.REACT_APP_URL + `/socials/participate/${socials.socialNum}`)
                .then(response => response.json())
                .then(data => setParticipate(data));
        }
    }, [socials]);




    return (
        <>
            {
                participate?.map((r, i) => (
                    <div key={i}>
                        <div key={i}>{r.userNum}</div>
                        <div key={i}>
                            <SocialUser users={r}/>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SocialParticipateView;