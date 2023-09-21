import React, { useState } from "react";
// {useNavigate} from 'react-router-dom'
// import './Mypage.css'; 

const Mypage =()=>{
    const[action, setAction] = useState("Mypage");
    return(
        <>
            <h1>마이페이지</h1>
            <form>
                <navbar>
                <button>Mypage </button> <button>나의수강현황</button> <button>나의수강리뷰</button> <button>수강취소</button>

                </navbar>
            </form>



        </>
    ) 
}

export default Mypage;