import React, { useState, useEffect } from "react";
import CommunityLocation from "./CommunityLocation";
import CommunityKeyword from "./CommunityKeyword";
import '../components/css/CommunityMain.css';
import { Link } from "react-router-dom";
import UserNickName from "./UserNickName";

const CommunityList = () => {
    const [communityList, setCommunityList] = useState([]);

    const getCommunityList = () => {
        fetch(process.env.REACT_APP_URL + "/communitys")
            .then((response) => response.json())
            .then((data) => {
                setCommunityList(data);
            });
            console.log(communityList);

    };

    useEffect(() => {
        getCommunityList();
        console.log(communityList);
    }, []);

    const viewCommunity = (communityNum) => {
        window.location.href = `/communitys/${communityNum}`;
    };

    return (
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
                                <td>{community.communityNum}</td>
                                <td>{community.communityTitle}</td>
                                <td>
                                    <UserNickName userNo={community.userNum} />
                                </td>
                                <td>
                                    <CommunityLocation localCode={community.localCode} />
                                </td>
                                <td>
                                    {community.communityKeywordDTOList?.map((m, index) => (
                                        <CommunityKeyword key={index} code={m}/>
                                    ))}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <Link to={"/communitys/write"}>
                <button className="community-regist-button" >커뮤니티 글 작성</button>
            </Link>
        </div>
    );
}

export default CommunityList;
