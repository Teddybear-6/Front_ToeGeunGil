import React, {useState,useEffect} from 'react';


function Test2(){
    const [image, setImage]= useState("");

    useEffect(()=>{
        fetch("http://localhost:8001/hobbys/image/13").then(res => res.blob())
        .then(blob => {
          console.log(blob);
          const objectURL = URL.createObjectURL(blob)
          console.log(objectURL);
          setImage(objectURL)
  
        }
        )
           
    },[])

    return(
        <>
          <img src={image}></img>
        </>

    )
}

export default Test2;