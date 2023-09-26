import { useState, useEffect, useCallback } from 'react';
import SocialMain from './SocialMain';
import MainStyle from '../components/css/SocialMainCard.module.css';
import { useLocation } from 'react-router-dom';
import Paging from '../components/component/Paging';
import '../../layout/layout.css';
import SocialMainCard from '../components/SocialMainCard';
import { Link } from "react-router-dom";
import { Navbar } from 'react-bootstrap';

function SocialCategory() {

    const [socials, setSocials] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();
    const cagegoryCode = useLocation().state

    useEffect(() => {

        fetch(process.env.REACT_APP_URL + `/socials/category/${cagegoryCode}?page=${page - 1}&size=12`)
            .then((response) => response.json())
            .then((data) => setSocials(data))

        fetch(process.env.REACT_APP_URL + `/socials/category/${cagegoryCode}/size`)
            .then(res => res.json())
            .then(res => setPageCount(res))

    }, [cagegoryCode, page])

    const setPage = useCallback(
        (page) => {
            setPages(page)
        }
    )

    return (
        <>
            {!socials ? "등록된 취미가 없습니다." :
                <div className='toegeungillayout'>
                    <SocialMainCard socials={socials}></SocialMainCard>
                    <Paging count={pageCount} setPage={setPage} page={page} />
                </div>
            }
        </>
    )
}

export default SocialCategory;