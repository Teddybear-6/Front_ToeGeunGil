import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import '../components/CategoryMain.css';

function CategoryList() {
    const [user, setUser] = useState('');
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCateogry = () => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        fetch(process.env.REACT_APP_URL + `/category`)
            .then(response => response.json())
            .then(data => {
                setCategory(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        getCateogry();
    }, [])

    const categoryClick = () => {
        alert("카테고리를 작성하시겠습니까?")
    }

    const deleteCategory = (categoryCode) => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            fetch(process.env.REACT_APP_URL + `/category/${categoryCode}`, {
                method: "DELETE",
                headers: {
                    "Authorization": sessionStorage.getItem("Authorizaton")
                }
            })
                .then(response => {
                    if (response.ok) {
                        alert("카테고리가 삭제되었습니다")
                        // 메인 화면으로 전환
                        window.location.href = "/service/category";
                    } else {
                        throw new Error("카테고리 삭제 실패하였습니다")
                    }
                })
                .catch(error => {
                    console.error("카테고리 삭제 중 오류 발생 : ", error);
                    alert("카테고리 삭제 중 오류가 발생하였습니다");
                })
        }
    }

    return (
        <div className='toegeungillayou'>
            {
                loading ? (
                    "로딩 중"
                ) : (
                    category ? (
                        <>
                            {user && user.auth[0] === 'ADMIN' ? (
                                <div className="category-main-layout">
                                    <div className="category-header">
                                        <div className="category-label">번호</div>
                                        <div className="category-label">카테고리명</div>
                                    </div>
                                    {category.map((category) => (
                                        <div key={category.categoryCode} className="category-main-content">
                                            <div className="category-value">{category.categoryCode}</div>
                                            <div className="category-value">{category.categoryName}</div>
                                            <div className="category-button-wrapper">
                                                <button className="category-button1" onClick={() => deleteCategory(category.categoryCode)}>삭제</button>
                                                <Link to={`/service/category/${category.categoryCode}/modify`}>
                                                    <button className="category-button1">수정</button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="category-main-button-box">
                                        <Link to={`/service/category/write`}>
                                            <button className="category-main-button" onClick={categoryClick}>카테고리 작성</button>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <p>관리자가 아닙니다 카테고리 관리 권한이 없습니다</p>
                            )
                            }
                        </>
                    ) : "카테고리가 없습니다"
                )
            }
        </div >
    )
}

export default CategoryList;