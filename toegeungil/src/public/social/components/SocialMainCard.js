import { useEffect, useState } from "react";
import SocialKeyword from "./SocialKeyword";
import SocialCategory from "./SocialCategory";
import SocialImage from "./SocialImage";

import MainStyle from './css/SocialMainCard.module.css';
import TestImage from "./TestImage";

function SocialMainCard() {

    const [socials, setSocials] = useState([{}]);

    useEffect(() => {
        fetch("http://localhost:8001/socials")
            .then(response => response.json())
            .then(data => setSocials(data));
    }, []);

    return (
        <>
            <div>
                {
                    (Object.keys(socials[0]) <= 0) ? null : socials.map((r, i) =>
                        <div key={i} className={MainStyle.socialMainCard}>
                            {/* <p key={i}>{r.socialNum}</p> */}
                            <SocialImage key={i} imgcode={r.fileNum}/>
                            <img key={i} imgcode={r.fileNum} src={<SocialImage/>}/>
                            <img src={`${<TestImage key={i} imgcode={r.fileNum}/>}`}/>
                            <div>
                                <p className={MainStyle.socialMainTitle} key={i}>{r.socialName}</p>
                                {/* <p><SocialCategory key={i} cateCode={r.categoryCode}></SocialCategory></p> */}
                                <p><SocialKeyword key={i} code={r.keywordCode}></SocialKeyword></p>
                            </div>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default SocialMainCard;