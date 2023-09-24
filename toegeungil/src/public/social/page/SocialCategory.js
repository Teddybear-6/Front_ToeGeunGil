import { useState, useEffect, useCallback } from 'react';
import SocialMain from './SocialMain';
import MainStyle from '../components/css/SocialMainCard.module.css';
import { useLocation } from 'react-router-dom';
import Paging from '../components/component/Paging';
import '../../layout/layout.css';

function SocialCategory() {

    const [hobby, setHobby] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();
    const cagegoryCode = useLocation().state

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/hobbys/category/${cagegoryCode}?page=${page - 1}&size=12`).then((response) => response.json()).then((data) =>
            setHobby(data))
        fetch(process.env.REACT_APP_URL + `/hobbys/category/size/${cagegoryCode}`).then(res => res.json()).then(res => setPageCount(res))
    }, [cagegoryCode, page])

    const setPage = useCallback(
        (page) => {
            setPages(page)
        }
    )

    return (
        <>
        </>
    )
}

export default SocialCategory;