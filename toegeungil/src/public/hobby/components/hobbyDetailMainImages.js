import { useState, useEffect } from "react";
import ImageStyle from "./hobbyDetail.module.css"


function HobbyMainImages({ detail }) {
    const [images, setImages] = useState();

    useEffect(() => {
    }, [detail]);


    return (
        <>
            <div>
                <img className={ImageStyle.mainImage} src={`http://106.250.199.126:9000/image/${detail.path}`}></img>
            </div>
        </>
    )
}
export default HobbyMainImages;