import { useState, useEffect } from 'react';
import HobbyMain from '../components/hobbyMain'
import AllHobbyCss from './AllHobby.module.css'
import Paging from '../components/Paging';
function AllHobby(){
    const [hobby, setHobby] = useState([]);
    const [hobbySize , setHobbySize] =useState(0);
    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys?page=${hobbySize}&size=12`).then((response)=> response.json()).then((data)=> 
            setHobby(data))
            console.log(hobby)
           
    },[])
    
    return(
        <>      
           
            <div className={AllHobbyCss.main}>
      
            <HobbyMain hobbys={hobby}></HobbyMain>
          
            </div>
      
            <div className={AllHobbyCss.paging}>
            <Paging/>
      
            </div>
           
        </>
    )
}

export default AllHobby;