import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialKeyword from "./componentAPI/SocialKeyword";
import UserNicname from "./componentAPI/UserNicname";

import DetailsStyle from './css/SocialDetails.module.css';

function SocialDetails_Title() {
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
        fetch(`http://localhost:8001/socials/1`)
            .then(response => response.json())
            .then(data => setSocials(data));
    }, []);


    return (
        <>
            <div className={DetailsStyle.socialDetailsTitleBoard}>
                <div className={DetailsStyle.socialDetailsTitle}>{socials.socialName}</div>
                <div className={DetailsStyle.flexStyleKeywordAndUser}>
                    <div className={DetailsStyle.flexStyle}>{socials.keywordDTOList?.map((m, index) => {
                        return (
                            <SocialKeyword key={index} code={m} />
                        )
                    })
                    }</div>
                    <div className={DetailsStyle.socialDetailsWriter}>
                        <label>작성자 : </label>
                        <UserNicname userNo={socials.userNum}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialDetails_Title;