import { useState, useEffect } from "react";
import ImageStyle from "./hobbyDetail.module.css"



function HobbyImages({detail}){
    const [images, setImages] = useState();
   
    useEffect(()=>{
     
            fetch(`http://localhost:8001/hobbys/image/${detail.id}`)
            .then(r => r.blob())
            .then(data => {
                const objectURL = URL.createObjectURL(data)
                setImages(objectURL);
            });
         
    },[detail]);


    return(
        <>
                <div>
                    <img className={ImageStyle.smallImage} src={images}></img>
                </div>
        </>
    )
}
export default HobbyImages;