import { useState, useEffect, useCallback } from "react";

import { useLocation } from "react-router-dom";
import Paging from "../components/component/Paging";
import "../../layout/layout.css";
import SocialMainCard from "../components/SocialMainCard";

function SocialCategory({ localfilters }) {
  const [socials, setSocials] = useState([]);
  const [page, setPages] = useState(1);
  const [pageCount, setPageCount] = useState();
  const categoryCode = useLocation().state;

  useEffect(() => {

    if (localfilters === "0" || localfilters === undefined || localfilters === null) {
      fetch(process.env.REACT_APP_URL + `/socials/category/${categoryCode}?page=${page - 1}&size=12`)
        .then((response) => response.json())
        .then((data) => setSocials(data));

      fetch(process.env.REACT_APP_URL + `/socials/category/${categoryCode}/size`)
        .then((res) => res.json())
        .then((res) => setPageCount(res));
    } else {
      fetch(
        process.env.REACT_APP_URL + `/socials/category/${categoryCode}/loacal/${localfilters}?page=${page - 1}&size=12`)
        .then((response) => response.json())
        .then((data) => { return (setSocials(data["value"]), setPageCount(data["size"])) })
    }

  }, [categoryCode, page, localfilters]);

  const setPage = useCallback((page) => {
    setPages(page);
  });

  return (
    <>
      {!socials ? (
        "nullllllllllllllll."
      ) : (
        <div className="toegeungillayout">
          <SocialMainCard socials={socials}></SocialMainCard>
          <Paging count={pageCount} setPage={setPage} page={page} categoryCode={categoryCode} />
        </div>
      )}
    </>
  );
}

export default SocialCategory;
