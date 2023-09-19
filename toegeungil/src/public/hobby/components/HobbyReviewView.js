import { useState, useEffect} from "react";
import ReviewBox from "./reviewBox";
import "./review.css"

function HobbyReview({hobbyCode}){

    const[review , setReview] = useState([{}])

    useEffect(()=>{
        
        fetch(`http://localhost:8001/hobbys/review/${hobbyCode}`).then(res=>res.json()).then(res => setReview(res));


   
    
    },
    [])

    return(
        <>
     

            {
                review?  null : review?.map((m ,index)=>(
                    <ReviewBox review={m} key={index}/>
                ))
                
            }
            
    
        </>
    )
    
}


export default HobbyReview;