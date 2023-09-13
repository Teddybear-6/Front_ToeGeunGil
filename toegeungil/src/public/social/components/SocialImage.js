import { useEffect, useState } from "react";

function SocialImage({ imgcode }) {
    const [image, setImage] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8001/socials/image/${imgcode}`)
            .then(response => response.json())
            .then(data => setImage(data));
    }, []);

    return(
        <>
            <div>
                {image == null? null : null}
            </div>
        </>
    )
}

export default SocialImage;