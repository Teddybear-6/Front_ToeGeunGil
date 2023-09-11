
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import HobbyImage from "./hobbyDetailImage";


function HobbyDetail(){
    // const{hobbyCode} = useParams();

    const [detail , setDetail] =useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys/${1}`).then(res=> res.json()).then((data)=>(
            setDetail(data)))
    },[])

    
    return(
        <>
        <HobbyImage hobby={detail}/>
        </>
    )
}


export default HobbyDetail;