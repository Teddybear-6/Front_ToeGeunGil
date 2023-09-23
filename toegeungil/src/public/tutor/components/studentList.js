import { useState, useEffect } from "react";
import StudentListTr from "./studentListTd.js";
import { useLocation } from "react-router-dom"
import "./studentList.css"

function StudentList(){
    const [joinuser, setJoinuser] = useState([]);
    const [local, setLocal] = useState();
    const hobby = useLocation();
    useEffect(()=>{
        getJoinuser(hobby?.state?.hobby.hobbyCode);
        findLocal(hobby?.state?.hobby.localCode)
   
    },[])

    const findLocal =(localCode)=>{
        fetch(process.env.REACT_APP_URL +`/local/${localCode}`).then(res=>res.json()).then(res=>setLocal(res));
    }



    const getJoinuser = (hobbyCode) => {
        fetch(process.env.REACT_APP_URL + `/hobbys/joinuser/${hobbyCode}`)
            .then(response => response.json()) //json으로 받는다
            .then(data => setJoinuser(data)).catch(e => console.log(e))
    }

    
    return (
       <div className="layout">
       <div className="studentListTitleframe">
                <p className="title">{hobby?.state?.hobby.hobbyTitle}</p>
            </div>

            <div className="studentscheduleframe">
                <div className="student magin">
                    <p className="title">수강인원: {joinuser?.length}  명</p>
                </div>
                <div className="student magin">
                    <p className="title">일정 : {hobby?.state?.hobby.data} {hobby?.state?.hobby.startTime} ~ {hobby?.state?.hobby.endTime}</p>
                </div>

            </div>
            <div className="studentplace">
                <p className="title">장소 : {local?.localName}  {hobby?.state?.hobby.hobbyPlace} </p>
            </div>
       
       
 

        <div className='layout'>
            <div className="notice-wrapper">
            <div className="studetn">
                <table className="table-wrapper">
             
                    <thead>
                        <tr>
                       
                            <th>수강생 번호</th>
                            <th>닉네임</th>
                            <th>이름</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                           joinuser.length==0 ? "수강생이 없습니다." : joinuser.map((user) => (
                           
                                <tr key={user.joinNum}>   
                                   <StudentListTr userNo={user.userNo}></StudentListTr>
                                </tr>
                               
                            ))
                        }
                    </tbody>
             
               
                </table>
                </div>
            </div >
        </div>
  
        </div>

    )
}

export default StudentList;