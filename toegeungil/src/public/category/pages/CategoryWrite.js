import React, { useState } from "react";
import { Link } from "react-router-dom";

function CategoryWrite(){
    const [categoryName, setCategoryName] =useState('');

    const categoryNameChange=(e)=>{
        setCategoryName(e.target.value);
    }
    console.log(categoryName);

    const categoryCancelChange=()=>{
        alert("카테고리 작성이 취소 되었습니다")
    }

    const categoryWriteClick=()=>{
        console.log(categoryName);
        fetch(process.env.REACT_APP_URL + `/category`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    "categoryName": categoryName,
                }),
            })
            .then(response => {
                if (response.ok) {
                    alert("카테고리가 등록 되었습니다");
                } else {
                    alert("카테고리 등록에 실패했습니다");
                }
            })
            .catch(error => {
                console.error("카테고리 등록 중 오류 발생 : ", error);
                alert("카테고리 등록 중 오류 발생했습니다");
            })
    }
    return(
        <div className='layout'>
            <h1>카테고리 작성</h1>
            <label>추가하는 카테고리명</label>
            <input 
            type="text"
            value={categoryName}
            onChange={categoryNameChange}
            />
            <div>
                <Link to="/service/category">
                    <button onClick={categoryCancelChange}>취소</button>
                </Link>
                <Link to='/service/category'>
                    <button onClick={categoryWriteClick}>등록</button>
                </Link>
            </div>
        </div>
    )
}

export default CategoryWrite;