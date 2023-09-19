import { useEffect, useState } from "react";
import SocialKeyword from "./componentAPI/SocialKeyword";
// import SocialCategory from "./componentAPI/SocialCategory";
import SocialMainImage from "./componentAPI/SocialMainImage";
// import { Grid, Box } from "@material-ui/core";
import MainStyle from './css/SocialMainCard.module.css';
import DetailsStyle from './css/SocialDetails.module.css';
import { Link } from "react-router-dom";
import SocialDetails from "./SocialDetails";

function SocialMainCard() {

    /*할일
    - 키워드 뿌리기
    - 눌렀을 때 링크 이동*/

    const [socials, setSocials] = useState([{}]);

    useEffect(() => {
        fetch("http://localhost:8001/socials")
            .then(response => response.json())
            .then(data => setSocials(data));
    }, []);



    return (
        <>
            <div className={MainStyle.socialMainCardBoard}>
                <div className={MainStyle.container}>
                    {
                        (Object.keys(socials[0]) <= 0) ? null : socials.map((r, i) =>
                            <div key={i} className={MainStyle.socialMainCard}>
                                <Link to={`${r.socialNum}`} className={MainStyle.socialLink}>
                                    {/* to={<SocialDetails socialNum={r.socialNum}/>} */}
                                    {/* <p key={i}>{r.socialNum}</p> */}
                                    {/* 이미지 */}
                                    <SocialMainImage key={i} socialNum={r.socialNum} />
                                    {/* <SocialMainImage key={i} imgcode={r.fileNum} /> */}
                                    {/* 소셜 제목 */}
                                    <div className={MainStyle.socialMainTitle} key={i}>{r.socialName}</div>
                                    {/* <p><SocialCategory key={i} cateCode={r.castegoryCode}></SocialCategory></p> */}
                                    {/* 키워드 */}
                                    <div className={MainStyle.socialMainKeyword}>
                                        <div className={DetailsStyle.flexStyle} key={i}>
                                            {r.keywordDTOList?.map((m, index) => (
                                                    <SocialKeyword key={index} code={m} />
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SocialMainCard;