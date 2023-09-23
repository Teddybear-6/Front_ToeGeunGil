import React, { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";

function CategoryModify() {
    const { categoryCode } = useParams();
    const [category, setCategory] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(!categoryCode){
            // 카테고리 코드가 정상적으로 전달되지 않았을 때 예외 처리
            alert("카테고리 코드가 올바르지 않습니다");
            navigate("/service/category");
            return;
        }
        fetch(process.env.REACT_APP_URL + `/category/${categoryCode}`)
            .then(response => response.json())
            .then(data => {
                setCategory(data);
                setCategoryName(data.categoryName);
            })
    }, [categoryCode])

    const categoryChange  = (e) => {
        setCategoryName(e.target.value);
    }

    const categoryCancel = () => {
        alert("카테고리 작성이 취소 되었습니다");
    }

    const categoryUpdate = () => {
        fetch(process.env.REACT_APP_URL + `/category/${categoryCode}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                "categoryName": categoryName,
            }),
        })
            .then(response => {
                if (response.ok) {
                    alert("카테고리가 수정되었습니다");
                    navigate("/service/category");
                } else {
                    throw new Error("카테고리 수정에 실패하였습니다");
                }
            })
            .catch(error => {
                console.error("카테고리 수정 중 오류 발생 :", error);
                alert("카테고리 수정 중 오류가 발생하였습니다");
            })
    }

    return (
        <div className='layout'>
            <h1>카테고리 수정</h1>
            <label>수정하는 카테고리명</label>
            <input
                type="text"
                value={categoryName}
                onChange={categoryChange}
            />
            <div>
                <Link to="/service/category">
                    <button onClick={categoryCancel}>취소</button>
                </Link>
                <Link to='/service/category'>
                    <button onClick={categoryUpdate}>등록</button>
                </Link>
            </div>
        </div>
    )
}

export default CategoryModify;