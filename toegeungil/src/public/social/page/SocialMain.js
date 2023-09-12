import { useEffect, useState } from "react";

function SocialMain() {
    //DB로 구축된 게시물 데이터를 json-server에 연결하고,
    //API주소를 fetch함수에 연결하여 통신 가능하도록 한다.
    const [socials, setSocials] = useState([{}]);

    useEffect(
        () => {
            fetch("http://localhost:8001/socials")
            .then(response => response.json())
            .then(data => setSocials(data));
            console.log(socials)
        },[]
    
    )
    return(
        <>
            { 
                socials == null? null : socials.map(r => <p key={r.socialNum}>${r.socialName}</p>)
            }
        </>
    )
}
export default SocialMain;
