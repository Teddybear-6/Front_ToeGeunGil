import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SocialKeyword from "./componentAPI/SocialKeyword";
import UserNicname from "./componentAPI/UserNicname";
import SocialDetailsImage from "./componentAPI/SocialDetailsImage";
import SocialLocal from "./componentAPI/SocialLocal";
import SocialParticipateList from "./componentAPI/SocialParticipateList";

import DetailsStyle from './css/SocialDetails.module.css';

function SocialDetails() {
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

    const { socialNum } = useParams();
    const [socials, setSocials] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8001/socials/2`, {method : "GET"})
            .then(response => response.json()) //json으로 받는다
            .then(data => setSocials(data));
    }, []);


    return (
        <>
            {/* SocialDetailsTitle (참여하기 전까지) */}
            <div className={DetailsStyle.flexStyle}>
                <div>
                    {/* 소셜 제목, 키워드, 작성자 */}
                    <div className={DetailsStyle.socialDetailsTitleBoard}>
                        {/* 소셜 제목 */}
                        <div className={DetailsStyle.socialDetailsTitle}>{socials.socialName}</div>
                        <div className={DetailsStyle.flexStyleKeywordAndUser}>
                            {/* 키워드 */}
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
                    <SocialDetailsImage imgcode={socials.fileNum} />
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
            {/* <SocialParticipateList postNum={socials.socialNum}/> */}
            {/* 소셜 소개 */}
            <div className={DetailsStyle.socialDetailsIntro}>
                <div className={DetailsStyle.socialDetailsMargin50Layout}>
                    {socials.socialIntro}
                </div>
            </div>
            {/* 특이사항 */}
            <div className={DetailsStyle.socialDetailsOther}>
                <div className={DetailsStyle.socialDetailsMargin50Layout}>
                    {socials.socialOther}
                </div>
            </div>
        </>
    )
}

export default SocialDetails;