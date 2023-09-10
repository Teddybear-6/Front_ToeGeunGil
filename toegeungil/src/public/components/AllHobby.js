import { useState, useEffect } from 'react';
import HobbyMain from './hobbyMain';
function AllHobby(){
    const [hobby, setHobby] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8001/hobbys").then((response)=> response.json()).then((data)=> 
            setHobby(data))
    
    },[])
    

    return(
        <>
            <HobbyMain hobbys={hobby}></HobbyMain>
        </>
    )
}

export default AllHobby;