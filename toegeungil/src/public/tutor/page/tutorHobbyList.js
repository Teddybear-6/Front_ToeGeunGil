import { useState, useEffect } from "react"
import jwt_decode from "jwt-decode";
import TutorHobbyMain from "./tutotHobbyMain";
function TutorHobbyList(){
    const [tutor,setTutor]= useState();
    const [hobby , setHobby] =useState();

  useEffect(()=>{
    if (sessionStorage.getItem("Authorizaton")) {
        setTutor(jwt_decode(sessionStorage.getItem("Authorizaton")))
      }

        fetch(process.env.REACT_APP_URL+`/hobbys/tutor`,{
            method:"GET",
            headers: {
                "Authorization": sessionStorage.getItem("Authorizaton")
              },
        }).then(res=>res.json()).then(res=>setHobby(res)).catch((e)=>console.log(e))
    
  },[])
  


  return(
    <>
    <div style={{display:"flex"}}>
    {!tutor ? "로그인 해주세요" : !tutor?.auth[0]==="TUTOR" ? "강사가 아닙니다." : <TutorHobbyMain hobbys={hobby}></TutorHobbyMain>}
    </div>
    </>
  )
}

export default TutorHobbyList;