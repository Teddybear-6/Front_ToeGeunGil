import { useEffect, useState, useCallback } from "react";
import SocialKeyword from "./SocialKeyword";


function SocialMainCard() {

    const [socials, setSocials] = useState([{}]);

    useEffect(() => {
        fetch("http://localhost:8001/socials")
                .then(response => response.json())
                .then(data => setSocials(data));
    });

    return (
        <>
            <div>
                {
                    socials.map(r =>
                        <div>
                            {/* <img key={r.socialNum}>{r.fileNum}</img> */}
                            <p key={r.socialNum}>{r.socialName}</p>
                            <SocialKeyword code={r.keywordCode}></SocialKeyword>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default SocialMainCard;