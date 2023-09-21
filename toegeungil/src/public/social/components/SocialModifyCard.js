import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
// import { Form } from "react-router-dom";
import "./css/Button.css"
import "./css/SocialPosting.css"
import { Link, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SocialModifyImage from "./componentAPI/SocialModifyImage";

function SocialModifyCard() {

    //write에서 state에 전달한 데이터 가지고 오기

    const location = useLocation();
    const socialNum = location.state;
    console.log(socialNum);

    //FK
    const [category, setCategory] = useState([]); //categoryCode
    const [keyword, setKeyword] = useState([]); //keywordCode
    const [keywordDTOList, setKeywordDTOList] = useState([]); //keywordDTOList
    const [local, setLocal] = useState([]); //localCode
    const [image, setImage] = useState({}); //image
    const [showImage, setShowImage] = useState(); //show images

    //input으로 바로 값 입력
    const [social, setSocial] = useState({
        socialNum: socialNum.socialNum,
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

        if (socialNum) {
            //수정할 게시글
            fetch(process.env.REACT_APP_URL + `/socials/${socialNum.socialNum}`)
                .then(response => response.json()) //json으로 받는다
                .then(data => setSocial(data));
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
        // console.log(social.socialName)
        setSocial({
            ...social,
            [e.target.name]: e.target.value
        });
    }

    //PUT 요청
    const handleSubmit = (e) => {
        const formData = new FormData();
        const blob = new Blob([JSON.stringify(social)], {
            type: 'application/json'
        });
        formData.append('social', blob);
        formData.append('image', image[0]);


        e.preventDefault(); // submit action을 안타도록 설정
        fetch(process.env.REACT_APP_URL + `/socials`, {
            method: "PUT", //메소드 지정
            headers: { //데이터 타입 지정
                // "Content-Type": "application/json; charset=utf-8"
            },
            body: formData
            // body: JSON.stringify(social) //실제 데이터 파싱하여 body에 저장
        })
            .then(response => { //return 값에 맞는 req 지정
                response.json()
                if (response.ok) {
                    alert("[Social] 게시글이 등록되었습니다.");
                } else {
                    alert("게시글 등록 실패...")
                }
            })
            .catch(error => {
                console.error("[Social] 게시글 등록 중 오류 발생 : ", error);
                alert("error");
            })
        // .then(response => console.log(response)) //return 값에 대한 처리
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

    //카테고리 불러오기 (기존 값)
    const categoryHandler = () => {
        const checkboxes = document.getElementsByName("categoryCode")
        for (let i = 0; i < checkboxes?.length; i++) {
            if (checkboxes[i].value == social.categoryCode) {
                checkboxes[i].checked = true;
            }
        }
    }

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
            <div>
                {/* 모임 제목 */}
                <div className="posFlex">
                    <div className="posTitle">모임 제목</div>
                    <div className="posBoard w1300h50">
                        <input className="posContent w1250h18" type="text" placeholder="소셜 제목을 입력해 주세요." name="socialName" onChange={handleValueChange} value={social.socialName} />
                    </div>
                </div>

                {/* 모임 일시, 모임 정원 */}
                <div className="posFlex">
                    <div className="posTitle">모임 일시</div>
                    <div className="posBoard w575h50 maR50">
                        <input className="posContent w520h18" type="date" name="socialDate" onChange={handleValueChange} value={social.socialDate} />
                    </div>

                    <div className="posTitle">모임 정원</div>
                    <div className="posBoard w575h50 posFlex_Fix">
                        <input className="posContent_Fix w520h18_Fix textR" type="number" name="socialFixedNum" onChange={handleValueChange} value={social.socialFixedNum} />
                        <div className="posContents maT14 maR35">명</div>
                    </div>
                </div>

                {/* 시작 시간, 종료 시간 */}
                <div className="posFlex">
                    <div className="posTitle">시작 시간</div>
                    <div className="posBoard w575h50 maR50">
                        <input className="posContent w520h18" type="time" name="socialStartTime" onChange={handleValueChange} value={social.socialStartTime} />
                    </div>

                    <div className="posTitle">종료 시간</div>
                    <div className="posBoard w575h50">
                        <input className="posContent w520h18" type="time" name="socialEndTime" onChange={handleValueChange} value={social.socialEndTime} />
                    </div>
                </div>

                {/* 대표사진, 모임 소개 */}
                <div className="posFlex">
                    <div className="posTitle">대표 사진</div>
                    <div className="posBoard w575h350 maR50">
                        <label>
                            <div htmlFor="input-file" onChange={handleAddImages}>
                                <div className="positionDiv1"><SocialModifyImage socialNum={social.socialNum} /></div>
                                <div className="positionDiv2"><img className="posBoard_Img w575h350 maR50" src={showImage} /></div>
                                <input className="posimage" type="file" id="input-file" name="image" />
                            </div>
                        </label>
                        {/* 사진 미리보기... */}
                    </div>

                    <div className="posTitle">모임 소개</div>
                    <div className="posBoard w575h350">
                        <textarea className="posContent_Intro w575h330" type="text" placeholder="소셜 제목을 입력해 주세요." name="socialIntro" onChange={handleValueChange} value={social.socialIntro} />
                    </div>
                </div>

                {/* 카테고리 선택 */}
                {categoryHandler()}
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
                        <select className="posContent w520h18" name="localCode" id="local" onChange={onChangeHandler} value={social.localCode}>
                            {
                                local?.map((m, index) => (
                                    <option value={m.localCode} key={index}>{m.localName}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="posTitle">지역 상세</div>
                    <div className="posBoard w575h50">
                        <input className="posContent w520h18" type="text" placeholder="모임 장소를 입력해 주세요." name="localDetails" onChange={handleValueChange} value={social.localDetails} />
                    </div>
                </div>

                {/* 기타사항 */}
                <div className="posFlex">
                    <div className="posTitle">기타 사항</div>
                    <div className="posBoard w1300h50">
                        <input className="posContent w1250h18" type="text" placeholder={social.socialOther} name="socialOther" onChange={handleValueChange} value={social.socialOther} />
                    </div>
                </div>

                {/* 등록 버튼 */}
                <div className="buttonFlex marT30">
                    <Link to="/social" type="submit" className="buttonOff marR30">목록으로</Link>
                    <button to="/social" type="submit" className="buttonOn" onClick={(e) => handleSubmit(e)}>수정하기</button>
                </div>
            </div>
        </>
    )

}



export default SocialModifyCard;