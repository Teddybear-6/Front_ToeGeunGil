import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import CommunityLocation from "./CommunityLocation";
import DetailsStyle from './css/CommunityDetails.module.css';
import UserNickName from "./UserNickName";
import jwt_decode from "jwt-decode";



const CommunityDetails = () => {
    const { communityNum } = useParams();
    const [community, setCommunitys] = useState([]);
    const [userNum, setUserNum] = useState(null);
    const [user, setUser] = useState();

    const getCommunitys = () => {
        fetch(process.env.REACT_APP_URL + `/communitys/${communityNum}`)
            .then((response) => response.json())
            .then((data) => {
                setCommunitys(data);
                setUserNum(data.userNum);
            });
    };

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    }, [community]);

    const deleteApi = (communityNum) => {
        console.log(communityNum)
        if (window.confirm("커뮤니티글을 삭제하시겠습니까?")) {
            fetch(process.env.REACT_APP_URL + `/communitys/${communityNum}`, {
                method: "DELETE",
                headers: {

                },
            }).then(res => res.json()).then(res => {
                console.log(res)
                setCommunitys(community.filter(code => code.communityNum != communityNum));
                alert(res['value'])
            })
        }
    }

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
            
            {(user && user.no === community.userNum) ? (
                <>
                    <Link to="/communitys/modify" state={{ "communitys": community }}>
                        <button className={DetailsStyle.CommunityModifyButton}>수정</button>
                    </Link>
                    <Link to="/communitys">
                        <button className={DetailsStyle.CommunityDeleteButton} onClick={() => deleteApi(community.communityNum)}>삭제</button>
                    </Link>
                </>
            ) : null}
        </>
    )



}

export default CommunityDetails;