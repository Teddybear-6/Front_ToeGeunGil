import { useState, useEffect } from "react";


function HobyTest({detail}){
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
                    <img src={images}></img>
                </div>
        </>
    )
}


export default HobyTest;