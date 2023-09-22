import { useEffect, useState } from "react";
import PostingStyle from "../../community/components/css/CommunityPosting.module.css";
import { useLocation } from "react-router-dom";
import CommunityKeywordList from "../components/CommunityKeywordList";
import jwt_decode from "jwt-decode";



function CommunityModify() {

    const location = useLocation();
    const communitys = location.state;
    console.log(communitys);


    const [category, setCategory] = useState([]);
    const [keyword, setKeyword] = useState([]);
    const [communityKeywordDTOList, setCommunityKeywordDTOList] = useState([]);
    const [local, setLocal] = useState([]);
    const [user, setUser] = useState();

    const [community, setCommunity] = useState({
        communityNum: communitys.communitys.communityNum,
        userNum: communitys.communitys.useNum,
        communityTitle: '',
        communityIntro: '',
        postUpdateDate: new Date().toISOString(),
    });


    useEffect(() => {

        if (sessionStorage.getItem("Authorization")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorization")))
        }

        if (communitys.communitys.communityNum) {
            fetch(process.env.REACT_APP_URL + `/communitys/${communitys.communitys.communityNum}`)
                .then(response => response.json())
                .then(data => setCommunity(data));
            console.log("1", community);
        }


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

    //PUT 요청
    const handleSubmit = (e) => {

        if (!(user === undefined) && !(user === null) && user.auth[0] === 'ADMIN' || user.auth[0] === 'TUTOR') {
            if (user.no) {
                setCommunity({ ...community, ["userNum"]: user.no })


                community.communityKeywordDTOList = communityKeywordDTOList.map(community => community.keywordCode);

                e.preventDefault();
                fetch(process.env.REACT_APP_URL + `/communitys/${communitys.communitys.communityNum}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Authorization": sessionStorage.getItem("Authorizaton"),
                    },
                    body: JSON.stringify(community)
                })
                    .then(response => {
                        response.json()
                        if (response.ok) {
                            alert("게시글이 등록되었습니다.");
                        } else {
                            alert("게시글 등록 실패하였습니다.")
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        alert("error");
                    })
            }
        };

        //카테고리
        const checkOnlyOne = (checkThis) => {
            const checkboxes = document.getElementsByName("categoryCode")
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i] !== checkThis) {
                    checkboxes[i].checked = false
                }
            }
            setCommunity({ ...community, [checkThis.name]: checkThis.value });
        };

        //카테고리 불러오기 (기존 값)
        const categoryHandler = () => {
            const checkboxes = document.getElementsByName("categoryCode")
            for (let i = 0; i < checkboxes?.length; i++) {
                if (checkboxes[i].value == community.categoryCode) {
                    checkboxes[i].checked = true;
                }
            }
        }

        const onChangeHandler = (e) => {
            setCommunity({ ...community, [e.target.name]: e.target.value });
        };

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
                                    value={community.communityTitle}
                                    onChange={handleValueChange}
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
                                    value={community.communityIntro}
                                    onChange={handleValueChange}
                                />
                            </div>
                        </div>
                        {categoryHandler()}
                        <div className={PostingStyle.w1400h50}>
                            <div className={PostingStyle.w100h50}>
                                <label className={PostingStyle.communityLabelFont}>카테고리</label>
                            </div>
                            <div className={PostingStyle.communityCategoryBox}>
                                {category.map((m, index) => (
                                    <label htmlFor="categoryCode">
                                        <div className={PostingStyle.communityCategory}>
                                            <input key={index} type="checkbox" name="categoryCode" value={m.categoryCode}
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
                                <CommunityKeywordList keyword={keyword} community={community} setCommunity={setCommunity} communityKeyword={community.communityKeywordDTOList}
                                    setCommunityKeywordDTOList={setCommunityKeywordDTOList} communityKeywordDTOList={communityKeywordDTOList} />
                            </div>
                        </div>
                        <div className={PostingStyle.w1400h50}>
                            <div className={PostingStyle.w100h50}>
                                <label className={PostingStyle.communityLabelFont}>지역 선택</label>
                            </div>
                            <select className={PostingStyle.w575h50} name="localCode" id="local" value={community.localCode}
                                onChange={onChangeHandler}>
                                {local?.map((m, index) => (
                                    <option value={m.localCode} key={index}>{m.localName}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button className="cacelBtn">취소하기</button>
                            {/* <Link to="/communitys"> */}
                            <button className={PostingStyle.submitButton} type="submit"
                                onClick={handleSubmit}>작성하기</button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div >

            </>
        )
    }
}

export default CommunityModify;

