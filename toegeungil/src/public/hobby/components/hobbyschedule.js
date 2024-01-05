import { useState, useEffect } from "react"
import detailSytle from "./css/hobbyDetail.module.css"


function HobbySchedule({ detail }) {
    const [local, setLocal] = useState();
    useEffect(() => {
        findLocal();
    }, [detail])

    const findLocal = () => {
        fetch(process.env.REACT_APP_URL + `/local/${detail.localCode}`).then(res => res.json()).then(res => setLocal(res));
    }
    return (
        <div className={detailSytle.schedule}>
            <h1 className={detailSytle.scheduleTitle}>일정</h1>
            <h1 className={detailSytle.scheduleContent}>일시 : {detail.date} </h1>
            <h1 className={detailSytle.scheduleContent}>장소 : {local?.localName} {detail.hobbyPlace}</h1>
            <h1 className={detailSytle.scheduleContent}>시간 : {detail.startTime} ~ {detail.endTime}</h1>
            <h1 className={detailSytle.scheduleContent}>인원 : {detail.maxPersonnel}명</h1>
            <h1 className={detailSytle.scheduleContent}>가격 : {detail.hobbyPrice} 원</h1>
            {/* <button className={detailSytle.likeBtn}>찜</button> */}
        </div>
    )

}

export default HobbySchedule;