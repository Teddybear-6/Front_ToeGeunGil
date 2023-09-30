import { useEffect, useState, useCallback } from "react";
import { useLocation } from 'react-router-dom';
import SocialMainCard from '../components/SocialMainCard';
import Paging from '../components/component/Paging';

function SocialSearch() {

    const [social, setSocial] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();
    const title = useLocation().state

    useEffect(() => {

        //소셜 검색
        fetch(process.env.REACT_APP_URL + `/socials/search?hobbytitle=${title}&page=${page - 1}&size=12`)
            .then((response) => response.json())
            .then((data) => setSocial(data))

        //소셜 검색 size
        fetch(process.env.REACT_APP_URL + `/socials/search/size?hobbytitle=${title}`)
            .then(res => res.json())
            .then(res => setPageCount(res))

    }, [page, title]);

    const setPage = useCallback((page) => {
        setPages(page)
    })

    return (
        <>
            <div className='toegeungillayout'>
                <SocialMainCard socials={social}></SocialMainCard>
            </div>
            <div>
                <Paging count={pageCount} setPage={setPage} page={page} />
            </div>
        </>
    )
}

export default SocialSearch;