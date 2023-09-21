import React from "react";
import { useState, useEffect } from "react";
import PostingStyle from './css/CommunityPosting.module.css';


function CommunityForm() {
    const [category, setCategory] = useState([]); // 카테고리 목록
    const [keyword, setKeyword] = useState([]); // 키워드 목록
    const [location, setLocation] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        keyword: [],
        location: ""
    });

    useEffect(() => {

        fetch(process.env.REACT_APP_URL + "/category")
            .then((res) => res.json())
            .then((data) => setCategory(data));

        fetch(process.env.REACT_APP_URL + "/keyword")
            .then((res) => res.json())
            .then((data) => setKeyword(data));

        fetch(process.env.REACT_APP_URL + "/local")
            .then((res) => res.json())
            .then((data) => setLocation(data));
    }, []);

    // const FormValue = () => {
    //     const { title, content, category, keyword, location } = formData;

    //     const TitleValue
    // }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                setFormData({
                    ...formData,
                    keyword: [...formData.keyword, value],
                });
            } else {
                setFormData({
                    ...formData,
                    keyword: formData.keyword.filter((keywordCode) => keywordCode !== value),
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: formData.title,
            content: formData.content,
            category: formData.category,
            keyword: formData.keyword,
            location: formData.location,
        };

        fetch(process.env.REACT_APP_URL + `/communitys`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(response => console.log(response))
    };;

    return (
        <div className={PostingStyle.postingbox}>
            <form onSubmit={handleSubmit}>
                <div className={PostingStyle.w1400h50}>
                    <div className={PostingStyle.w100h50}>
                        <label className={PostingStyle.communityLabelFont}>소통 제목</label>
                    </div>
                    <div className={PostingStyle.communityTitleTextBox}>
                        <textarea className={PostingStyle.communityTitleFont}
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className={PostingStyle.w1400h300}>
                    <div className={PostingStyle.w100h300}>
                        <label className={PostingStyle.communityLabelFont}>소통 내용</label>
                    </div>
                    <div className={PostingStyle.w1300h300}>
                        <textarea className={PostingStyle.communityContentFont}
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                {/* 카테고리 선택 */}
                <div className={PostingStyle.w1400h50}>
                    <div className={PostingStyle.w100h50}>
                        <label className={PostingStyle.communityLabelFont}>카테고리</label>
                    </div>
                    <div className={PostingStyle.communityCategoryBox}>
                        {category.map((category) => (
                            <div className={PostingStyle.communityCategory} key={category.categoryCode}>
                                <input
                                    type="radio"
                                    id={`category${category.categoryCode}`}
                                    name="category"
                                    value={category.categoryCode}
                                    checked={String(formData.category) === String(category.categoryCode)}
                                    onChange={handleInputChange}
                                />
                                <span>{category.categoryName}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={PostingStyle.w1400h300}>
                    <div className={PostingStyle.w100h300}>
                        <label className={PostingStyle.communityLabelFont}>키워드 선택</label>
                    </div>
                    <div className={PostingStyle.w1300h300}>
                        {keyword.map((keyword) => (
                            <div className={PostingStyle.communityKeywordFont} key={keyword.keywordCode}>
                                <input 
                                    type="checkbox"
                                    name="keyword"
                                    value={keyword.keywordCode}
                                    checked={formData.keyword.includes(String(keyword.keywordCode))}
                                    onChange={handleInputChange}
                                />
                                <span>{keyword.keywordName}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={PostingStyle.w1400h50}>
                    <div className={PostingStyle.w100h50}>
                        <label className={PostingStyle.communityLabelFont}>지역 선택</label>
                    </div>
                    <div className={PostingStyle.w575h50}>
                        <select className={PostingStyle.w575h50}
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                        >
                            <option value="">지역 선택</option>
                            {location.map((location) => (
                                <option key={location.locationCode} value={location.locationCode}>
                                    {location.localName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className={PostingStyle.submitButton} type="submit">작성 완료</button>
            </form>
            {/* <Link to={"/communitys"}>
                <button className="community-regist-button" >이전</button>
            </Link> */}
        </div>
    );
}

export default CommunityForm;