import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function HobbyNavber() {
  const [cagegory, setCategory] = useState();
  const [local, setLocal] = useState(0);
  useEffect(() => {
    fetch(process.env.REACT_APP_URL + `/category`)
      .then((res) => res.json())
      .then((res) => setCategory(res));
    fetch(process.env.REACT_APP_URL + `/local`)
      .then((res) => res.json())
      .then((res) => setLocal(res));
  }, []);

  const onChangeHandler = (e) => {
    setLocal(e.target.value);
  };
  console.log(local);
  return (
    <>
      {/* 사용자 */}

      <div className="tutorNavwraper">
        <div className="cateNavText">
          <div>
            <label for="local">지역선택</label>
            <div className="local">
              <select
                defaultValue="0"
                name="localCode"
                id="local"
                className="textAll"
                onChange={onChangeHandler}
              >
                {local?.map((m, index) => (
                  <option value={m.localCode} key={index}>
                    {m.localName}
                  </option>
                ))}
              </select>
            </div>
          </div>
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
              state={m.categoryCode}
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
