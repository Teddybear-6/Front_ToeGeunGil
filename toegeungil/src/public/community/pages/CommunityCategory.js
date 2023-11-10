import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Paging from "../components/Paging";
import CommunityCategory from "../components/CommunityCategory";
import jwtDecode from "jwt-decode";
import CommunityList from "../components/CommunityList";

function CommunityCategory({ localfilters }) {
    const [community, setCommunity] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();
    const categoryCode = useLocation().state;


    useEffect(() => {
        if(sessionStorage.getItem("Authorization")){
            setUser(jwtDecode(sessionStorage.getItem("Authorization")))
        }

        if (localfilters === "0" || localfilters === undefined || localfilters === null) {
            fetch(process.env.REACT_APP_URL + `/communitys/category/${categoryCode}?page=${page - 1}&size=12`)
                .then((response) => response.json())
                .then((data) => setCommunity(data));

            fetch(process.env.REACT_APP_URL + `/communitys/category/${categoryCode}/size`)
                .then((response) => response.json())
                .then((response) => setPageCount(response));
        } else {
            fetch(process.env.REACT_APP_URL + `/communitys/category/${categoryCode}/local/${localfilters}?page=${page - 1}&size=12`)
                .then((response) => response.json())
                .then((response) => setCommunity(data));

            fetch(process.env.REACT_APP_URL + `/communitys/category/${categoryCode}/local/${localfilters}/size`)
                .then((response) => response.json())
                .then((response) => setPageCount(response));
        }
    }, [categoryCode, page, localfilters]);

    const setPage = useCallback(
        (page) => {
            setPage(page);
        }
    );


    return(
        <>
        <div>
            {!community ? <div>해당 게시글이 존재하지 않습니다.</div> : (
                <CommunityList community={community}/>
            )}
        </div>
        <Paging count={pageCount} setPage={setPage} page={page} categoryCode={categoryCode}/>
        </>
    );
}

export default CommunityCategory;