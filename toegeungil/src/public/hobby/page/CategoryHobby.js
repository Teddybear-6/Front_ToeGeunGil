import { useState, useEffect, useCallback } from "react";
import HobbyMain from "../components/hobbyMain";
import AllHobbyCss from "../components/css/AllHobby.module.css";
import Paging from "../components/Paging";
import { useLocation } from "react-router-dom";
import "../../layout/layout.css";

function CategoryHobby({ localfilters }) {
  const [hobby, setHobby] = useState([]);
  const [page, setPages] = useState(1);
  const [pageCount, setPageCount] = useState();
  const cagegoryCode = useLocation().state;



  useEffect(() => {
    if (localfilters === "0" || localfilters === undefined || localfilters === null) {
      fetch(
        process.env.REACT_APP_URL +
        `/hobbys/category/${cagegoryCode}?page=${page - 1}&size=12`)
        .then((response) => response.json())
        .then((data) => { return (setHobby(data["value"]), setPageCount(data["size"])) })

    } else {

      fetch(
        process.env.REACT_APP_URL +
        `/hobbys/loacal/${localfilters}/category/${cagegoryCode}?page=${page - 1}&size=12`)
        .then((response) => response.json())
        .then((data) => { return (setHobby(data["value"]), setPageCount(data["size"])) })

    }

  }, [cagegoryCode, localfilters, page]);

  const setPage = useCallback((page) => {
    setPages(page);
  });


  return (
    <>

      <div>
        {!hobby ? "등록된 취미가 없습니다." :
          <HobbyMain hobbys={hobby}></HobbyMain>
        }
      </div>
      <div className={AllHobbyCss.paging}>
        <Paging count={pageCount} setPage={setPage} page={page} cagegoryCode={cagegoryCode} />
      </div>

    </>
  );
}

export default CategoryHobby;
