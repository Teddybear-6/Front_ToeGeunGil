import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../css/mypage.css';

const Mypage = () => {
    const [action, setAction] = useState("Mypage");
    return (
        <>
            <div className='toegeungillayout'>
                <div className="menuFont">Mypage</div>
                <hr className='hrSty' />
                <div className='layout2'>
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
                </div>
            </div>
        </>
    )
}

export default Mypage;