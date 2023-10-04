import { useEffect, useState, useRef } from "react";
import SocialUser from "./SocialUser";
import "../css/Modal.css"


function SocialParticipateView({ socials }) {

    //해당 게시글 참여자 리스트
    const [participate, setParticipate] = useState();


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
            {
                participate?.map((r, i) => (
                    <div key={i}>
                        <div key={i}>{r.userNum}</div>
                        <div key={i}>
                            <SocialUser users={r}/>
                        </div>
                    </div>
                ))
            }
            <Modal/>
        </>
    )
}

/*
모달을 노출시키는 페이지 컴포넌트 */ 
function Modal() {
    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <button onClick={showModal}>모달 띄우기</button>
            {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </div>
    );
}

function ModalBasic({ setModalOpen, id, title, content, writer }: PropsType) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="container">
            <button className="close" onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
        </div>
    );
}

export default SocialParticipateView;