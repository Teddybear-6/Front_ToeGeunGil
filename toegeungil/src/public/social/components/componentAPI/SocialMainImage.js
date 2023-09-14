import { useEffect, useState } from "react";

import MainStyle from '../css/SocialMainCard.module.css';

function SocialMainImage({ imgcode }) {
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(`http://localhost:8001/socials/image/${imgcode}`)
            .then(response => response.blob())
            .then(data => {
                const objectUrlImg = URL.createObjectURL(data)
                setImage(objectUrlImg);
            });
    }, []);

    return (
        <>
            <img className={MainStyle.socialMainImg} src={image}/>
        </>
    )
}

export default SocialMainImage;