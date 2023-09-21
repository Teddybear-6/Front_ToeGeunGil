import { useState, useEffect ,useCallback } from "react"
import jwt_decode from "jwt-decode";
import TutorHobbyMain from "./tutotHobbyMain";
import Paging from "../../hobby/components/Paging";
function TutorHobbyList(){
    const [tutor,setTutor]= useState();
    const [hobby , setHobby] =useState();
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();

  useEffect(()=>{
    if (sessionStorage.getItem("Authorizaton")) {
        setTutor(jwt_decode(sessionStorage.getItem("Authorizaton")))
        
      }
    
    
        fetch(process.env.REACT_APP_URL+`/hobbys/tutor?page=${page - 1}&size=12`,{
            method:"GET",
            headers: {
                "Authorization": sessionStorage.getItem("Authorizaton")
              },
        }).then(res=>res.json()).then(res=>setHobby(res)).then(fetch(process.env.REACT_APP_URL+`/hobbys/tutorlist/size/${tutor?.no}`).then(res => res.json()).then(res => setPageCount(res)))
        .catch((e)=>console.log(e))
       
       
  },[page,pageCount])
  const setPage = useCallback(
    (page) => {
        setPages(page)
    }
)

  return(
    <>
      <div className='layout'>
    <div style={{display:"flex" , flexDirection:"row", flexWrap : "wrap"}}>
    {
    !tutor ? "로그인 해주세요" : !tutor?.auth[0]==="TUTOR" ? "강사가 아닙니다." :
    <> 
    <TutorHobbyMain hobbys={hobby}/>
     <button className="writeButton"> 작성하기</button> 
      
     </>
    
    }
    </div>

   <Paging count={pageCount} setPage={setPage} page={page} />
    </div>
    </>
  )
}

export default TutorHobbyList;