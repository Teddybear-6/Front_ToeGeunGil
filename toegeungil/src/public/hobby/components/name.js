import { useState, useEffect } from "react";
import "./review.css"

const NameCard =({props}) =>{
    const [userNick , setUserNicke] = useState();
 
    useEffect(()=>{
        if(props?.userNo){
            fetch(process.env.REACT_APP_URL+`/user/${props.userNo}`).then(res=>res.json()).then(res=>setUserNicke(res.nickName));
        }else if(props?.tutorCode){
            fetch(process.env.REACT_APP_URL+`/user/${props.tutorCode}`).then(res=>res.json()).then(res=>setUserNicke(res.userName+" 튜터"));
        }
    },[props])
    
    return(
        <p className="NickName">{userNick} </p>
    )
}

export default NameCard;