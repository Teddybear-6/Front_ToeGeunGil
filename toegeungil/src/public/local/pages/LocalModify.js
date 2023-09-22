import React, { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";

function LocalModify() {
    const { localCode } = useParams();
    const [local, setLocal] = useState('');
    const [localName, setLocalName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(!localCode){
            // 지역 코드가 정상적으로 전달되지 않았을 때 예외 처리
            alert("지역 코드가 올바르지 않습니다");
            navigate("/service/local");
            return;
        }
        fetch(process.env.REACT_APP_URL + `/local/${localCode}`)
            .then(response => response.json())
            .then(data => {
                // setLocal(data);
                setLocalName(data.localName);
            })
    }, [localCode])

    const nameChange  = (e) => {
        setLocalName(e.target.value);
    }

    const cancelClick = () => {
        alert("지역 작성이 취소 되었습니다");
    }

    const updateClick = () => {
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
    }

    return (
        <div className='layout'>
            <h1>지역 작성</h1>
            <label>수정하는 지역명</label>
            <input
                type="text"
                value={localName}
                onChange={nameChange}
            />
            <div>
                <Link to="/service/local">
                    <button onClick={cancelClick}>취소</button>
                </Link>
                <Link to='/service/local'>
                    <button onClick={updateClick}>등록</button>
                </Link>
            </div>
        </div>
    )
}

export default LocalModify;