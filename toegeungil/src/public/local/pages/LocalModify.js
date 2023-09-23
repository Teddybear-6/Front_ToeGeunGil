import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../components/LocalModify.css';

function LocalModify() {
    const { localCode } = useParams();
    const [localName, setLocalName] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }

        fetch(process.env.REACT_APP_URL + `/local/${localCode}`)
            .then(response => response.json())
            .then(data => setLocalName(data.localName))
    }, [localCode])

    const nameChange = (e) => {
        setLocalName(e.target.value);
    }

    const cancelClick = () => {
        alert("지역 작성이 취소 되었습니다");
    }

    const updateClick = () => {
        if (user && user.auth[0] === 'ADMIN'){
        fetch(process.env.REACT_APP_URL + `/local/${localCode}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                "localName": localName,
            }),
        })
            .then(response => {
                if (response.ok) {
                    alert("지역이 수정되었습니다");
                    navigate("/service/local");
                } else {
                    throw new Error("지역 수정에 실패하였습니다");
                }
            })
            .catch(error => {
                console.error("지역 수정 중 오류 발생 :", error);
                alert("지역 수정 중 오류가 발생하였습니다");
            })
        }else{
            alert("관리자가 아닙니다 공지사항 작성 권한이 없습니다");
        }

    }

    return (
        <div className='layout'>
            <div className="local-wrapper">
                <h1 className="local-title">지역 수정</h1>
                {user && user.auth[0] === 'ADMIN' ? (
                    <div className="local-wrapper2">
                        <label className="local-name">수정하는 지역명</label>
                        <input className="local-text"
                            type="text"
                            value={localName}
                            onChange={nameChange}
                        />
                    </div>
                ) : (
                    <p>관리자가 아닙니다 공지사항 수정 권한이 없습니다</p>
                )}
                {!user ? null : (user.auth[0] == 'ADMIN') ?
                    <div className="local-button">
                        <Link to="/service/local">
                            <button className="local-cancel" onClick={cancelClick}>취소</button>
                        </Link>
                        <Link to='/service/local'>
                            <button className="local-regist" onClick={updateClick}>등록</button>
                        </Link>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default LocalModify;