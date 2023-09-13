import { useState, useEffect } from "react";
import TutorStyle from "./hobbyTutor.module.css"

function HobbyTutor({tutorIntro, tutorCode}){
    const [tutor, setTutor] = useState();


    useEffect(()=>{
        fetch(`http://localhost:8001/user/${tutorCode}`).then(res=>res.json()).then(
            data=>setTutor(data.userName)
        )

        // console.log(tutor)
    })

    return(
        <div className={TutorStyle.tutorintro}>
            <p className={TutorStyle.tutor}> {tutor} 튜터</p> 
              <p className={TutorStyle.intorContent} >{tutorIntro}</p>
         
        </div>
    )
}


export default HobbyTutor;