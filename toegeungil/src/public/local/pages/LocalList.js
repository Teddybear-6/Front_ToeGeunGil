import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Link, useNavigate, useParams } from "react-router-dom";

function LocalList() {
    const { localCode } = useParams();
    const [local, setLocal] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    // 지역 목록 조회
    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        fetch(process.env.REACT_APP_URL + `/local`)
            .then(response => response.json())
            .then(data => {
                setLocal(data);
                setLoading(false);
            })
    }, [])

    const localClick = () => {
        alert("지역을 추가하시겠습니까?")
    }

    const localWriteClick=()=>{
        alert("지역을 수정하시겠습니까?")
    }

    // 지역 삭제
    const deleteClick = () => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        fetch(process.env.REACT_APP_URL + `/local/${localCode}`, { method: "DELETE" })
            .then(response => {
                if (response.ok) {
                    alert("지역 삭제되었습니다")
                    navigate("/service/notice");
                } else {
                    throw new Error("지역 삭제 실패하였습니다")
                }
            })
            .catch(error => {
                console.error("지역 삭제 중 오류 발생 : ", error);
                alert("지역 삭제 중 오류가 발생하였습니다");
            })
    }

    return (
        <div className='layout'>
            {
                loading ? (
                    "로딩 중"
                ) : (
                    local ? (
                        <>
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
                            <Link to={"/service/local/write"}>
                                <button onClick={localClick}>지역 작성</button>
                            </Link>
                            <Link to={"/service/local"}>
                                <button onClick={deleteClick}>삭제</button>
                            </Link>
                            <Link to={"/service/local/modify"}>
                                <button onClick={localWriteClick}>수정</button>
                            </Link>
                        </>
                    ) : "지역이 없습니다"
                )
            }
        </div>
    )
}

export default LocalList;