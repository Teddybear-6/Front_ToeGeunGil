import React, { useState } from "react";
import { Link } from "react-router-dom";

function LocalWrite() {
    const [user, setUser] = useState('');
    const [labelName, setLabelName] = useState('');

    const nameChange = (e) => {
        setLabelName(e.target.value);
    }

    console.log(labelName);

    const cancelClick = () => {
        alert("지역관리 작성이 취소 되었습니다");
    }

    const writeClick = () => {
        console.log(labelName);
        fetch(process.env.REACT_APP_URL + `/local`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    "localName": labelName,
                }),
            })
            .then(response => {
                if (response.ok) {
                    alert("지역관리 등록 되었습니다");
                } else {
                    alert("지역관리 등록에 실패했습니다");
                }
            })
            .catch(error => {
                console.error("지역관리 등록 중 오류 발생 : ", error);
                alert("지역관리 등록 중 오류 발생했습니다");
            })
    }

    return (
        <div className='layout'>
            <h1>지역 작성</h1>
            <label>추가할 지역명</label>
            <input
                type="text"
                value={labelName}
                onChange={nameChange}
            />
            <div>
                <Link to="/service/local">
                    <button onClick={cancelClick}>취소</button>
                </Link>
                <Link to="/service/local">
                    <button onClick={writeClick}>등록</button>
                </Link>
            </div>
        </div>
    )
}

export default LocalWrite;