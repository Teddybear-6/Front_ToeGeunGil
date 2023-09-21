
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import detailSytle from "../components/hobbyDetail.module.css"
import HobbyDetailTitle from "../components/hobbyDetailTitle";
import HobbyImages from "../components/hobbyDetailImages";
import HobbyMainImages from "../components/hobbyDetailMainImages";
import HobbyTutor from "../components/hobbyTutor";
import jwt_decode from "jwt-decode";
import RevieWrite from "../components/hobbyReview";
import HobbyReview from "../components/HobbyReviewView";

function HobbyDetail() {
    const{hobbyCode} = useParams();
    const [detail, setDetail] = useState({});
    const [imageNum, setImageNum] = useState(0);
    const [user , setUser] =useState();
    const [join , setJoin] =useState();
    


    useEffect(() => {
       if(sessionStorage.getItem("Authorizaton")){
        setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
       }
        fetch(process.env.REACT_APP_URL+`/hobbys/${hobbyCode}`)
            .then((response) => response.json()).then(data => {
                setDetail(data);
            })
          
        if(user)
         fetch(process.env.REACT_APP_URL+`/hobbys/join/${hobbyCode}/${user.no}`).then(res => res.json()).then(res=>{
            setJoin(res)
         })  


         
    }, [join])

    const onClickHandler = index => {
        setImageNum(index);
    }

    console.log(detail)

    const joinClickHandler = () =>{
        if(!user){
            alert("회원만 참여가능합니다.")
        }else if(join){
            if(window.confirm("참여 취소하시겠습니까")){
                fetch(process.env.REACT_APP_URL+`/hobbys/join/${hobbyCode}/${user.no}`,{
                method: "POST",
            }).then(res=>res.text()).then(res=> {
                alert(res)
                if(res == "참가 취소 되었습니다."){
                    setJoin(false)
                }
            
            }).catch(r=>console.log(r))
            }
        }else if(!join){
            if(window.confirm("참여하시겠습니까")){
                fetch(process.env.REACT_APP_URL+`/hobbys/join/${hobbyCode}/${user.no}`,{
                method: "POST",
            }).then(res=>res.text()).then(res=> {
                alert(res)
                if(res == "참가 완료되었습니다."){
                    setJoin(true)
                
                }
            
            }).catch(r=>console.log(r))
            }
            
        }

        

         
        }
     
    return (
        <>
            {/* <div className="layout"> */}
                <div className={detailSytle.frame2}>
                   <div className={detailSytle.details}>
                     <div>
                         <HobbyDetailTitle detail={detail}></HobbyDetailTitle>
                     </div>

                    <div className={detailSytle.mainImage}>
                        {
                            !detail.imageId ? "이미지가 없습니다." : <HobbyMainImages detail={detail?.imageId[imageNum]} />
                            
                        }
                        <div className={detailSytle.mainImageDiv} >

                            <div className={detailSytle.imageLine}>
                                {
                                    !detail ? "이미지가 없습니다." : detail.imageId?.map((r, index) => (<div onClick={() => onClickHandler(index)}>< HobbyImages key={index} detail={r} /> </div>))
                                }
                            </div>

                        </div>

                        </div>
                    </div>
                    <div className={detailSytle.schedule}>
                        <h1 className={detailSytle.scheduleTitle}>일정</h1>
                        <h1 className={detailSytle.scheduleContent}>일시 : {detail.date} </h1>
                        <h1 className={detailSytle.scheduleContent}>장소 : {detail.hobbyPlace}</h1>
                        <h1 className={detailSytle.scheduleContent}>시간 : {detail.startTime} ~ {detail.endTime}</h1>
                        <h1 className={detailSytle.scheduleContent}>인원 : {detail.maxPersonnel}명</h1>
                        <h1 className={detailSytle.scheduleContent}>가격 : {detail.hobbyPrice} 원</h1>
                        <button className={detailSytle.likeBtn}>찜</button>
                    </div>
                </div>
                            <div className={detailSytle.joinframe}>
                                <p className={detailSytle.joinTitle}>참가자</p>
                               { detail.close =="N" ? 
                               (join ? <button onClick={joinClickHandler} className={detailSytle.joinBtn}>취소하기</button> 
                               : <button onClick={joinClickHandler}  className={detailSytle.joinBtn}>참여하기</button>) 
                               :<button disabled="disabled" className={detailSytle.cBtn}>마감되었습니다.</button>
                            
                             }
                                
                            </div>

                            <div className={detailSytle.intro}>
                            <div className={detailSytle.introName}>소셜 소개</div>
                            <p className={detailSytle.introContent}>{detail.intro}</p>
                            </div>
                            
                            <HobbyTutor tutorIntro={detail.tutorIntro} tutorCode={detail.tutorCode}></HobbyTutor>

                            {
                                 detail.close=='Y' && <HobbyReview hobbyCode={hobbyCode}/> 
                            }
                            {
                                
                                detail.close=='Y' && <RevieWrite hobbyCode={hobbyCode}/> 
                            }
                               
                          
                           
            {/* </div> */}
        </>
    )
}


export default HobbyDetail;