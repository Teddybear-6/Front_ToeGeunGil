
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";


function HobbyDetail(){
    // const{hobbyCode} = useParams();

    const [detail , setDetail] =useState();

    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys/${1}`).then(res=> res.json()).then(data=>console.log(data))
    })
}


export default HobbyDetail;