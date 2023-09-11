import { useState, useEffect } from 'react';
import HobbyMain from './hobbyMain';
import AllHobbyCss from './AllHobby.module.css'
function AllHobby(){
    const [hobby, setHobby] = useState([]);
    const [hobbySize , setHobbySize] =useState(0);
    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys?page=${hobbySize}&size=12`).then((response)=> response.json()).then((data)=> 
            setHobby(data))
           
    },[])
    
    return(
        <>
            <div className={AllHobbyCss.main}>
            <HobbyMain hobbys={hobby}></HobbyMain>
            </div>
        </>
    )
}

export default AllHobby;