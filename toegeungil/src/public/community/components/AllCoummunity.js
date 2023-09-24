import { useEffect, useState } from "react";
import CommunityMain from "../pages/CommunityMain";

function AllCommunity() {
    const [community, setCommunity] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + "communitys").then((response) => response.json()).then((data) => setCommunity(data))
    }, []);

    return (
        <div>
            <CommunityMain communitys={community}></CommunityMain>
        </div>
    )
}

export default AllCommunity;