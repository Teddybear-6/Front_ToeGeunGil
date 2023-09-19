import { useState, useEffect } from "react";
import "./review.css"

const NameCard =({props}) =>{
    const [userNick , setUserNicke] = useState();
 
    useEffect(()=>{
        console.log(props)
        if(props?.userNo){
            fetch(`http://localhost:8001/user/${props.userNo}`).then(res=>res.json()).then(res=>setUserNicke(res.nickName));
        }else if(props?.tutorCode){
            fetch(`http://localhost:8001/user/${props.tutorCode}`).then(res=>res.json()).then(res=>setUserNicke(res.userName+" 튜터"));
        }
    })
    
    return(
        <p className="NickName">{userNick} </p>
    )
}

export default NameCard;