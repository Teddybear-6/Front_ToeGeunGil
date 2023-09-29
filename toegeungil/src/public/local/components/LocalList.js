import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../components/LocalMain.css';

function LocalList() {
    const [user, setUser] = useState('');
    const [local, setLocal] = useState([]);
    const [loading, setLoading] = useState(true);

    const getLocal = () => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        fetch(process.env.REACT_APP_URL + `/local`)
            .then(response => response.json())
            .then(data => {
                setLocal(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        getLocal();
    }, [])

    const localClick = () => {
        alert("지역을 작성하시겠습니까?")
    }

    const deleteLocal = (localCode) => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            fetch(process.env.REACT_APP_URL + `/local/${localCode}`, {
                method: "DELETE",
                headers: {
                    "Authorization": sessionStorage.getItem("Authorizaton")
                }
            })
                .then(response => {
                    if (response.ok) {
                        alert("지역 삭제되었습니다")
                        // 메인 화면으로 전환
                        window.location.href = "/service/local";
                    } else {
                        throw new Error("지역 삭제 실패하였습니다")
                    }
                })
                .catch(error => {
                    console.error("지역 삭제 중 오류 발생 : ", error);
                    alert("지역 삭제 중 오류가 발생하였습니다");
                })
        }
    }

    return (
        <div className='toegeungillayou'>
            {
                loading ? (
                    "로딩 중"
                ) : (
                    local ? (
                        <>
                            {user && user.auth[0] === 'ADMIN' ? (
                                <div className="local-main-layout">
                                    <div className="local-header">
                                        <div className="local-label">번호</div>
                                        <div className="local-label">지역명</div>
                                    </div>
                                    {local.map((local) => (
                                        <div key={local.localCode} className="local-main-content">
                                            <div className="local-value">{local.localCode}</div>
                                            <div className="local-value">{local.localName}</div>
                                            <div className="local-button-box">
                                                <button className="local-button1" onClick={() => deleteLocal(local.localCode)}>삭제</button>
                                                <Link to={`/service/local/${local.localCode}/modify`}>
                                                    <button className="local-button1">수정</button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="local-main-button-box">
                                    <Link to={`/service/local/write`}>
                                        <button className="local-main-button" onClick={localClick}>지역 작성</button>
                                    </Link>
                                    </div>
                                </div>
                            ) : (
                                <p>관리자가 아닙니다 지역 관리 권한이 없습니다</p>
                            )}
                        </>
                    ) : "지역이 없습니다"
                )
            }
        </div>
    )
}

export default LocalList;