import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom'
import HobbyMain from '../components/hobbyMain'
import AllHobbyCss from './AllHobby.module.css'
import Paging from '../components/Paging';
import '../../layout/layout.css';

function AllHobby({ localfilters }) {
    const [hobby, setHobby] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();

    console.log(localfilters)
    useEffect(() => {
        if (localfilters === "0" || localfilters === undefined || localfilters === null) {
            fetch(process.env.REACT_APP_URL + `/hobbys?page=${page - 1}&size=12`).then((response) => response.json()).then((data) =>
                setHobby(data))
            fetch(process.env.REACT_APP_URL + `/hobbys/size`).then(res => res.json()).then(res => setPageCount(res)).catch(e => console.log(e))
        } else {
            fetch(process.env.REACT_APP_URL + `/hobbys/local/${localfilters}?page=${page - 1}&size=12`).then((response) => response.json()).then((data) =>
                setHobby(data)).catch(e => console.log(e))
            fetch(process.env.REACT_APP_URL + `/hobbys/local/size/${localfilters}`).then(res => res.json()).then(res => setPageCount(res)).catch(e => console.log(e))
        }

    }, [page, localfilters])

    const setPage = useCallback(
        (page) => {
            setPages(page)
        }
    )


    return (
        <>
            {!hobby ? (
                "등록된 취미가 없습니다."
            ) : (
                <>
                    <div className="toegeungillayout">
                        <HobbyMain hobbys={hobby}></HobbyMain>
                    </div>
                    <div className={AllHobbyCss.paging}>
                        <Paging count={pageCount} setPage={setPage} page={page} />
                    </div>
                </>
            )}
        </>
    )
}

export default AllHobby;