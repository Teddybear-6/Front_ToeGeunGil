import SocialSearch from "../social/page/SocialSearch";
import HobbySearch from "../hobby/page/HobbySearch";
import { useLocation, useNavigate } from 'react-router-dom';
import "../layout/layout.css"
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import SocialMainCard from "../social/components/SocialMainCard";
import HobbyMain from "../hobby/components/hobbyMain";

function Search() {

    const searcWord = useLocation().state //검색어 가져오기
    const [social, setSocial] = useState([]);
    const [hobby, setHobby] = useState([]);

    const navigate = useNavigate();
    const socialClick = (e) => (
        navigate('/search/social', { state: searcWord }) //검색어 넘겨주기
    )
    const hobbyClick = (e) => (
        navigate('/search/hobby/', { state: searcWord }) //검색어 넘겨주기
    )

    useEffect(() => {

        //소셜 검색 (4개만)
        fetch(process.env.REACT_APP_URL + `/socials/search?socialName=${searcWord}&size=4`)
            .then(response => {
                if (response.status === 500) {
                    setSocial(null)
                } else {
                    return response.json();
                }
            }).then(res => setSocial(res))

        //취미 검색 (4개만)
        fetch(process.env.REACT_APP_URL + `/hobbys/search?hobbytitle=${searcWord}&size=4`)
            .then((response) => response.json())
            .then((data) => setHobby(data["value"]))

    }, [searcWord]);

    return (
        <>
            {/* 취미 */}
            <div>
                <div className="searchFlex">
                    <div className="menuFont">Hobby - '{searcWord}' 검색 결과</div>
                    <button className="searchBorder" onClick={hobbyClick}>전체보기</button>
                </div>
                <hr className='hrSty marB50' />
                <div className='toegeungillayout'>
                    {
                        !hobby ? <div>검색결과가 없습니다.</div> : (<HobbyMain hobbys={hobby} />)
                    }
                </div>
            </div>
            {/* 소셜 */}
            <div>
                <div className="searchFlex">
                    <div className="menuFont">Social - '{searcWord}' 검색 결과</div>
                    <button className="searchBorder" onClick={socialClick}>전체보기</button>
                </div>
                <hr className='hrSty marB50' />
                <div className='toegeungillayout'>
                    {
                        !social ? <div>검색결과가 없습니다.</div> : (<SocialMainCard socials={social} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Search;