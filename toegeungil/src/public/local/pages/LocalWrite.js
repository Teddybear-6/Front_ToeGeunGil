import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

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
        <div className='layout'>
            <h1>지역 작성</h1>
            {user && user.auth[0] === 'ADMIN' ? (
                <div>
                    <label>추가하는 지역명</label>
                    <input
                        type="text"
                        value={localName}
                        onChange={nameChange}
                    />
                </div>
            ) : (
                <p>관리자가 아닙니다 공지사항 수정 권한이 없습니다</p>
            )}
            {!user ? null : (user.auth[0] == 'ADMIN') ?
                <div>
                    <Link to="/service/local">
                        <button onClick={cancelChange}>취소</button>
                    </Link>
                    <Link to='/service/local'>
                        <button onClick={localWriteClick}>등록</button>
                    </Link>
                </div>
                : null}
        </div>
    )
}

export default LocalWrite;