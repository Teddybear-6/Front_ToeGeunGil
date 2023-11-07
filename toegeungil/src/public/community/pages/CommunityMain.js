import CommunityList from "../components/CommunityList";
import "../../layout/layout.css";
import { useCallback, useEffect, useState } from "react";
import Paging from "../components/Paging";
import jwtDecode from "jwt-decode";


function CommunityMain({localfilters}) {
    const [community, setCommunity] = useState([]);
    const [page, setPages] = useState(1);
    const [pageCount, setPageCount] = useState();

    const [user, setUser] = useState();

    useEffect(() => {
        if(sessionStorage.getItem("Athorization")){
            setUser(jwtDecode(sessionStorage.getItem("Authorization")))
        }
        
        if(localfilters === "0" || localfilters === undefined || localfilters === null){
            fetch(process.env.REACT_APP_URL +  `/communitys?page=${page - 1}&size=12`)
            .then((response) => response.json())
            .then((data) => setCommunity(data))

            fetch(process.env.REACT_APP_URL + `/communitys/size`)
            .then((response) => response.json())
            .then((response) => setPageCount(response))
        } else{
            fetch(process.env.REACT_APP_URL + `/communitys/local/${localfilters}?page=${page - 1}&size=12`)
            .then((response) =>  response.json())
            .then((data) => setCommunity(data))

            fetch(process.env.REACT_APP_URL + `/communitys/local/${localfilters}/size`)
            .then((response) => response.json())
            .then((response) => setPageCount(response))
        }
    }, [page], localfilters);

    const setPage = useCallback(
        (page) => {
            setPages(page)
        }
    )

    return (
        <>
            <div className='toegeungillayout'>
                <CommunityList />
            </div>
            <Paging count={pageCount} setPage={setPage} page={page} localfilters={localfilters}/>
        </>
    );
}

export default CommunityMain;
