import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../components/CategoryWrite.css';

function CategoryModify() {
    const { categoryCode } = useParams();
    const [category, setCategory] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }

        if (!categoryCode) {
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

    const categoryChange = (e) => {
        setCategoryName(e.target.value);
    }

    const categoryCancel = () => {
        alert("카테고리 작성이 취소 되었습니다");
    }

    const categoryUpdate = () => {
        if (user && user.auth[0] === 'ADMIN') {
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
        } else {
            alert("관리자가 아닙니다 카테고리 작성 권한이 없습니다");
        }
    }

    return (
        <div className='layout'>
            <div className="category-wrapper">
                <h1 className="catagory-title">카테고리 수정</h1>
                {user && user.auth[0] === 'ADMIN' ? (
                    <div className="category-wrapper2">
                        <label className="category-name">수정하는 카테고리명</label>
                        <input className="category-text"
                            type="text"
                            value={categoryName}
                            onChange={categoryChange}
                        />
                    </div>
                ) : (
                    <p>관리자가 아닙니다 공지사항 수정 권한이 없습니다</p>
                )}
                {!user ? null : (user.auth[0] == 'ADMIN') ?
                    <div className="category-button">
                        <Link to="/service/category">
                            <button className="category-cancel" onClick={categoryCancel}>취소</button>
                        </Link>
                        <Link to='/service/category'>
                            <button className="category-regist" onClick={categoryUpdate}>등록</button>
                        </Link>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default CategoryModify;