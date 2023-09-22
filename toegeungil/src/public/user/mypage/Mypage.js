import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import './mypage.css'; 

const Mypage =()=>{
    const[action, setAction] = useState("Mypage");
    return(
        <>
        <div className="container">
            <div className="header">
                <div className="text">Mypage</div>
                <div className="underline"></div>
            </div>
        </div>
            <div>
            <table className="community-main">
                <thead>
                    <tr>
                        <th>수강현황</th>
                        <th>나의수강리뷰</th>
                        <th>수강취소현황</th>
                        <th>찜리스트</th>
                        <th>문의내역</th>
                    </tr>
                </thead>
            </table>
            </div>
        
            <div class="row">
            <div class="column">수강현황</div>
        
                {/* <button type="text"onChange={onChangeClumn} placeholder="onChangeClumn"></button> */}
            <div class="column" >나의수강리뷰</div>
            <div class="column" >수강취소현황</div>
            <div class="column" >찜리스트</div>
            <div class="column" >문의내역</div>
            </div>

           


        

            <div class="footer">
            <p>    FORUM ABOUT
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
                Copyright 1999-2023 by Refsnes Data. All Rights Reserved. W3Schools is Powered by W3.CSS.</p>
            </div> 


        </>
    ) 
}

export default Mypage;