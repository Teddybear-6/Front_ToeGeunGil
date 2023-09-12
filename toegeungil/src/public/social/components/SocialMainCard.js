import { useEffect, useState, useCallback } from "react";
import ChildeSocial from "./ChildeSocia";


function SocialMainCard() {

    const [socials, setSocials] = useState([{}]);
    const [keyword, setKeyword] = useState({});


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
                            <ChildeSocial code={r.keywordCode}></ChildeSocial>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default SocialMainCard;