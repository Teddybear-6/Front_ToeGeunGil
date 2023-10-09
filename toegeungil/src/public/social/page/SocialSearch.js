import { useEffect, useState, useCallback } from "react";
// import { useLocation } from 'react-router-dom';
import SocialMainCard from '../components/SocialMainCard';
import Paging from '../components/component/Paging';

function SocialSearch({ socialName }) {

    const [social, setSocial] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();

    // const socialName = useLocation().state

    // const [socialName, setSocialName] = useState(
    //     useLocation.state?.socialName
    // );

    useEffect(() => {

        //소셜 검색
        //http://localhost:8001/socials/size?socialName=%EC%97%AC%EB%A6%84
        fetch(process.env.REACT_APP_URL + `/socials/search?socialName=${socialName}&page=${page - 1}&size=12`)
            .then((response) => response.json())
            .then((data) => setSocial(data));

        //소셜 검색 size
        //http://localhost:8001/socials/search/size?socialName=%EC%97%AC%EB%A6%84
        fetch(process.env.REACT_APP_URL + `/socials/search/size?socialName=${socialName}`)
            .then(res => res.json())
            .then(res => setPageCount(res))

    }, [page, socialName]);

    const setPage = useCallback((page) => {
        setPages(page)
    })

    console.log("social : ", social)
    console.log(social.length)
    console.log("socialName(검색어) : ", socialName)

    return (
        <>
            <div className='toegeungillayout'>
                {
                    !(social === null) ? <div>검색결과가 없습니다.</div> : (<SocialMainCard socials={social} />)
                }
            </div>
            <div>
                <Paging count={pageCount} setPage={setPage} page={page} />
            </div>
        </>
    )
}

export default SocialSearch;