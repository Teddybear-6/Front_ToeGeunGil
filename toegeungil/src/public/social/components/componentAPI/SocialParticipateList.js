import { useEffect, useState } from "react";
import DetailsStyle from '../css/SocialDetails.module.css';

function SocialParticipateList({ postNum }) {
    //게시글 번호 입력하면 리스트로 참여 회원 보여줌
    const [socials, setSocials] = useState({});
    const [participate, setParticipate] = useState([{}]);

    useEffect(() => {

        //참여자 밑 인원수만큼 이미지 아이콘 뿌려주기
        fetch(process.env.REACT_APP_URL+`/socials/participate/${postNum}`)
            .then(response => response.json())
            .then(data => setParticipate(data));

        //모임 정원 받아오기
        fetch(process.env.REACT_APP_URL+`/socials/${postNum}`)
            .then(response => response.json()) //json으로 받는다
            .then(data => setSocials(data));

    }, [postNum]);

    // const participateHandler = () => {
    //     if (!user) {
    //         // 유저가 아닐 경우
    //         alert("회원만 참여가능합니다.")
    //     } else if (!participate) {
    //         // 참여 신청이 되어있지 않을 경우
    //         if (window.confirm("참여하시겠습니까")) {
    //             fetch(process.env.REACT_APP_URL + `/socials/participate/${postNum}`, {
    //                 method: "POST",
    //             })
    //             .then(res => res.text())
    //             .then(res => {
    //                 alert(res)
    //                 if (res == "참가 완료되었습니다.") {
    //                     setParticipate(true)
    //                 }
    //             }).catch(r => console.log(r))
    //         }
    //     } else if (participate) {
    //         if (window.confirm("참여 취소하시겠습니까")) {
    //             fetch(process.env.REACT_APP_URL + `/socials/participate/${postNum}`, {
    //                 method: "POST",
    //             })
    //             .then(res => res.text())
    //             .then(res => {
    //                 alert(res)
    //                 if (res == "참가 취소 되었습니다.") {
    //                     setParticipate(false)
    //                 }
                    
    //             }).catch(r => console.log(r))
    //         }
    //     }
    // }

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
                        <button className={DetailsStyle.buttonStyle}>참여하기</button>
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