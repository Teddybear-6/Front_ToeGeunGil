import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../components/CategoryWrite.css';

function CategoryWrite() {
    const [user, setUser] = useState('');
    const [categoryName, setCategoryName] = useState('');

    const categoryNameChange = (e) => {
        setCategoryName(e.target.value);
    }
    console.log(categoryName);

    const categoryCancelChange = () => {
        alert("카테고리 작성이 취소 되었습니다")
    }

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    }, [])

    const categoryWriteClick = () => {
        console.log(categoryName);
        if (user && user.auth[0] === 'ADMIN') {
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
        }else{
            alert("관리자가 아닙니다 카테고리 관리 권한이 없습니다")
        }
    }
    return (
        <div className='layout'>
            <div className="category-wrapper">
                <h1 className="cateogory-title">카테고리 작성</h1>
                {user && user.auth[0] === 'ADMIN' ? (
                    <div className="category-wrapper2">
                        <label className="category-name">추가하는 카테고리명</label>
                        <input className="category-text"
                            type="text"
                            value={categoryName}
                            onChange={categoryNameChange}
                        />
                    </div>
                ) : (
                    <p>관리자가 아닙니다 카테고리 작성 권한이 없습니다</p>
                )}
                {!user ? null : (user.auth[0] == 'ADMIN') ?
                    <div className="category-button">
                        <Link to="/service/category">
                            <button className="category-cancel" onClick={categoryCancelChange}>취소</button>
                        </Link>
                        <Link to='/service/category'>
                            <button className="category-regist" onClick={categoryWriteClick}>등록</button>
                        </Link>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default CategoryWrite;