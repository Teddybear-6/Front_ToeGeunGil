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
                                                <button >삭제</button>
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