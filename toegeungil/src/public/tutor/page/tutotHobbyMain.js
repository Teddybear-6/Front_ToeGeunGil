import HobbyCard from "../../hobby/components/hobbyCard";

function TutorHobbyMain({hobbys}){

    return(
        <>  
            
            {hobbys?.map((hobby , index)=>(
              <>
              <div style={{display:"flex" , flexWrap:"wrap" , alignContent:"center" ,alignItems: "center" }}>
                <HobbyCard hobbys={hobby} key={index}/>
                <button>리뷰관리</button>
            </div>
                </>
            ))}
            
        </>
        
    )
}
export default TutorHobbyMain;