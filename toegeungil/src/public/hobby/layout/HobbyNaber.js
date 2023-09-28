import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const HobbyNavber = ({ localfilters, setLocalFilters }) => {
  const [cagegory, setCategory] = useState();
  const [local, setLocal] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_URL + `/category`)
      .then((res) => res.json())
      .then((res) => setCategory(res));
    fetch(process.env.REACT_APP_URL + `/local`)
      .then((res) => res.json())
      .then((res) => setLocal(res));
  }, []);

  const onChangeHandler = (e) => {
    setLocalFilters(e.target.value)
  };


  return (
    <>
      <div className="tutorNavwraper">
        <div>
          <label htmlFor="local">지역선택</label>
          <div className="local">
            <select
              defaultValue="0"
              name="localCode"
              id="local"
              className="textAll"
              onChange={onChangeHandler}
            >
              <option value="0">전체</option>
              {local?.map((m, index) => (
                <option value={m.localCode} key={m.localCode}>
                  {m.localName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="cateNavText">
          <NavLink
            to={"/hobby"}
            className={({ isActive }) =>
              isActive ? "serviceOn" : "serviceOff"
            }
          >
            전체
          </NavLink>
          {cagegory?.map((m, index) => (
            <NavLink
              state={[m.categoryCode, localfilters]}
              to={`/hobbycategory/${m.categoryCode}`}
              key={index}
              className={({ isActive }) =>
                isActive ? "serviceOn" : "serviceOff"
              }
            >
              {m.categoryName}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default HobbyNavber;
