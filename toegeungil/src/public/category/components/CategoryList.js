import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoryList() {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCateogry = () => {
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
            fetch(process.env.REACT_APP_URL + `/category/${categoryCode}`, { method: "DELETE" })
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
        <div className='layout'>
            {
                loading ? (
                    "로딩 중"
                ) : (
                    category ? (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <td>번호</td>
                                        <td>카테고리명</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.map((category) => (
                                        <tr key={category.categoryCode}>
                                            <td>{category.categoryCode}</td>
                                            <td>{category.categoryName}</td>
                                            <td>
                                                <button onClick={() => deleteCategory(category.categoryCode)}>삭제</button>
                                                <Link to={`/service/category/${category.categoryCode}/modify`}>
                                                    <button>수정</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <Link to={`/service/category/write`}>
                                    <button onClick={categoryClick}>카테고리 작성</button>
                                </Link>
                            </table>
                        </>
                    ) : "카테고리가 없습니다"
                )
            }
        </div>
    )
}

export default CategoryList;