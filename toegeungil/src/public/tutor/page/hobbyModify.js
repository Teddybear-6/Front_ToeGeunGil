import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Imageset from "../components/modifyImage";
import KeywordList from "../components/keywordList";
import "./hobbyWrite.css"

import { useLocation, Link } from "react-router-dom"




function HobbyModify() {
  const [showImages, setShowImages] = useState([]);
  const [user, setUser] = useState();
  const [category, setCategory] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [hobby, setHobby] = useState({})

  const [urls, setUrls] = useState();

  const [hobbyImage, setHobbyImage] = useState([])
  const [local, setLocal] = useState([{}]);
  const hobbyCode = useLocation();


  useEffect(() => {
    if (sessionStorage.getItem("Authorizaton")) {
      setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
    }

    fetch(process.env.REACT_APP_URL + `/hobbys/${hobbyCode.state.hobbyCode}`).then(res => res.json()).then(res => setHobby(res))
    fetch(process.env.REACT_APP_URL + "/category").then(res => res.json()).then(res => setCategory(res))
    fetch(process.env.REACT_APP_URL + "/keyword").then(res => res.json()).then(res => setKeyword(res))
    fetch(process.env.REACT_APP_URL + "/local").then(res => res.json()).then(res => setLocal(res))


  }, [hobbyCode])


  const categoryHandler = () => {
    const checkboxes = document.getElementsByName("categoryCode")
    for (let i = 0; i < checkboxes?.length; i++) {
      if (checkboxes[i].value == hobby.categoryCode) {
        checkboxes[i].checked = true;

      }
    }

  }



  const onChangeHandler = (e) => {

    setHobby({ ...hobby, [e.target.name]: e.target.value });

  };



  const checkOnlyOne = (checkThis) => {

    const checkboxes = document.getElementsByName("categoryCode")

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false

      }

    }
    setHobby({ ...hobby, [checkThis.name]: checkThis.value });
  }





  const onClickHandler = () => {

    if (!(user === undefined) && !(user === null) && user.auth[0] === 'ADMIN' || user.auth[0] === 'TUTOR') {
      if (user.no === hobby.tutorCode) {


        setHobby({ ...hobby, ["tutorCode"]: user.no })
        // setHobby({...hobby, keywordDTOList : keywordDTOList.map((m)=>  m.keywordCode)})



        const formData = new FormData()
        const blob = new Blob([JSON.stringify(hobby)], {
          type: 'application/json',
        });

        const blob1 = new Blob([JSON.stringify(urls)], {
          type: 'application/json',
        });

        // const blob3 = new Blob([JSON.stringify(keywordDTOList)], {
        //   type: 'application/json',
        // });

        formData.append('hobby', blob);
        formData.append('urls', blob1);
        // formData.append('keywordDTOList', blob3);

        if (hobbyImage.length != 0) {

          for (let i = 0; i < hobbyImage[0].length; i++) {
            formData.append('hobbyImage', hobbyImage[0][i]);
          }
        } else {
          formData.append('hobbyImage', null);
        }


        fetch(process.env.REACT_APP_URL + "/hobbys", {
          method: "PUT",
          body: formData,
          headers: {
            "Authorization": sessionStorage.getItem("Authorizaton")
          },
        }).then(res => res.json()).then(res => {
          alert(res['value'])

        }).catch((e) => alert(e))
      } else {
        alert("작성자만 수정할 수 있습니다.")
      }
    } else {
      alert("강사만 작성할 수 있습니다.")

    }

  }



  return (
    <>

      <div className='toegeungillayout'>
        <div className="layout2">
          <div>
            <div>
              취미생성
              <hr></hr>
            </div>
            <div className="titleframe">
              <p className="hobbytitle">취미제목</p>
              <div className="title">
                <input className="hobbytitleText w1250h18" type="text" name="hobbyTitle" value={hobby.hobbyTitle} onChange={onChangeHandler} />
              </div>
            </div>
            <div className="mainIntroFrame">
              <div>
                <Imageset image={hobby.imageId} setHobby={setHobby} hobby={hobby}
                  setShowImages={setShowImages} showImages={showImages}
                  setHobbyImage={setHobbyImage} hobbyImage={hobbyImage} setUrls={setUrls} ></Imageset>
              </div>
              <div>


              </div>

              <p className="introTitle">소개글</p>
              <div className="intro">
                <textarea className="introin" name="intro" value={hobby.intro} onChange={onChangeHandler} />
              </div>
            </div>
            <div className="dateframe">
              <p className="dateTitle">취미 일시</p>
              <div className="date">
                <input className="textAll" type="date" name="date" value={hobby.date} onChange={onChangeHandler} />
              </div>
              <p className="enddateTitle">모집 마감일</p>
              <div className="date">
                <input className="textAll" type="date" name="closingDate" value={hobby.closingDate} onChange={onChangeHandler} />
              </div>
            </div>
            <div className="localframe">
              <label for="local">지역선택</label>
              <div className="local">
                <select name="localCode" id="local" className="textAll" value={hobby.localCode} onChange={onChangeHandler}>
                  {
                    local?.map((m, index) => (
                      <option value={m.localCode} key={index}>{m.localName}</option>
                    ))
                  }
                </select>
              </div>


              <p className="localName">지역 상세</p>
              <div className="localDetail">
                <input type="text" name="hobbyPlace" className="textAll" value={hobby.hobbyPlace} onChange={onChangeHandler} />
              </div>
            </div>

            <div className="timeframe">
              <p>시간 시간</p>
              <div className="startTime">
                <input className="textAll" type="time" name="startTime" value={hobby.startTime} onChange={onChangeHandler} />
              </div>
              <p className="endTimeName">종료 시간</p>
              <div className="endTime">
                <input className="textAll" type="time" name="endTime" value={hobby.endTime} onChange={onChangeHandler} />
              </div>
            </div>

            <div className="MaxNumFrame">
              <p>정원 (명)</p>
              <div className="maxNum">
                <input type="number" min="1" name="maxPersonnel" className="textAll" value={hobby.maxPersonnel} onChange={onChangeHandler} />
              </div>
              <p className="priceName">가격</p>
              <div className="maxPrice">
                <input type="number" min="0" name="hobbyPrice" className="textAll" value={hobby.hobbyPrice} onChange={onChangeHandler} />
              </div>
            </div>
            {categoryHandler()}
            <div className="categoryFrame">
              <p className="categoryName">카테고리</p>
              {
                !category.map ? "카테고리가 없습니다." : category.map((m, index) => (
                  <label htmlFor="categoryCode" className="labelCate">
                    <input className="categoryCheck" key={index} type="checkbox" name="categoryCode" value={m.categoryCode} onChange={(e) => checkOnlyOne(e.target)} />
                    {m.categoryName}
                  </label>
                ))

              }

            </div>

            <div className="keywordFrame">

              <p className="categoryName">키워드</p>
              <div className="keyword">
                <KeywordList keyword={keyword} hobby={hobby} setHobby={setHobby} hobbyKeyword={hobby.keywordDTOList} />
              </div>
            </div>



            <div className="tutorframe">
              <p>강사소개</p>
              <div className="tutor">
                <input type="text" name="tutorIntro" className="tutorInto" value={hobby.tutorIntro} maxLength="80" onChange={onChangeHandler} />
              </div>
            </div>





            <div className="buttonFrame">
              <Link to="/hobby">
                <button className="cancelBtn">취소하기</button>
              </Link>
              <Link to="/tutor">
                <button onClick={onClickHandler} className="createBtn">수정하기</button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HobbyModify;