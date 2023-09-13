import { useEffect, useState } from "react";

function SocialImage({ imgcode }) {
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(`http://localhost:8001/socials/image/${imgcode}`)
            .then(response => response.blob())
            .then(data => {
                const objectUrlImg = URL.createObjectURL(data)
                setImage(objectUrlImg);
            });
    }, []);

    return(
        <>
            <div>
                <img src={image}/>
            </div>
        </>
    )
}

export default SocialImage;