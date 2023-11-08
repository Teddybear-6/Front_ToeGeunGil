import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Paging from "../components/Paging";

function CommunitySearch(){
    const [community, setCommunity] = useState([]);
    const [page, setPage] = useState(1);
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
    })
}