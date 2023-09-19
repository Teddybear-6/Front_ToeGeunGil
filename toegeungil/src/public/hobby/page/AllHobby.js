import { useState, useEffect, useCallback } from 'react';
import HobbyMain from '../components/hobbyMain'
import AllHobbyCss from './AllHobby.module.css'
import Paging from '../components/Paging';
import '../../layout/layout.css';
function AllHobby() {
    const [hobby, setHobby] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();

    useEffect(() => {


        fetch(`http://localhost:8001/hobbys?page=${page - 1}&size=12`).then((response) => response.json()).then((data) =>
            setHobby(data))

        fetch(`http://localhost:8001/hobbys/size`).then(res => res.json()).then(res => setPageCount(res))
    }, [page])

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

export default AllHobby;