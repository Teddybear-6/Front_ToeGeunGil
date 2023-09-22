import { useEffect, useState } from "react";
// import "../components/css/Button.css"
// import "../components/css/SocialPosting.css"
import { Link, NavLink } from "react-router-dom";

import DetailsStyle from '../css/SocialDetails.module.css';

function SocialModifyImage({ socialNum }) {
    //기존 등록되어 있는 이미지를 보여주기 위한 함수
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(process.env.REACT_APP_URL+`/socials/img/${socialNum}`)
            .then(response => response.json())
            .then(data => setImage(data));
    }, [socialNum]);

    return (
        <>
            {
                !image ? null : <img className="posBoard_Img w575h350 maR50" src={`http://106.250.199.126:9000/image/${image.path}`} />
            }
        </>
    )
}

export default SocialModifyImage;