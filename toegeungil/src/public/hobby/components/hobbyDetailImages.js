import { useState, useEffect } from "react";



function HobyTest({detail}){
    const [image, setImage] = useState();

    useEffect(()=>{
        
            console.log(detail)
        // fetch(`http://localhost:8001/hobbys/image/${detail.id}`)
        //     .then(r => r.blob())
        //     .then(data => {
        //         const objectURL = URL.createObjectURL(data)
        //         setImage(objectURL);
        //     });
    },[]);


    return(
        <>
            <picture>
                {/* <img src={image} /> */}
            </picture>
        </>
    )
}


export default HobyTest;