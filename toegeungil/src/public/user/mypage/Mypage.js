import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './mypage.css';

const Mypage = () => {
    const [action, setAction] = useState("Mypage");
    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="text">Mypage</div>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="mypage-main">
                <table >
                    <thead>
                        <tr>
                            <th>수강현황</th>
                            <th>나의리뷰</th>
                            <th>수강취소현황</th>
                            <th>문의내역</th>
                        </tr>
                    </thead>
                </table>
            </div>

            {/* <div class="row">
            <div class="column">수강현황
                <ul>
                <li>HTML</li>
                <li>css</li>
                <li>java</li>
                <li>spring</li>
                </ul>
            </div>
            <div class="column" >나의리뷰
            <ul>
                <li>재미없어요</li>
                <li>어려워요</li>
                <li>꿀꿀해요</li>
                <li>슬퍼요</li>
                </ul>
            </div>
            <div class="column" >수강취소현황
            <ul>
                <li>취소불가</li>
                <li>취소완료</li>
                <li>취소불가</li>
                <li>취소완료</li>
                </ul>
            </div>
            <div class="column" >문의내역
            <ul>
                <li>환불원함</li>
                <li>환불원함</li>
                <li>환불원함</li>
                <li>환불원함</li>
                </ul>
            </div>
            </div> */}






            {/* <div class="footer">
            <p>    FORUM ABOUT
                W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.
                Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
                of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
                Copyright 1999-2023 by Refsnes Data. All Rights Reserved. W3Schools is Powered by W3.CSS.</p>
            </div>  */}


        </>
    )
}

export default Mypage;