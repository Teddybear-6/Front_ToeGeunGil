import { useEffect, useState } from "react";

import DetailsStyle from '../css/SocialDetails.module.css';

function SocialDetailsImage({imgcode}) {
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(`http://localhost:8001/socials/image/${imgcode}`)
            .then(response => response.blob())
            .then(data => {
                const objectUrlImg = URL.createObjectURL(data)
                setImage(objectUrlImg);
            });
    }, [imgcode]);

    return (
        <>
            <img className={DetailsStyle.socialDetailsImage} src={image}/>
        </>
    )
}

export default SocialDetailsImage;