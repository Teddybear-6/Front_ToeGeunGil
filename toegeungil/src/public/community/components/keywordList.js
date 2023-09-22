import { useState, useEffect } from "react";

function KeywordList({ keyword, community, setCommunity, keywordDTOList, setKeywordDTOList, communityKeyword }) {


    useEffect(() => {
        keywordHandler()
        setKeywordDTOList(communityKeyword)
    }, [communityKeyword])

    const keywordHandler = () => {
        const selectBox = document.getElementsByName("keywordCode")
        for (let j = 0; j < community.keywordDTOList?.length; j++) {

            selectBox[community.keywordDTOList[j].keywordCode - 1].checked = true;

        }

    }

    const keywordChangeHander = (checked, id) => {
        if (checked) {

            setKeywordDTOList(keywordDTOList => [...keywordDTOList, { "keywordCode": id }])

        } else {
            setKeywordDTOList(keywordDTOList.filter(el => el.keywordCode !== id))




        }
    };


    console.log(keywordDTOList)
    return (
        <>
            {/* { !keyword ? null :keywordHandler()} */}
            {
                !keyword.map ? "키워드가 없습니다." : keyword.map((m, index) => (
                    <label htmlFor="keywordCode"><input className="keywordCheck" key={index}
                        type="checkbox" name="keywordCode" value={m.keywordCode}
                        onChange={(e) => { keywordChangeHander(e.currentTarget.checked, m.keywordCode) }}

                    />{m.keywordName}</label>
                ))

            }
        </>
    )






}

export default KeywordList;