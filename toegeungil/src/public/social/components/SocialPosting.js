import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
// import { Form } from "react-router-dom";

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

    //input으로 바로 값 입력
    const [social, setSocial] = useState({
        socialName: '', //제목
        socialDate: '', //모임일시
        socialFixedNum: '', //정원
        socialStartTime: '', //시작시간
        socialEndTime: '', //종료시간
        localDetails: '', //지역상세
        socialIntro: '', //모임소개
        socialOther: '기타 사항 없음' //기타사항
    });

    useEffect(() => {

        //카테고리
        fetch("http://localhost:8001/category")
            .then(res => res.json())
            .then(res => setCategory(res))

        //키워드
        fetch("http://localhost:8001/keyword")
            .then(res => res.json())
            .then(res => setKeyword(res))

        //지역
        fetch("http://localhost:8001/local")
            .then(res => res.json())
            .then(res => setLocal(res))

    }, [social])

    const handleValueChange = (e) => {
        console.log(social.socialName)
        setSocial({
            ...social,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // submit action을 안타도록 설정
        fetch(`http://localhost:8001/socials`, {
            method: "POST", //메소드 지정
            headers: { //데이터 타입 지정
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(social) //실제 데이터 파싱하여 body에 저장
        })
            .then(response => response.json()) //return 값에 맞는 req 지정
            .then(response => console.log(response)) //return 값에 대한 처리
    }

    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName("categoryCode")
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
            }

        }
        setSocial({ ...social, [checkThis.name]: checkThis.value });
    }

    return (
        <>
            <div>
                <label>게시글 제목</label>
                <input type="text" placeholder="소셜 제목을 입력해 주세요." name="socialName" onChange={handleValueChange} />
                <label>{social.socialName}</label>
            </div>
            <div>
                <label>모임 일시</label>
                <input type="date" name="socialDate" onChange={handleValueChange} />
                <label>{social.socialDate}</label>
            </div>
            <div>
                <label>모임 정원</label>
                <input type="number" name="socialFixedNum" onChange={handleValueChange} />
                <label>명</label>
                <label>{social.socialFixedNum}</label>
            </div>
            <div>
                <label>시작 시간</label>
                <input type="time" name="socialStartTime" onChange={handleValueChange} />
                <label>{social.socialStartTime}</label>
            </div>
            <div>
                <label>종료 시간</label>
                <input type="time" name="socialEndTime" onChange={handleValueChange} />
                <label>{social.socialEndTime}</label>
            </div>
            <div>
                <label>대표 사진</label>
                <input type="file" name="" />
                {/* 사진 미리보기... */}
            </div>
            <div>
                <label>모임 소개</label>
                <input type="text" name="socialIntro" onChange={handleValueChange} />
                <label>{social.socialIntro}</label>
            </div>
            <div>
                <label>카테고리</label>
                {
                    !category.map ? "카테고리가 없습니다." : category.map((m, index) => (
                        <label htmlFor="categoryCode" className="labelCate">
                            <input key={index} type="checkbox" name="category" value={m.categoryCode} onChange={(e) => checkOnlyOne(e.target)} />
                            {m.categoryName}
                        </label>
                    ))
                }
                <label>{social.category}</label>

            </div>
        </>
    )

}



export default SocialPosting;