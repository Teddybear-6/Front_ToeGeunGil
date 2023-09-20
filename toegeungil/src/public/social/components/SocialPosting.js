import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
// import { Form } from "react-router-dom";
import "../components/css/Button.css"
import { Link } from "react-router-dom";
import "../components/css/SocialPosting.css"

function SocialPosting() {

    /* 
    01. 게시글 작성

    (자동 카운팅)
    socialNum-게시글 번호: 자동 카운팅
    postRegDate-게시글 등록일: 자동 카운팅

    (JWT 토큰)
    userNum-회원 번호(작성자): 로그인 후 토큰 정보로 작성자 정보 가져오기
    
    (FK)
    -categoryCode-카테고리번호(카테고리 선택하고 번호 넘겨받기?)-(input:radio)
    -localCode-지역번호(지역 전택하고 번호 넘겨받기?)-(input:radio)
    -keywordDTOList-키워드리스트
    -image-이미지

    (바로 값 입력)
    -socialName-게시글 제목
    -socialDate-모임일자-(input:date)
    -socialFixedNum-모임정원-(input:number)
    -socialStartTime-모임시작시간-(input:time)
    -socialEndTime-모임종료시간-(input:time)
    -localDetails-지역상세-(input:text)
    -socialIntro-모임소개-(input:text)
    -socialOther-모임기타사항-(input:text)
    
    02. 게시글 수정
    postModiDate-게시글 수정일

    03. 게시글 삭제
    socialState-게시글 상태(디폴트Y) 
    
    https://velog.io/@hsschoi/React-fetch-서버에-데이터-요청하기-GET-POST*/


    //FK
    const [category, setCategory] = useState([]); //categoryCode
    const [keyword, setKeyword] = useState([]); //keywordCode
    const [keywordDTOList, setKeywordDTOList] = useState([]); //keywordDTOList
    const [local, setLocal] = useState([]); //localCode
    const [image, setImage] = useState({}); //image
    const [showImage, setShowImage] = useState(); //show image

    //input으로 바로 값 입력
    const [social, setSocial] = useState({
        userNum: 4, //유저 번호
        socialName: '', //제목
        socialDate: '', //모임일시
        socialFixedNum: '', //정원
        socialStartTime: '', //시작시간
        socialEndTime: '', //종료시간
        localDetails: '', //지역상세
        socialIntro: '', //모임소개
        socialOther: '기타 사항 없음', //기타사항
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
        // console.log(social.socialName)
        setSocial({
            ...social,
            [e.target.name]: e.target.value
        });
    }

    //POST 요청
    const handleSubmit = (e) => {

        const formData = new FormData();
        const blob = new Blob([JSON.stringify(social)], {
            type: 'application/json'
        });
        formData.append('social', blob);
        formData.append('image', image[0]);


        e.preventDefault(); // submit action을 안타도록 설정
        fetch(process.env.REACT_APP_URL + `/socials`, {
            method: "POST", //메소드 지정
            headers: { //데이터 타입 지정
                // "Content-Type": "application/json; charset=utf-8"
            },
            body: formData
            // body: JSON.stringify(social) //실제 데이터 파싱하여 body에 저장
        })
            .then(response => response.json()) //return 값에 맞는 req 지정
            .then(response => console.log(response)) //return 값에 대한 처리
    };

    //카테고리
    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName("categoryCode")
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }
        }
        setSocial({ ...social, [checkThis.name]: checkThis.value });
    };

    //키워드
    const onChangeHandler = (e) => {
        if (e.target.name !== "keywordCode") {
            setSocial({ ...social, [e.target.name]: e.target.value });
        } else {
            keywordDTOList.push({ "keywordCode": Number(e.target.value) })
            setSocial({ ...social, keywordDTOList });
        }
    };

    //이미지 상대경로 저장
    const handleAddImages = (event) => {
        console.log(event)
        const img = event.target.files;
        console.log(img)
        const currentImageUrl = URL.createObjectURL(img[0]);
        setShowImage(currentImageUrl);
        setImage(img);
    };

    console.log(showImage)
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* 모임 제목 */}
                <div className="posFlex">
                    <div className="posTitle">모임 제목</div>
                    <div className="posBoard w1300h50">
                        <input className="posContent w1250h18" type="text" placeholder="소셜 제목을 입력해 주세요." name="socialName" onChange={handleValueChange} />
                    </div>
                </div>

                {/* 모임 일시, 모임 정원 */}
                <div className="posFlex">
                    <div className="posTitle">모임 일시</div>
                    <div className="posBoard w575h50 maR50">
                        <input className="posContent w520h18" type="date" name="socialDate" onChange={handleValueChange} />
                    </div>

                    <div className="posTitle">모임 정원</div>
                    <div className="posBoard w575h50 posFlex_Fix">
                        <input className="posContent_Fix w520h18_Fix textR" type="number" name="socialFixedNum" onChange={handleValueChange} />
                        <div className="posContents maT14 maR35">명</div>
                    </div>
                </div>

                {/* 시작 시간, 종료 시간 */}
                <div className="posFlex">
                    <div className="posTitle">시작 시간</div>
                    <div className="posBoard w575h50 maR50">
                        <input className="posContent w520h18" type="time" name="socialStartTime" onChange={handleValueChange} />
                    </div>

                    <div className="posTitle">종료 시간</div>
                    <div className="posBoard w575h50">
                        <input className="posContent w520h18" type="time" name="socialEndTime" onChange={handleValueChange} />
                    </div>
                </div>

                {/* 대표사진, 모임 소개 */}
                <div className="posFlex">
                    <div className="posTitle">대표 사진</div>
                    <div className="posBoard w575h350 maR50">
                        <label>
                            <div htmlFor="input-file" onChange={handleAddImages}>
                                <input className="posimage" type="file" id="input-file" name="image" />
                                <img className="posBoard_Img w575h350 maR50" src={showImage}></img>
                            </div>
                        </label>
                        {/* 사진 미리보기... */}
                    </div>

                    <div className="posTitle">모임 소개</div>
                    <div className="posBoard w575h350">
                        <textarea className="posContent_Intro w575h330" type="text" placeholder="소셜 제목을 입력해 주세요." name="socialIntro" onChange={handleValueChange} />
                    </div>
                </div>

                {/* 카테고리 선택 */}
                <div className="posFlex">
                    <div className="posTitle">카테고리</div>
                    <div className="posBoard w1300h50">
                        <div className="posFlex_cate">
                            {
                                !category.map ? "카테고리가 없습니다." : category.map((m, index) => (
                                    <label htmlFor="categoryCode">
                                        <div className="w216h50 posFlex">
                                            <input className="checkSy" key={index} type="checkbox" name="categoryCode" value={m.categoryCode} onChange={(e) => checkOnlyOne(e.target)} />
                                            <div className="maL10 maT2">{m.categoryName}</div>
                                        </div>
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* 키워드 선택 */}
                <div className="posFlex">
                    <div className="posTitle">키워드 선택</div>
                    <div className="posBoard w1300h300">
                        <div className="posFlex_key">
                            {
                                !keyword.map ? "키워드가 없습니다." : keyword.map((m, index) => (
                                    <label htmlFor="keywordCode">
                                        <div className="w216h50 posFlex">
                                            <input className="checkSy" key={index} type="checkbox" name="keywordCode" value={m.keywordCode} onChange={onChangeHandler} />
                                            <div className="maL10 maT2">{m.keywordName}</div>
                                        </div>
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* 지역 선택, 지역 상세 */}
                <div className="posFlex">
                    <div className="posTitle">지역 선택</div>
                    <div className="posBoard w575h50 maR50">
                        <select className="posContent w520h18" name="localCode" id="local" onChange={onChangeHandler}>
                            {
                                local?.map((m, index) => (
                                    <option value={m.localCode} key={index}>{m.localName}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="posTitle">지역 상세</div>
                    <div className="posBoard w575h50">
                        <input className="posContent w520h18" type="text" placeholder="모임 장소를 입력해 주세요." name="localDetails" onChange={handleValueChange} />
                    </div>
                </div>

                {/* 기타사항 */}
                <div className="posFlex">
                    <div className="posTitle">기타 사항</div>
                    <div className="posBoard w1300h50">
                        <input className="posContent w1250h18" type="text" placeholder={social.socialOther} name="socialOther" onChange={handleValueChange} />
                    </div>
                </div>

                {/* 등록 버튼 */}
                <button type="submit" className="buttonOn rightItem marT30">등록하기</button>
            </form>
        </>
    )

}



export default SocialPosting;