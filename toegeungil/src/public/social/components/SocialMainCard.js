import { useEffect, useState } from "react";
import SocialKeyword from "./SocialKeyword";
import SocialCategory from "./SocialCategory";
import SocialImage from "./SocialImage";

function SocialMainCard() {

    const [socials, setSocials] = useState([{}]);

    useEffect(() => {
        fetch("http://localhost:8001/socials")
                .then(response => response.json())
                .then(data => setSocials(data));
    },[]);

    return (
        <>
            <div>
                {
                    (Object.keys(socials[0]) <= 0)? null:socials.map((r,i) =>
                        <div key={i}>
                            <p key={i}>{r.socialNum}</p>
                            <SocialImage key={i} imgcode={r.fileNum}></SocialImage>
                            <p key={i}>{r.socialName}</p>
                            <p><SocialCategory key={i} cateCode={r.categoryCode}></SocialCategory></p>
                            <p><SocialKeyword key={i} code={r.keywordCode}></SocialKeyword></p>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default SocialMainCard;