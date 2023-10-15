import { useState, useEffect } from "react";
import ImageStyle from "./hobbyDetail.module.css"



function HobbyImages({ detail }) {

    return (
        <>
            <div>
                <img className={ImageStyle.smallImage} src={`http://106.250.199.126:9000/image/${detail.path}`}></img>
            </div>
        </>
    )
}
export default HobbyImages;