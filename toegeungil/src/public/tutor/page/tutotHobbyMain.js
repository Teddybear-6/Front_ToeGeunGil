import { useState, useEffect } from "react"
import HobbyCard from "../../hobby/components/hobbyCard";
import "./tutorMain.css"
import '../../layout/layout.css';
function TutorHobbyMain({hobbys}){
    const [click ,setClick] = useState();

    useEffect(()=>{
        setClick("체크")
        console.log("확인")
    },[hobbys,click])


    const close = (hobbyCode) =>{
        fetch(process.env.REACT_APP_URL+`/hobbys/close/${hobbyCode}`,{
            method:"PUT"
        }).then(res=>{
            if(res.status==200){
                setClick({...click})
                alert("마감처리 되었습니다.")
                console.log(click)
            }
            
        })
    }
    return(
        <>  
            
            {hobbys?.map((hobby , index)=>(
              <>
              <div>
                <HobbyCard hobbys={hobby} key={index}/>
                <div className="btnframe">
                <button className="buttonOn ">수정</button>
                <button className="buttonOn mar">삭제</button>
                {
                 hobby.close==="Y" ?  null :   <button  onClick={()=>close(hobby.hobbyCode)} className="buttonOn mar">마감</button>
                }
                </div>
            </div>
                </>
            ))}
            
        </>
        
    )
}
export default TutorHobbyMain;