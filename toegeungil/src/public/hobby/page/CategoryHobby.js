import { useState, useEffect, useCallback } from 'react';
import HobbyMain from '../components/hobbyMain'
import AllHobbyCss from './AllHobby.module.css'
import Paging from '../components/Paging';
import { useLocation } from 'react-router-dom';
import '../../layout/layout.css';

function CategoryHobby() {

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

            {!hobby ? "등록된 취미가 없습니다." :
                <div>
                    <div className='toegeungillayout'>
                        <HobbyMain hobbys={hobby}></HobbyMain>
                    </div>
                    <div className={AllHobbyCss.paging}>
                        <Paging count={pageCount} setPage={setPage} page={page} />

                    </div>
                </div>
            }

        </>
    )
}

export default CategoryHobby;