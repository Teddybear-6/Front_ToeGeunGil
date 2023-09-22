import React, { useState, useEffect } from "react";
import PostingStyle from "./css/CommunityPosting.module.css";
import { Link } from "react-router-dom";

function CommunityPosting() {
    const [category, setCategory] = useState([]);
    const [keyword, setKeyword] = useState([]);
    const [communityKeywordDTOList, setCommunityKeywordDTOList] = useState([]);
    const [local, setLocal] = useState([]);

    const [community, setCommunity] = useState({
        userNum: 3,
        communityTitle: '',
        communityIntro: '',
        postWriteDate: new Date().toISOString(),
    });

    useEffect(() => {
        
        //카테고리 
        fetch(process.env.REACT_APP_URL + "/category")
            .then(res => res.json())
            .then(res => setCategory(res))

        //키워드
        fetch(process.env.REACT_APP_URL + "/keyword")
            .then(res => res.json())
            .then(res => setKeyword(res))

        //지역
        fetch(process.env.REACT_APP_URL + "/local")
            .then(res => res.json())
            .then(res => setLocal(res))

    }, []);

    const handleValueChange = (e) => {
        setCommunity({
            ...community,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        const blob = new Blob([JSON.stringify(community)], {
            type: 'application/json'
        });

        formData.append('community', blob);

        e.preventDefault();
        fetch(process.env.REACT_APP_URL + `/communitys`, {
            method: "POST",
            headers:{
            },
            body: formData
        })
            .then(response => {
                response.json()
                if (response.ok) {
                    alert("게시글 등록이 되었습니다.");
                } else {
                    alert("게시글 등록에 실패하였습니다.")
                }
            })
            .catch(error => {
                console.log(error);
                alert("에러가 발생하였습니다.");
            })
    };

    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName("categoryCode")
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }
        setCommunity({ ...community, [checkThis.name]: checkThis.value });
    };

    const onChangeHandler = (e) => {
        if (e.target.name !== "keywordCode") {
            console.log(e.target.value)
            setCommunity({ ...community, [e.target.name]: e.target.value });
        } else {
            communityKeywordDTOList.push({ "keywordCode": Number(e.target.value) })
            setCommunity({ ...community, communityKeywordDTOList });
        }
    };

    console.log(community);

    return (
        <>
            <div>
                <div className={PostingStyle.postingbox}>
                    <div className={PostingStyle.w1400h50}>
                        <div className={PostingStyle.w100h50}>
                            <label className={PostingStyle.communityLabelFont}>소통 제목</label>
                        </div>
                        <div className={PostingStyle.communityTitleTextBox}>
                            <textarea
                                className={PostingStyle.communityTitleFont}
                                name="communityTitle"
                                type="text"
                                onChange={handleValueChange}
                                placeholder="커뮤니티 제목을 입력해주세요."
                            />
                        </div>
                    </div>
                    <div className={PostingStyle.w1400h300}>
                        <div className={PostingStyle.w100h300}>
                            <label className={PostingStyle.communityLabelFont}>소통 내용</label>
                        </div>
                        <div className={PostingStyle.w1300h300}>
                            <textarea
                                className={PostingStyle.communityContentFont}
                                name="communityIntro"
                                type="text"
                                onChange={handleValueChange}
                                placeholder="커뮤니티 소개를 입력해주세요."
                            />
                        </div>
                    </div>
                    <div className={PostingStyle.w1400h50}>
                        <div className={PostingStyle.w100h50}>
                            <label className={PostingStyle.communityLabelFont}>카테고리</label>
                        </div>
                        <div className={PostingStyle.communityCategoryBox}>
                            {category.map((m, index) => (
                                <label htmlFor="categoryCode">
                                    <div className={PostingStyle.communityCategory}>
                                        <input key={index} type="radio" name="categoryCode" value={m.categoryCode}
                                            onChange={(e) => checkOnlyOne(e.target)} />
                                        <div>{m.categoryName}</div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className={PostingStyle.w1400h300}>
                        <div className={PostingStyle.w100h300}>
                            <label className={PostingStyle.communityLabelFont}>
                                키워드 선택
                            </label>
                        </div>
                        <div className={PostingStyle.w1300h300}>
                            {keyword.map((m, index) => (
                                <label htmlFor="keywordCode">
                                    <div className={PostingStyle.communityKeywordFont}>
                                        <input key={index} type="checkbox" name="keywordCode" value={m.keywordCode}
                                            onChange={onChangeHandler} />
                                        <div>{m.keywordName}</div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className={PostingStyle.w1400h50}>
                        <div className={PostingStyle.w100h50}>
                            <label className={PostingStyle.communityLabelFont}>지역 선택</label>
                        </div>
                        <select className={PostingStyle.w575h50} name="localCode" id="local" onChange={onChangeHandler}>
                            {local?.map((m, index) => (
                                <option value={m.localCode} key={index}>{m.localName}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <Link to="/communitys">
                        <button className={PostingStyle.submitButton} type="submit"
                            onClick={(e) => handleSubmit(e)}>등록하기</button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CommunityPosting;

