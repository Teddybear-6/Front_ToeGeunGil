
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import detailSytle from "./hobbyDetail.module.css"
import HobbyDetailTitle from "./hobbyDetailTitle";
import HobbyImages from "./hobbyDetailImages";
import HobbyMainImages from "./hobbyDetailMainImages";
function HobbyDetail(){
    // const{hobbyCode} = useParams();
    const [hobbyCode ,setHobbyCode] = useState(4);
    const [detail , setDetail] =useState({});
    const[category, setCategery] =useState([]);
    const[imageNum , setImageNum] =useState(0);
    const[imageSet, setImageSet] = useState();

    const url = [];
    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys/${hobbyCode}`)
        .then((response)=> response.json()).then(data=> {
            setDetail(data);
        })
        
    },[])

    const onClickHandler = index =>{
        setImageNum(index);
    }
    
    return(
        <> 
        <div className={detailSytle.frame}>
            <div className={detailSytle.details}>
                <div>
                  <HobbyDetailTitle detail={detail}></HobbyDetailTitle>
                </div>

                <div className={detailSytle.mainImage}>
                {
                     !detail.imageId? "이미지가 없습니다." : <HobbyMainImages detail={detail?.imageId[imageNum]}/>
                }
                <div className={detailSytle.mainImageDiv} >
                
                     <div className={detailSytle.imageLine}>
              {
                   !detail? "이미지가 없습니다." : detail.imageId?.map((r,index) =>( <div onClick={()=> onClickHandler(index)}>< HobbyImages detail={r}/> </div>))
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

        </>
    )
}


export default HobbyDetail;