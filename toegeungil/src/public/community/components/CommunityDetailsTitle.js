import { useEffect, useState } from "react";
import DetailsTitleStyle from './css/CommunityDetailsTitle.module.css';
import CommunityLocation from "./CommunityLocation";


const CommunityDetailsTitle = () => {
    const [community, setCommunitys] = useState([]);

    const getCommunitys = () => {
        fetch(`http://localhost:8001/communitys/2`)
        .then((response) => response.json())
        .then((data) => {
            setCommunitys(data);
        });
    };

    useEffect(() => {
        getCommunitys();
    },[]);

    return(
        <>
            <div className={DetailsTitleStyle.title}>
                <div>
                    <div className={DetailsTitleStyle.communityTitleBoard}>
                        <div className={DetailsTitleStyle.communityTitleName}>{community.communityTitle}</div>
                        <div className={DetailsTitleStyle.keyword}></div>
                        <div className={DetailsTitleStyle.communityLocal}>
                            <CommunityLocation localCode={community.locationNum}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CommunityDetailsTitle;