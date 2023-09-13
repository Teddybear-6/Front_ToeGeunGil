import { useEffect, useState } from "react";

function TestImage({ imgcode }) {
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(`http://localhost:8001/socials/image/${imgcode}`)
            .then(response => response.json())
            .then(data => setImage(data));
    }, []);

    return (
        <>
            {/* <img src={image} /> */}
            {image.imageId}
        </>
    )
}

export default TestImage;