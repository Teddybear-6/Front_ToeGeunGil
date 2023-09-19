import React, { useState } from 'react';
import axios from 'axios';
import SocialMainCard from '../components/SocialMainCard';
import '../../layout/layout.css';

function SocialMain() {
    /*
    Social 메인 페이지
    
    1.지역필터 - localName
    2.카테고리 - categoryName
    3.게시글카드 - imageName, socialName, keywordName
    4.게시글 작성 버튼 - 페이지 변경
    5.페이징 
    */


    return (
        <>
            <div className='layout'>
                <SocialMainCard />
            </div>
        </>
    );
}

export default SocialMain;
