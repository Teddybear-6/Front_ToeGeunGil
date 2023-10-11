import { useEffect, useState } from "react";
import SocialKeyword from "./componentAPI/SocialKeyword";
// import SocialCategory from "./componentAPI/SocialCategory";
import SocialMainImage from "./componentAPI/SocialMainImage";
// import { Grid, Box } from "@material-ui/core";
import MainStyle from './css/SocialMainCard.module.css';
import DetailsStyle from './css/SocialDetails.module.css';
import { Link } from "react-router-dom";
import SocialDetails from "./SocialDetailCard";
import SocialKeywordView from "./componentAPI/SocialKeywordView";

function SocialMainCard({ socials }) {

    /*할일
    - 키워드 뿌리기
    - 눌렀을 때 링크 이동*/

    // const [socials, setSocials] = useState([{}]);

    // useEffect(() => {
    //     fetch(process.env.REACT_APP_URL+"/socials")
    //         .then(response => response.json())
    //         .then(data => setSocials(data));
    // }, []);

    // Object?.keys(socials[0]) <= 0

    return (
        <>
            <div className={MainStyle.socialMainCardBoard}>
                <div className={MainStyle.container}>
                    {
                        !socials ? null : socials.map((r, i) =>
                            <div key={i} className={MainStyle.socialMainCard}>
                                <Link to={`/social/${r.socialNum}`} className={MainStyle.socialLink}>
                                    {/* to={<SocialDetails socialNum={r.socialNum}/>} */}
                                    {/* <p key={i}>{r.socialNum}</p> */}
                                    {/* 이미지 */}
                                    <SocialMainImage key={i} socialNum={r.socialNum} />
                                    {/* <SocialMainImage key={i} imgcode={r.fileNum} /> */}
                                    {/* 소셜 제목 */}
                                    <div className={MainStyle.socialMainTitle} key={i}>{r.socialName}</div>
                                </Link>
                                {/* <p><SocialCategory key={i} cateCode={r.castegoryCode}></SocialCategory></p> */}
                                {/* 키워드 */}
                                <div className={MainStyle.socialMainKeyword}>
                                    <div className={DetailsStyle.flexStyle} key={i}>
                                        {/* 키워드 뿌려주기 (index 0,1,2만 보여주고 그 이후는 (...더보기)로 보여줌) */}
                                        {r.keywordDTOList?.map((m, index) => (
                                            <>
                                                {index < 3 ? <SocialKeyword key={index} code={m} /> : index === 3 ?
                                                    <SocialKeywordView key={index} code={m}/> : null}
                                            </>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SocialMainCard;