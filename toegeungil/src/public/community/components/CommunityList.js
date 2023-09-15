import React, { useState, useEffect } from "react";
import CommunityLocation from "./CommunityLocation";
import CommunityKeyword from "./CommunityKeyword";
import '../pages/CommunityMain.css';

const CommunityList = () => {
    const [communityList, setCommunityList] = useState([]);

    const getCommunityList = () => {
        fetch('http://localhost:8001/communitys')
        .then((response) => response.json())
        .then((data) => {
            setCommunityList(data);
        });
    };

    useEffect(() => {
        getCommunityList();
    },[]);

    const viewCommunity = (communityNum) => {
        window.location.href = `/communitys/${communityNum}`;
    };

    return(
        <div>
            <table className="community-main">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>지역</th>
                        <th>키워드</th>
                    </tr>
                </thead>
                <tbody>
                {communityList.length > 0 &&
                    communityList.map((community) => (
                        <tr className="community-list-row"
                            key={community.communityNum}
                            onClick={() => viewCommunity(community.communityNum)}
                        >   
                            <td class = "table-space">{community.communityNum}</td>
                            <td>{community.communityTitle}</td>
                            <td>{community.userNum}</td>
                            <td>
                                <CommunityLocation localCode={community.locationNum} />
                            </td>
                            <td>
                                <CommunityKeyword keywordCode={community.CommunityKeywordDTOList}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <button className="community-regist-button">커뮤니티 글 작성</button>
        </div>
    );
}

export default CommunityList;
