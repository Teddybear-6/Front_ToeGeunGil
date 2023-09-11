import { useEffect, useState } from "react";
import SocialMain from "../page/SocialMain";


function AllSocial() {
    const [social, setSocial] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:8001/socials").then((response) => response.json()).then((date) => setSocial(date))
    }, [])

    return(
        <>
            <div className="">
                <SocialMain socials={social}/>
            </div>
        </>
    )
}