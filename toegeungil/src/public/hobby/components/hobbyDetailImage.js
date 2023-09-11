import { useState , useEffect } from "react";

function HobbyImage({hobby}){
    const [image, setImage]= useState([]);
    const ima=[];

    function urls(){ 
       const ids = hobby.imageId;
       ids && ids.map(m=>{
            fetch(`http://localhost:8001/hobbys/image/${m.id}`).then(res=>res.blob()).then(blob=>{
                const objectURL = URL.createObjectURL(blob)
                ima.push(objectURL);
            })
            setImage(ima);
        })
    }
  
    useEffect(()=>{
        urls()
        console.log(image)
    },[])
    return(
        <>
       <h1>{hobby.hobbyCode}</h1>
       <div>
       {image.map((m,index)=>(
        <img src={m.blob} alt="dd"/>
        ))}
        </div>
       <h1>응?</h1>
       </>
    )

}

export default HobbyImage;