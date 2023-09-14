import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialKeyword from "./componentAPI/SocialKeyword";

function SocialDetails() {
    /*
    소셜 제목
    키워드
    작성자
    
    사진
    
    소셜 일시
    장소
    시간
    인원
    */

    const { socialNum } = useParams();
    const [socials, setSocials] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8001/socials/3`)
            .then(response => response.json())
            .then(data => setSocials(data));
    }, []);


    return (
        <>
            <div>
                <p>게시글 번호 : {socials.socialNum}</p>
                <p>게시글 제목 : {socials.socialName}</p>
                <p>게시글 키워드(리스트) : {socials.keywordDTOList?.map((m, index) =>{
                        return(
                            <SocialKeyword key={index} code={m}/>
                        )
                    })
                }</p>
                <p>작성자 : {socials.userNum}</p>
            </div>
        </>
    )
}

export default SocialDetails;