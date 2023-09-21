import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../components/NoticeView.css';

const NoticeView = () => {
    const { noticeNum } = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true); // 로딩 상태 관리
    const navigate = useNavigate(); //useNavigate 훅을 사용해서 페이지 이동을 제어
    const [user, setUser] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        setLoading(true);
        fetch(process.env.REACT_APP_URL + `/notices/${noticeNum}`)
            .then(response => response.json())
            .then(data => {
                setDetail(data);
                setLoading(false);
            })
    }, [noticeNum])

    /* 관리자인 경우 삭제 */
    const deleteClick = () => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        fetch(process.env.REACT_APP_URL + `/notices/${noticeNum}`, { method: "DELETE" })
            .then(response => {
                if (response.ok) {
                    alert("공지사항이 삭제되었습니다")
                    navigate("/service/notice");
                } else {
                    throw new Error("공지사항 삭제 실패하였습니다")
                }
            })
            .catch(error => {
                console.error("공지사항 삭제 중 오류 발생 : ", error);
                alert("공지사항 삭제 중 오류가 발생하였습니다");
            })
    }

    return (
        <div className='layout'>
            <div className="view-wrapper">
                {
                    loading ? (
                        "로딩 중"
                    ) : (
                        detail ? (
                            <>
                                <div className="view-title">
                                    <label>{detail.noticeTitle}</label>
                                </div>
                                <div>
                                    <div className="view-date">
                                        <label>{detail.noticeDate}</label>
                                    </div>
                                    <div className="view-text-box">
                                        <div className="view-text">
                                            <label>{detail.noticeContent}</label>
                                        </div>
                                    </div>
                                    
                                    {/* 관리자인 경우 : 삭제, 수정 버튼 */}
                                    {!user ? null : (user.auth[0] == 'ADMIN') ?
                                        <div className="button-box" >
                                            
                                            <Link to="/service/notice">
                                                <button className="button1" onClick={deleteClick}>삭제</button>
                                            </Link>
                                            <Link to={`/service/notice/${noticeNum}/modify`}>
                                                <button className="button2">수정</button>
                                            </Link>
                                        </div>
                                        : null}
                                    <div className="user-button-box">
                                        <Link to="/service/notice">
                                            <button className="button3">목록으로</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : "공지사항이 없습니다"
                    )
                }
            </div>
        </div>
    )
}

export default NoticeView;