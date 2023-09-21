import { useEffect, useState } from "react";

import DetailsStyle from '../css/SocialDetails.module.css';

function SocialDetailsImage({ socialNum }) {
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(process.env.REACT_APP_URL+`/socials/img/${socialNum}`)
            .then(response => response.json())
            .then(data => setImage(data));
    }, [socialNum]);

    return (
        <>
            {
                !image ? null : <img className={DetailsStyle.socialDetailsImage} src={`http://106.250.199.126:9000/image/${image.path}`} />
            }
        </>
    )
}

export default SocialDetailsImage;