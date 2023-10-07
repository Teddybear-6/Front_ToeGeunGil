import { useState, useEffect, useCallback } from "react";

import { useLocation } from "react-router-dom";
import Paging from "../components/component/Paging";
import "../../layout/layout.css";
import SocialMainCard from "../components/SocialMainCard";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

function SocialCategory({ localfilters }) {
  const [socials, setSocials] = useState([]);
  const [page, setPages] = useState(1);
  const [pageCount, setPageCount] = useState();
  const categoryCode = useLocation().state;

  const [user, setUser] = useState(); //(객체:!user)권한 회원 정보

  useEffect(() => {

    //권한설정
    if (sessionStorage.getItem("Authorizaton")) {
      setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
    }

    if (localfilters === "0" || localfilters === undefined || localfilters === null) {
      //지역 필터가 없을 경우 (전체일 경우) 카테고리 전체보기
      fetch(process.env.REACT_APP_URL + `/socials/category/${categoryCode}?page=${page - 1}&size=12`)
        .then((response) => response.json())
        .then((data) => setSocials(data));

      fetch(process.env.REACT_APP_URL + `/socials/category/${categoryCode}/size`)
        .then((res) => res.json())
        .then((res) => setPageCount(res));
    } else {
      //지역 필터가 있을 경우 지역필터 + 카테고리필터
      fetch(
        process.env.REACT_APP_URL + `/socials/category/${categoryCode}/loacal/${localfilters}?page=${page - 1}&size=12`)
        .then((response) => response.json())
        .then((data) => setSocials(data));

      fetch(process.env.REACT_APP_URL + `/socials/category/${categoryCode}/loacal/${localfilters}/size`)
        .then((res) => res.json())
        .then((res) => setPageCount(res));
    }

  }, [categoryCode, page, localfilters]);

  const setPage = useCallback((page) => {
    setPages(page);
  });

  return (
    <>
      <div className="toegeungillayout">
        <div>
          {!socials ? "nullllldddddlllllllllll." : (
            <SocialMainCard socials={socials} />
          )}
          {/* 회원만 글 작성 가능 */}
          <div>
            {!user ? null :
              <Link to="write" type='button' className='writeButton mar'>게시글 작성</Link>}
          </div>
          <Paging count={pageCount} setPage={setPage} page={page} categoryCode={categoryCode} />
        </div>
      </div>
    </>
  );
}

export default SocialCategory;
