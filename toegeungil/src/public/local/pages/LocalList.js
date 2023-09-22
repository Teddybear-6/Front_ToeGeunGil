import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

function LocalList() {
    const [user, setUser] = useState('');
    const [local, setLocal] = useState([]);

    const getList = () => {
        fetch(process.env.REACT_APP_URL + `/local`)
            .then(response => response.json())
            .then(data => setLocal(data))
    }

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        getList();
    }, [])

    const localClick = () => {
        alert("지역을 추가하시겠습니까?")
    }


    return (
        <div className='layout'>
            <label>번호</label>
            <ul>
                {
                    local.map((local) => (
                        <li key={local.localCode}>{local.localCode}</li>

                    ))
                }
            </ul>
            <label>지역명</label>
            <ul>
                {
                    local.map((local) => (
                        <li key={local.localName}>{local.localName}</li>
                    ))
                }
            </ul>
            <button onClick={localClick}>등록</button>
        </div>
    )
}

export default LocalList;