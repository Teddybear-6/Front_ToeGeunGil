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
                        <th>나의리뷰</th>
                        <th>수강취소현황</th>
                        <th>문의내역</th>
                    </tr>
                </thead>
            </table>
            </div>
        
            <div class="row">
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
            </div>

        


        

            <div class="footer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. 
            Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. 
            Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. 
            In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.

            Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. 
            Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. 
            In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent.
            Porttitor rhoncus dolor purus non enim praesent</p>
            </div> 


        </>
    ) 
}

export default Mypage;