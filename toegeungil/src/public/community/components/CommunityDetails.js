import { useEffect, useState } from "react";
// import CommunityLocation from "./CommunityLocation";
import DetailsStyle from './css/CommunityDetails.module.css';
import UserNickName from "./UserNickName";

const CommunityDetails = () => {
    const [community, setCommunitys] = useState([]);
    const [userNum, setUserNum] = useState(null);

    const getCommunitys = () => {
        fetch(`http://localhost:8001/communitys/9`)
        .then((response) => response.json())
        .then((data) => {
            setCommunitys(data);
            setUserNum(data.userNum);
        });
    };

    useEffect(() => {
        getCommunitys();
    },[]);

    return(
        <>
            <div className={DetailsStyle.Details}>
                <div className={DetailsStyle.CommunityDetailsWriter}>
                    <div className={DetailsStyle.CommunityDetailsNick}>
                        {userNum !== null && <UserNickName userNo={userNum}/>}
                    </div>
                    <div className={DetailsStyle.CommunityDetailsIntroBox}>
                        <div className={DetailsStyle.CommunityDetailsIntro}>{community.communityIntro}</div>
                </div>
                </div>
                </div>
        </>
    )



}    

export default CommunityDetails;