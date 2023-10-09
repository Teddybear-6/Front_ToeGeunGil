import { useEffect, useState, useCallback } from "react";
import { useLocation } from 'react-router-dom';
import SocialMainCard from '../components/SocialMainCard';
import Paging from '../components/component/Paging';

function SocialSearch() {

    const [social, setSocial] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();
    const socialName = useLocation().state

    // const [socialName, setSocialName] = useState(
    //     useLocation.state?.socialName
    // );

    console.log("social : ", social)
    console.log("socialName : ", socialName)

    useEffect(() => {

        //소셜 검색
        http://localhost:8001/socials/size?socialName=%EC%97%AC%EB%A6%84
        fetch(process.env.REACT_APP_URL + `/socials/search?socialName=${socialName}&page=${page - 1}&size=12`)
            .then((response) => response.json())
            .then((data) => setSocial(data))

        //소셜 검색 size
        //http://localhost:8001/socials/search/size?socialName=%EC%97%AC%EB%A6%84
        fetch(process.env.REACT_APP_URL + `/socials/search/size?socialName=${socialName}`)
            .then(res => res.json())
            .then(res => setPageCount(res))

    }, [page, socialName]);

    const setPage = useCallback((page) => {
        setPages(page)
    })

    return (
        <>
            <div className='toegeungillayout'>
                {!social ? null :
                    <SocialMainCard socials={social}></SocialMainCard>
                }
            </div>
            <div>
                <Paging count={pageCount} setPage={setPage} page={page} />
            </div>
        </>
    )
}

export default SocialSearch;