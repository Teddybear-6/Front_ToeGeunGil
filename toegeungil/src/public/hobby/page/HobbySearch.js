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
      

        fetch(process.env.REACT_APP_URL+`/hobbys/search?hobbytitle=${title}&page=${page - 1}&size=12`).then((response) => response.json()).then((data) =>
            setHobby(data))

        fetch(process.env.REACT_APP_URL+`/hobbys/search/size?hobbytitle=${title}`).then(res => res.json()).then(res => setPageCount(res))
    }, [page,title])

    const setPage = useCallback(
        (page) => {
            setPages(page)
        }
    )


    return (
        <>
            <div className='layout'>

                <HobbyMain hobbys={hobby}></HobbyMain>
            </div>

            <div className={AllHobbyCss.paging}>
                <Paging count={pageCount} setPage={setPage} page={page} />

            </div>
        </>
    )
}

export default HobbySearch;