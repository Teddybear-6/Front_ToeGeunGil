import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';


function HobbyNavber(){
    const [cagegory, setCategory]= useState();
    useEffect(()=>{
        fetch(process.env.REACT_APP_URL+`/category`).then(res=>res.json()).then(res=>setCategory(res));
    },[])
    

    return(
        <>
        {/* 사용자 */}
  
        <div className="tutorNavwraper">
        <NavLink to={"/hobby"}  className={({isActive})=> isActive?"serviceOn":"serviceOff"}>전체</NavLink>
        {
            cagegory?.map((m,index)=>(
                <NavLink  state={ m.categoryCode} to={`/hobbycategory/${m.categoryCode}`} key={index} className={({isActive})=> isActive ? "serviceOn":"serviceOff"}>{m.categoryName}</NavLink>
                ))
        }
      
        
        </div>
      
        </>
    )
}

export default HobbyNavber;