import { useState, useEffect } from "react"
import HobbyCard from "../../hobby/components/hobbyCard";

function TutorHobbyMain({hobbys}){
    const [close ,setClose] = useState();

    useEffect(()=>{
        
        
    })


    return(
        <>  
            
            {hobbys?.map((hobby , index)=>(
              <>
              <div style={{display:"flex" , flexWrap:"wrap" , flexDirection: "column" , alignContent:"center" ,alignItems: "center" }}>
                <HobbyCard hobbys={hobby} key={index}/>
                <div>
                <button>리뷰관리</button>
                <button>수정</button>
                {
                 !hobby.close==="N" ?  null :   <button>마감</button>
                }
                </div>
            </div>
                </>
            ))}
            
        </>
        
    )
}
export default TutorHobbyMain;