import { useEffect, useState } from "react";

function SocialMain() {

    const [social, setSocial] = useState([]);

    /*get 호출 -> fetch() 함수는 디폴트로 GET방식으로 작동*/
    useEffect(() => {
        fetch("http://localhost:8001/socials/2").then((response) => response.json()).then((date) => setSocial(date))
    }, []);

    return (
        <div className="">
            <h1>dfsf</h1>
        </div>
    )

}

export default SocialMain;
