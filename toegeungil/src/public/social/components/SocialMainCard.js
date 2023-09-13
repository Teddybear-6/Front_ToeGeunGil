import { useEffect, useState } from "react";
import SocialKeyword from "./SocialKeyword";
import SocialImage from "./SocialImage";
import SocialCategory from "./SocialCategory";


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
                            {/* <img key={r.socialNum}>{r.fileNum}</img> */}
                            <p key={i}>{r.socialNum}</p>
                            {/* <SocialImage key={i} imgcode={r.fileNum}></SocialImage> */}
                            <p key={i}>{r.socialName}</p>
                            <SocialCategory key={i} code={r.categoryCode}></SocialCategory>
                            <SocialKeyword key={i} code={r.keywordCode}></SocialKeyword>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default SocialMainCard;