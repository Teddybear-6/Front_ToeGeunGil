import { useState, useEffect } from "react";
import "../css/SocialPosting.css"


function SocialModifyKeyword({ keyword, setSocial, setKeyword, social, keywordDTOList, setKeywordDTOList, sicalKeyword }) {

    useEffect(() => {
        keywordHandler()
        setKeywordDTOList(sicalKeyword)
    }, [sicalKeyword]);

    //키워드 불러오기 (기존 값)
    const keywordHandler = () => {
        const selectBox = document.getElementsByName("keywordCode");
        for (let j = 0; j < social.keywordDTOList?.length; j++) {
            selectBox[social.keywordDTOList[j].keywordCode - 1].checked = true;
        }
    };

    const keywordChangeHandler = (checked, id) => {
        if (checked) {
            setKeywordDTOList(keywordDTOList => [...keywordDTOList, { "keywordCode": id }])
        } else {
            setKeywordDTOList(keywordDTOList.filter(el =>  el.keywordCode !== id))
        }
    };

    return (
        <>
            {
                !keyword.map ? "키워드가 없습니다." : keyword.map((m, index) => {
                    return(
                        <label htmlFor="keywordCode">
                            <div className="w216h50 posFlex">
                            <input className="checkSy" key={index} type="checkbox" name="keywordCode" value={m.keywordCode}
                                onChange={(e) => { keywordChangeHandler(e.currentTarget.checked, m.keywordCode) }} />
                            <div className="maL10 maT2">{m.keywordName}</div>
                            </div>
                        </label>
                    )
                })
            }
        </>
    )
}

export default SocialModifyKeyword;