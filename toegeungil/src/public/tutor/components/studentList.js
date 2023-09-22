import { useState, useEffect } from "react";
import StudentListTr from "./studentListTd,js";
import { useLocation } from "react-router-dom"
function StudentList(){
    const [joinuser, setJoinuser] = useState([]);

    const hobbyCode = useLocation();
    useEffect(()=>{

  
        getJoinuser(hobbyCode?.state?.hobbyCode);

   
    },[])
    // console.log(hobbyCode.state.hobbyCode)

    const getJoinuser = (hobbyCode) => {
        console.log(hobbyCode)
        fetch(process.env.REACT_APP_URL + `/hobbys/joinuser/${hobbyCode}`)
            .then(response => response.json()) //json으로 받는다
            .then(data => setJoinuser(data)).catch(e => console.log(e))
    }

     console.log(joinuser)
    return (
        <div className='layout'>
            <div className="notice-wrapper">
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
            </div >
        </div>
    )
}

export default StudentList;