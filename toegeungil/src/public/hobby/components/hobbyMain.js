import HobbyCard from "./hobbyCard"

function HobbyMain({hobbys}){

    return(
        <>  
            
            {hobbys.map((hobby , index)=>(
                <HobbyCard hobbys={hobby} key={index}/>
            ))}
            
        </>
        
    )
}

export default HobbyMain;