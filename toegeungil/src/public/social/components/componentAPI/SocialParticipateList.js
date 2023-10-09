import { useEffect, useState } from "react";
import DetailsStyle from '../css/SocialDetails.module.css';
import SocialParticipate from "./SocialParticipate";
import "../css/Button.css"


function SocialParticipateList({ postNum }) {
    //게시글 번호 입력하면 리스트로 참여 회원 보여줌
    const [socials, setSocials] = useState({});
    const [participate, setParticipate] = useState([{}]);

    useEffect(() => {

        //참여자 밑 인원수만큼 이미지 아이콘 뿌려주기
        fetch(process.env.REACT_APP_URL + `/socials/participate/${postNum.socialNum}`)
            .then(response => response.json())
            .then(data => setParticipate(data));

        //모임 정원 받아오기
        fetch(process.env.REACT_APP_URL + `/socials/${postNum.socialNum}`)
            .then(response => response.json()) //json으로 받는다
            .then(data => setSocials(data));

    }, [postNum]);

    return (
        <>
            {/* 참여자 */}
            <div className={DetailsStyle.socialDetailsParticipate}>
                {/* 사이즈로 인원수 체크하고 사이즈만큼 for문 돌려서 사진 넣어보기 */}
                <div className={DetailsStyle.socialDetailsParticipateBoard}>
                    <div className={DetailsStyle.socialDetailsParticipateN}>참여자 ( {participate.length} / {socials.socialFixedNum} )</div>
                    <div className={DetailsStyle.flexStyle2}>
                        <div>

                            {
                                participate.map && participate?.map((i) =>
                                    <img key={i} className={DetailsStyle.socialDetailsParticipateImg} src="/participate.png" />
                                )
                            }
                            {/* {Object.keys(participate[0]) <=0 ? null : "sdsd"} */}
                        </div>
                        <SocialParticipate socials={socials} socialNum={postNum.socialNum} socialFixedNum={socials.socialFixedNum} socialWriter={socials.userNum} participateLength={participate} />
                    </div>
                </div>
            </div>

            {/* {participate.map((r, i) =>
                <div key={i}>
                    <div key={i}>{r.userNum}</div>
                </div>)} */}
        </>
    )

}

export default SocialParticipateList;