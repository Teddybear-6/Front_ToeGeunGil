import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../components/LocalModify.css';

function LocalWrite() {
    const [user, setUser] = useState('');
    const [localName, setLocalName] = useState('');

    const nameChange = (e) => {
        setLocalName(e.target.value);
    }
    console.log(localName);

    const cancelChange = () => {
        alert("지역 작성이 취소 되었습니다")
    }

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    }, [])

    const localWriteClick = () => {

        console.log(localName);
        fetch(process.env.REACT_APP_URL + `/local`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Authorization": sessionStorage.getItem("Authorizaton")
                },
                body: JSON.stringify({
                    "localName": localName,
                }),
            })
            .then(response => {
                if (response.ok) {
                    alert("지역이 등록 되었습니다");
                } else {
                    alert("지역 등록에 실패했습니다");
                }
            })
            .catch(error => {
                console.error("지역 등록 중 오류 발생 : ", error);
                alert("지역 등록 중 오류 발생했습니다");
            })
    }
    return (
        <div className='toegeungillayou'>
            <div className="local-wrapper">
                <h1 className="local-title">지역 작성</h1>
                {user && user.auth[0] === 'ADMIN' ? (
                    <div className="local-wrapper2">
                        <label className="local-name">작성하는 지역명</label>
                        <input className="local-text"
                            type="text"
                            value={localName}
                            onChange={nameChange}
                        />
                    </div>
                ) : (
                    <p>관리자가 아닙니다 지역 관리 작성 권한이 없습니다</p>
                )}
                {!user ? null : (user.auth[0] == 'ADMIN') ?
                    <div className="local-button">
                        <Link to="/service/local">
                            <button className="local-cancel" onClick={cancelChange}>취소</button>
                        </Link>
                        <Link to='/service/local'>
                            <button className="local-regist" onClick={localWriteClick}>등록</button>
                        </Link>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default LocalWrite;