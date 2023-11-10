import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Paging from "../components/Paging";
import CommunityList from '../components/CommunityList';

function CommunitySearch(){
    const [community, setCommunity] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();

    const communityTitle = useLocation().state

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/communitys/search?communityTitle=${communityTitle}&page=${page - 1}&size=12`)
        .then(response => {
            if(response.status === 500){
                setCommunity(null)
            }else{
                return response.json();
            }
        }).then((response) => setCommunity(response))

        fetch(process.env.REACT_APP_URL + `/communitys/search/size?communityTitle=${communityTitle}`)
        .then(response => response.json())
        .then(response => setPageCount(response))
    }, [page, communityTitle]);

    const setPage = useCallback((page) => {
        setPages(page)
    })

    return(
        <>
                <div className="menuFont">Community - '{communityTitle}' 전체 결과</div>
                {
                    !community ? <div>검색결과가 없습니다.</div> : (<CommunityList community={community}/>)
                }
                {
                    !community ? null : <Paging count={pageCount} setPage={setPage} page={page}/>
                }
        </>
    )

}

export default CommunitySearch;