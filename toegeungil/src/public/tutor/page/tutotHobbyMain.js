import { useState, useEffect } from "react"
import { Link} from "react-router-dom";

import HobbyCard from "../../hobby/components/hobbyCard";
import "./tutorMain.css"
import '../../layout/layout.css';
function TutorHobbyMain({ hobbys, setHobby , api}) {


    useEffect(()=>{
    },[hobbys])

    const close = (hobbyCode) => {
        if (window.confirm("마감하시겠습니까?")) {
            fetch(process.env.REACT_APP_URL + `/hobbys/close/${hobbyCode}`, {
                method: "PUT"
            }).then(res => {
                if (res.status == 200) {
                    api();
                    alert("마감처리 되었습니다.")
                }
            })
        }
    }

    const deleteApi = (hobbyCode) => {
        console.log("hobbyCode = " + hobbyCode)
        if (window.confirm("삭제하시겠습니까?")) {
            fetch(process.env.REACT_APP_URL + `/hobbys/${hobbyCode}`, {
                method: "DELETE",
                headers: {
                    "Authorization": sessionStorage.getItem("Authorizaton")
                },
            }).then(res => res.json()).then(res=> {
                console.log(res)
                setHobby(hobbys.filter(code => code.hobbyCode != hobbyCode));
                alert(res['value'])
            })
        }
    }

        return (
            <>

                {hobbys?.map((hobby, index) => (
                    <>
                        <div>
                            <HobbyCard hobbys={hobby} key={index} />
                            <div className="btnframe">
                                <Link to="/hobbymodify" type="button" className="buttonOn " state={{ "hobbyCode": hobby.hobbyCode }}>수정</Link>
                                <button className="buttonOn mar" onClick={()=>deleteApi(hobby.hobbyCode)}>삭제</button>
                                {
                                    hobby.close === "Y" ? null : <button onClick={() => close(hobby.hobbyCode)} className="buttonOn mar">마감</button>
                                }
                            </div>
                        </div>
                    </>
                ))}

            </>

        )
    }
    export default TutorHobbyMain;