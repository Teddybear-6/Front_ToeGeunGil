import { useEffect, useState, useRef } from "react";
import SocialUser from "./SocialUser";
import "../css/Modal.css"
import DetailsStyle from '../css/SocialDetails.module.css';

function Modal({ socials, setModalOpen }) {

    //해당 게시글 참여자 리스트
    const [participate, setParticipate] = useState();

    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        //참여자 밑 인원수만큼 이미지 아이콘 뿌려주기
        if (socials.socialNum) {
            fetch(process.env.REACT_APP_URL + `/socials/participate/${socials.socialNum}`)
                .then(response => response.json())
                .then(data => setParticipate(data));
        }
    }, [socials]);

    return (
        <>
            <div className="container">
                <button className="close" onClick={closeModal}>
                    X
                </button>
                <div className="flexSt">
                    <div>회원명</div>
                    <div>닉네임</div>
                </div>
                {
                    participate?.map((r, i) => (
                        <div key={i} className="flexSt">
                            <SocialUser users={r} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

/*
모달을 노출시키는 페이지 컴포넌트 */
function SocialParticipateView({ socials }) {
    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <button className={DetailsStyle.buttonStyle} onClick={showModal}>참여리스트</button>
            {modalOpen && <Modal setModalOpen={setModalOpen} socials={socials} />}
        </div>
    );
}

export default SocialParticipateView;