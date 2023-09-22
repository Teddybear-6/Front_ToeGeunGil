import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SocialMainCard from '../components/SocialMainCard';
import '../../layout/layout.css';
import '../components/css/Button.css';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

function SocialMain() {
    /*
    Social 메인 페이지
    
    1.지역필터 - localName
    2.카테고리 - categoryName
    3.게시글카드 - imageName, socialName, keywordName
    4.게시글 작성 버튼 - 페이지 변경
    5.페이징 
    */

    const [user, setUser] = useState();

    useEffect(()=> {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    }, []);

    return (
        <>
            <div className='layout'>
                <SocialMainCard />
                {/* 회원만 글 작성 가능 */}
                {!user ? null : (!user?.auth[0] == "USER" ||  !user?.auth[0] == "TUTOR" || !user?.auth[0] == "ADMIN" ) ? "회원이 아닙니다." : 
                <Link to="write" type='button' className='writeButton mar'>게시글 작성</Link>}
                {/* <Paging count={pageCount} setPage={setPage} page={page} /> */}
            </div>
        </>
    );
}

export default SocialMain;