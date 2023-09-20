import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SocialMainCard from '../components/SocialMainCard';
import '../../layout/layout.css';
import '../components/css/Button.css';
import { Link } from "react-router-dom";

function SocialMain() {
    /*
    Social 메인 페이지
    
    1.지역필터 - localName
    2.카테고리 - categoryName
    3.게시글카드 - imageName, socialName, keywordName
    4.게시글 작성 버튼 - 페이지 변경
    5.페이징 
    */

    // const [social, setSocial] = useState([]);
    // const [page, setPages] = useState(1);
    // const [pageCount, setPageCount] = useState();

    // useEffect(() => {
    //     fetch(process.env.REACT_APP_URL + `/socials?page=${page - 1}&size=12`).then((response) => response.json()).then((data) =>
    //     setSocial(data))

    //     fetch(process.env.REACT_APP_URL + `/socials/size`).then(res => res.json()).then(res => setPageCount(res))
    // }, [page])

    // const setPage = useCallback(
    //     (page) => {
    //         setPages(page)
    //     }
    // )


    return (
        <>
            <div className='layout'>
                <SocialMainCard />
                <Link to="write" type='button' className='writeButton mar'>게시글 작성</Link>
                {/* <Paging count={pageCount} setPage={setPage} page={page} /> */}
            </div>
        </>
    );
}

export default SocialMain;