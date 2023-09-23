import HobbyCard from "./hobbyCard"

function HobbyMain({hobbys}){

    return(
        <>  
             <div style={{display:"flex",flexWrap: "wrap"}}>
            {hobbys?.map((hobby , index)=>(
               <div style={{marginBottom:"20px"}}>
                <HobbyCard hobbys={hobby} key={index}/>
                </div>
            ))}
             </div>
        </>
        
    )
}

export default HobbyMain;