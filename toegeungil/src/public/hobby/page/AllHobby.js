import { useState, useEffect, useCallback } from 'react';
import HobbyMain from '../components/hobbyMain'
import AllHobbyCss from './AllHobby.module.css'
import Paging from '../components/Paging';
import '../../layout/layout.css';

function AllHobby({ localfilters }) {
    const [hobby, setHobby] = useState([]);
    const [page, setPages] = useState();
    const [pageCount, setPageCount] = useState();

    useEffect(() => {
        if (localfilters === "0" || localfilters === undefined || localfilters === null) {
            fetch(process.env.REACT_APP_URL + `/hobbys?page=${page - 1}&size=12`).then((response) => response.json()).then((data) => { return (setHobby(data["value"]), setPageCount(data["size"])) })
        } else {
            fetch(process.env.REACT_APP_URL + `/hobbys/local/${localfilters}?page=${page - 1}&size=12`).then((response) => response.json()).then((data) => { return (setHobby(data["value"]), setPageCount(data["size"])) })

        }

    }, [page, localfilters])
    const setPage = useCallback(
        (page) => {
            setPages(page)
        }
    )

    return (
        <>
            <div className="toegeungillayout">
                {!hobby ? "등록된 취미가 없습니다." :
                    <HobbyMain hobbys={hobby}></HobbyMain>
                }

            </div >
            <div className={AllHobbyCss.paging}>
                <Paging count={pageCount} setPage={setPage} page={page} localfilters={localfilters} />
            </div>


        </>
    )
}

export default AllHobby;