import { useEffect, useState } from "react";


function SocialParticipateView({ postNum }) {

    //해당 게시글 참여자 리스트
    const [participate, setParticipate] = useState([]);

    console.log("dfsf", participate)

    useEffect(() => {
        //참여자 밑 인원수만큼 이미지 아이콘 뿌려주기
        fetch(process.env.REACT_APP_URL + `/socials/participate/${postNum}`)
            .then(response => response.json())
            .then(data => setParticipate(data));
    }, []);

    return (
        <>
            {/* {
                participate.map((i) => (
                    <div key={i}>{participate.userNum}</div>
                ))
            } */}
        </>
    )
}

export default SocialParticipateView;