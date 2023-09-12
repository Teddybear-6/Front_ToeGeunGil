import { useEffect, useState } from "react";
import SocialMain from "../page/SocialMain";


function AllSocial() {
    const [social, setSocial] = useState([]);

    /*get 호출 -> fetch() 함수는 디폴트로 GET방식으로 작동*/
    useEffect(()=> {
        fetch("http://localhost:8001/socials/3").then((response) => response.json()).then((date) => setSocial(date))
    }, []);

    return(
        <div className="">
            {social}
        </div>
    )
}

export default AllSocial;