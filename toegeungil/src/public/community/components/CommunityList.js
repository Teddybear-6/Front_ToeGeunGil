import React from "react";
import { useState, useEffect } from "react";
import CommunityKeyword from "./CommunityKeyword";

const CommunityList = () => {
    const [CommunityList, setCommunityList] = useState([]);

    const getCommunityList = () => {
        fetch('http://localhost:8001/communitys')
        .then((response) => response.json())
        .then((data) => {
            setCommunityList(data);
        });
    };

    useEffect(() => {
        getCommunityList();
        console.log(CommunityList)
    },[]);

    return(
        <div>
            <table>
                {CommunityList.length > 0 &&
                    CommunityList.map((community) => (
                        <tr key = {community.communityNum}>
                            <td>{community.communityNum}</td>
                            <td>{community.communityTitle}</td>
                            <td>
                            {CommunityList?.map((keyword, index) => (
                            <CommunityKeyword key={index} keywordCode={keyword.keywordNum}/>
                            ))}
                            </td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}

export default CommunityList;