import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../components/LocalMain.css';

function LocalList() {
    const [local, setLocal] = useState([]);
    const [loading, setLoading] = useState(true);

    const getLocal = () => {
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
            fetch(process.env.REACT_APP_URL + `/local/${localCode}`, { method: "DELETE" })
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
        <div className='layout'>
            {
                loading ? (
                    "로딩 중"
                ) : (
                    local ? (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <td>번호</td>
                                        <td>지역명</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {local.map((local) => (
                                        <tr key={local.localCode}>
                                            <td>{local.localCode}</td>
                                            <td>{local.localName}</td>
                                            <td>
                                                <button onClick={() => deleteLocal(local.localCode)}>삭제</button>
                                                <Link to={`/service/local/${local.localCode}/modify`}>
                                                    <button>수정</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <Link to={`/service/local/write`}>
                                    <button onClick={localClick}>지역 작성</button>
                                </Link>
                            </table>
                        </>
                    ) : "지역이 없습니다"
                )
            }
        </div>
    )
}

export default LocalList;