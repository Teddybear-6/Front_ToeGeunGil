import { useState, useEffect, useCallback } from 'react';
import HobbyMain from '../components/hobbyMain'
import AllHobbyCss from './AllHobby.module.css'
import Paging from '../components/Paging';
import '../../layout/layout.css';
import { useLocation } from 'react-router-dom';
function HobbySearch() {
    const [hobby, setHobby] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();
    const title = useLocation().state

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/hobbys/search?hobbytitle=${title}&page=${page - 1}&size=12`).then((response) => response.json()).then((data) => { return (setHobby(data["value"]), setPageCount(data["size"])) })

    }, [page, title])

    const setPage = useCallback(
        (page) => {
            setPages(page)
        }
    )


    return (
        <>

            <div className="menuFont">Hobby - '{title}' 전체 결과</div>
            <hr className='hrSty marB50' />
            {!hobby ? "검색결과가 없습니다." :
                <HobbyMain hobbys={hobby}></HobbyMain>
            }


            <div className={AllHobbyCss.paging}>
                <Paging count={pageCount} setPage={setPage} page={page} />

            </div>

        </>
    )
}

export default HobbySearch;