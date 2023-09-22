import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import CommunityLocation from "./CommunityLocation";
import DetailsStyle from './css/CommunityDetails.module.css';
import UserNickName from "./UserNickName";


const CommunityDetails = () => {
    const { communityNum } = useParams();
    const [community, setCommunitys] = useState([]);
    const [userNum, setUserNum] = useState(null);

    const getCommunitys = () => {
        fetch(process.env.REACT_APP_URL + `/communitys/${communityNum}`)
            .then((response) => response.json())
            .then((data) => {
                setCommunitys(data);
                setUserNum(data.userNum);
            });
    };

    useEffect(() => {
        getCommunitys();
    }, [communityNum]);

    return (
        <>
            <div className={DetailsStyle.Details}>
                <div className={DetailsStyle.CommunityDetailsWriter}>
                    <img className={DetailsStyle.CommunityParticipate} src="/participate.png" alt="participate" />
                    <div className={DetailsStyle.CommunityDetailsNick}>
                        {userNum !== null && <UserNickName userNo={userNum} />}
                    </div>
                    <div className={DetailsStyle.CommunityDetailsIntroBox}>
                        <div className={DetailsStyle.CommunityDetailsIntro}>{community.communityIntro}</div>
                    </div>
                </div>
            </div>
                <Link to="/communitys/modify" state={{ "communitys": community }}>
                    <button className={DetailsStyle.CommunityModifyButton}>수정</button>
                </Link>
        </>
    )



}

export default CommunityDetails;