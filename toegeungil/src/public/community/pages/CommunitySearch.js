import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Paging from "../components/Paging";

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
        }).then(res => setCommunity(res))

        fetch(process.env.REACT_APP_URL + `/communitys/search/size?communityTitle=${communityTitle}`)
        .then(res => res.json())
        .then(res => setPageCount(res))
    }, [page, communityTitle]);

    const setPage = useCallback((page) => {
        setPages(page)
    })

    return(
        <>
            
        </>
    )

}