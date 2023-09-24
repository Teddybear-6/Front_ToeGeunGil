import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SocialMainCard from '../components/SocialMainCard';
import '../../layout/layout.css';
import '../components/css/Button.css';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Paging from '../components/component/Paging';

function SocialMain() {
    /*
    Social 메인 페이지
    
    1.지역필터 - localName
    2.카테고리 - categoryName
    3.게시글카드 - imageName, socialName, keywordName
    4.게시글 작성 버튼 - 페이지 변경
    5.페이징 
    */

    const [socials, setSocials] = useState([]); //(배열:빈 값이 들어가 있기에 null 이 아니라 값을 비교?)
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();

    const [user, setUser] = useState(); //(객체:!user)권한 회원 정보

    useEffect(()=> {

        //권한설정
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    
        //paging
        fetch(process.env.REACT_APP_URL+`/socials?page=${page - 1}&size=12`)
        .then((response) => response.json())
        .then((data) => setSocials(data))

        fetch(process.env.REACT_APP_URL+`/socials/size`)
        .then(res => res.json())
        .then(res => setPageCount(res))

    }, [page]);


    const setPage = useCallback(
        (page) => {
            setPages(page)
        }
    )

    return (
        <>
            <div className='toegeungillayout'>
                <SocialMainCard socials={socials}/>
                {/* 회원만 글 작성 가능 */}
                {!user ? null : 
                <Link to="write" type='button' className='writeButton mar'>게시글 작성</Link>}
                <Paging count={pageCount} setPage={setPage} page={page} />
            </div>
        </>
    );
}

export default SocialMain;