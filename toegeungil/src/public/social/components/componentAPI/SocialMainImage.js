import { useEffect, useState } from "react";

import MainStyle from '../css/SocialMainCard.module.css';

function SocialMainImage({ socialNum }) {
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(`http://localhost:8001/socials/img/${socialNum}`)
            .then(response => response.json())
            .then(data => setImage(data));
    }, [socialNum]);

    return (
        <>
            {
                !image ? null : <img className={MainStyle.socialMainImg} src={`http://106.250.199.126:9000/image/${image.path}`} />
            }
        </>
    )
}

export default SocialMainImage;