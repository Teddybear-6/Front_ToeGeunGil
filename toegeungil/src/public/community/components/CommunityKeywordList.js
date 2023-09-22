import { useState, useEffect } from "react";
import PostingStyle from "./css/CommunityPosting.module.css";



function CommunityKeywordList({ keyword, setCommunity, setKeyword, community, communityKeywordDTOList, setCommunityKeywordDTOList, communityKeyword }) {

    useEffect(() => {
        keywordHandler()
        setCommunityKeywordDTOList(communityKeyword)
    }, [communityKeyword]);

    //키워드 불러오기 (기존 값)
    const keywordHandler = () => {
        const selectBox = document.getElementsByName("keywordCode");
        for (let j = 0; j < community.communityKeywordDTOList?.length; j++) {
            selectBox[community.communityKeywordDTOList[j].keywordCode - 1].checked = true;
        }
    };

    const keywordChangeHandler = (checked, id) => {
        if (checked) {
            setCommunityKeywordDTOList(communityKeywordDTOList => [...communityKeywordDTOList, { "keywordCode": id }])
        } else {
            setCommunityKeywordDTOList(communityKeywordDTOList.filter(el => el.keywordCode !== id))
        }
    };

    return (
        <>
            {
                !keyword.map ? "키워드가 없습니다." : keyword.map((m, index) => {
                    return (
                        <label htmlFor="keywordCode">
                            <div className={PostingStyle.communityKeywordFont}>
                                <input key={index} type="checkbox" name="keywordCode" value={m.keywordCode}
                                    onChange={(e) => { keywordChangeHandler(e.currentTarget.checked, m.keywordCode) }} />
                                <div>{m.keywordName}</div>
                            </div>
                        </label>
                    )
                })
            }
        </>
    )
}

export default CommunityKeywordList;