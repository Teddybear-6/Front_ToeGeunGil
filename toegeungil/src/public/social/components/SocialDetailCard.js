import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialKeyword from "./componentAPI/SocialKeyword";
import UserNicname from "./componentAPI/UserNicname";
import SocialDetailsImage from "./componentAPI/SocialDetailsImage";
import SocialLocal from "./componentAPI/SocialLocal";
import SocialParticipateList from "./componentAPI/SocialParticipateList";
import "../components/css/Button.css"
import "../components/css/SocialPosting.css"
import { Link, NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode";

import DetailsStyle from './css/SocialDetails.module.css';

function SocialDetailCard() {
    /*
    <SocialDetailsTitle>
    - 소셜 제목, 키워드, 작성자
    - 사진
    - 소셜일시, 장소(localName+세부장소), 시간(시작시간~종료시간), 인원

    <SocialDetailsContent>
    - 참여자
    - 소셜소개
    - 특이사항
    */

    //<Route path=':socialNum' element={<SocialDetails/>}/> 에서 socialNum을 받아온 것...
    const { socialNum } = useParams();
    const [socials, setSocials] = useState({});

    const [user, setUser] = useState();

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/socials/${socialNum}`)
            .then(response => response.json()) //json으로 받는다
            .then(data => setSocials(data));

        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    }, [socialNum]);

    //권한 확인 후 핸들러 실행
    // const auth = (socialNum) => {
    //     if(!(user === undefined) && !(user === null) && (user.auth[0] === "USER" ||  user.auth[0] === "TUTOR" || user.auth[0] === "ADMIN" )){
    //         if(user.no === socials.userNum){
    //             setSocials({...socials, ["userNum"]:user.no})
    //             handleSubmit(socialNum);
    //         }
    //     } else {
    //         alert("[social] 작성자가 아닙니다.");
    //     }
    // }

    const handleSubmit = (socialNum) => {
        if (!window.confirm("[social] 게시글을 삭제하시겠습니까?")) {
            // alert("취소(아니오)를 누르셨습니다.");
        } else {
            alert("[social] 게시글이 삭제되었습니다.");
            fetch(process.env.REACT_APP_URL + `/socials/${socialNum}`, {
                method: "DELETE",
                headers: {}
            })
                .then(response => response.json())
                .then(response => { //return 값에 대한 처리
                    setSocials(socials.filter(code => code.socialNum != socialNum))
                    alert(response['value'])
                });
            window.location.href = "/social"
        }
    }

    return (
        <>
            <div className="maB100">
                {/* SocialDetailsTitle (참여하기 전까지) */}
                <div className={DetailsStyle.flexStyle}>
                    <div>
                        {/* 소셜 제목, 키워드, 작성자 */}
                        <div className={DetailsStyle.socialDetailsTitleBoard}>
                            {/* 소셜 제목 */}
                            <div className={DetailsStyle.socialDetailsTitle}>{socials.socialName}</div>
                            {/* 키워드 */}
                            <div className={DetailsStyle.flexStyleKeywordAndUser}>
                                <div className={DetailsStyle.flexStyle}>
                                    {socials.keywordDTOList?.map((m, index) => {
                                        return (
                                            <SocialKeyword key={index} code={m} />
                                        )
                                    })}
                                </div>
                                {/* 작성자 */}
                                <div className={DetailsStyle.socialDetailsWriter}>
                                    <label>작성자 : </label>
                                    <UserNicname userNo={socials.userNum} />
                                </div>
                            </div>
                        </div>
                        {/* 사진 */}
                        <SocialDetailsImage socialNum={socials.socialNum} />
                    </div>
                    <div className={DetailsStyle.socialDetailsScheduleBoard}>
                        <div className={DetailsStyle.socialDetailsMargin50Layout}>
                            <div className={DetailsStyle.socialDetailsScheduleTitle}>일정</div>
                            {/* 모임일시 */}
                            <div className={DetailsStyle.socialDetailsScheduleContent}>
                                일시 : {socials.socialDate}
                            </div>
                            {/* 장소(지역, 상세주소) */}
                            <div className={DetailsStyle.socialDetailsScheduleContent}>
                                <div className={DetailsStyle.flexStyle}>
                                    장소 :&nbsp;
                                    <SocialLocal code={socials.localCode} />&nbsp;
                                    {socials.localDetails}
                                </div>
                            </div>
                            {/* 시간(시작시간, ~종료시간) */}
                            <div className={DetailsStyle.socialDetailsScheduleContent}>
                                시간 :&nbsp;
                                {socials.socialStartTime}
                                <label>~</label>
                                {socials.socialEndTime}
                            </div>
                            {/* 정원(명) */}
                            <div className={DetailsStyle.socialDetailsScheduleContent}>
                                인원 :&nbsp;
                                {socials.socialFixedNum}
                                <label>명</label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 참여하기 */}
                <SocialParticipateList postNum={socials.socialNum} />
                {/* 소셜 소개 */}
                <div className={DetailsStyle.socialDetailsIntro}>
                    <div className={DetailsStyle.socialDetailsOthersty}>소셜 소개</div>
                    <div className={DetailsStyle.socialDetailsMargin050Layout}>
                        {socials.socialIntro}
                    </div>
                </div>
                {/* 특이사항 */}
                <div className={DetailsStyle.socialDetailsOther}>
                    <div className={DetailsStyle.socialDetailsOthersty}>기타 사항</div>
                    <div className={DetailsStyle.socialDetailsMargin050Layout}>
                        {socials.socialOther}
                    </div>
                </div>
                <div className="buttonFlex marT30">
                    {/* 소셜 삭제 수정 작성자 권한 주기 */}
                    {
                        !(!(user === undefined) && !(user === null)) ? null :
                            !(user.no === socials.userNum) ? null :
                                <>
                                    <button type="button" className="buttonOn_so marR30" onClick={handleSubmit}>소셜삭제</button>
                                    <Link to="/social/modify" type="button" className="buttonOn_so marR30" state={{ Statesocial: socials }}>소셜수정</Link>
                                </>
                    }
                    <Link to="/social" type="button" className="buttonOff_so">목록으로</Link>
                </div>
            </div>
        </>
    )
}

export default SocialDetailCard;