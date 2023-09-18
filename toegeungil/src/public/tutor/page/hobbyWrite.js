import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./hobbyWrite.css"
import defaultImage from "../images/file-upload.svg"

function HobbyWrite() {
  const [showImages, setShowImages] = useState([]);
  const [user, setUser] = useState();
  const [category, setCategory] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [hobby, setHobby] = useState({})
  const [keywordDTOList, setKeywordDTOList] = useState([])
  let [newkeyword, setNewkeyword] = useState({});
  const [hobbyImage, setHobbyImage] = useState([])

  useEffect(() => {
    if (sessionStorage.getItem("Authorizaton")) {
      setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
    }


    fetch("http://localhost:8001/category").then(res => res.json()).then(res => setCategory(res))
    fetch("http://localhost:8001/keyword").then(res => res.json()).then(res => setKeyword(res))

  }, [])





  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    console.log(event.target.files.length)
    console.log(hobbyImage.length)
    if (event.target.files.length > 4 || hobbyImage.length > 3) {
      alert("이미지는 4장까지 업로드 가능합니다.");
    } else {

      const imageLists = event.target.files;
      let imageUrlLists = [...showImages];

      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);

      }

      //   if (imageUrlLists.length > 4) {
      //     imageUrlLists = imageUrlLists.slice(0, 4);
      //     for(let i= 0; i< 4;i++){
      //         setHobbyImage([...imageLists[i]]);
      //     }

      //   }
      setHobbyImage([...hobbyImage, imageLists])
      setShowImages(imageUrlLists);
    }
  };




  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
    setHobbyImage(hobbyImage.filter((_, index) => index !== id));
  };


  const onChangeHandler = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    if (e.target.name !== "keywordCode") {
      setHobby({ ...hobby, [e.target.name]: e.target.value });
    } else {
      keywordDTOList.push({ "keywordCode": Number(e.target.value) })

      console.log(keywordDTOList)
      setHobby({ ...hobby, keywordDTOList });
    }


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
    console.log(hobby)
    console.log(hobbyImage)
    if (!(user === undefined) && !(user === null) && user.auth[0] === 'ADMIN' || user.auth[0] === 'TUTOR') {

    } else {
      alert("강사만 작성할 수 있습니다.")
    }

  }



  return (
    <>
      <div>
        <div>
          취미생성
          <hr></hr>
        </div>
        <div className="titleframe">
          <p className="hobbytitle">취미제목</p>
          <div className="title">
            <textarea className="hobbytitleText" maxLength="150" type="text" name="hobbyTitle" onChange={onChangeHandler} />
          </div>
        </div>
        <div className="mainIntroFrame">
          <div>
            <label htmlFor="input-file" onChange={handleAddImages}>
              <input type="file" id="input-file" multiple />
            </label>

            <div className="imageframe">
              {showImages.map((image, id) => (
                <div key={id}>
                  <img className="image" src={image} alt={`${image}-${id}`} />
                  <button onClick={() => handleDeleteImage(id)}>X</button>
                </div>

              ))}
            </div>
          </div>

          <p className="introTitle">소개글</p>
          <div className="intro">
            <textarea className="introin" name="intro" onChange={onChangeHandler} />
          </div>
        </div>
        <div className="dateframe">
          <p className="dateTitle">취미 일시</p>
          <div className="date">
            <input className="textAll" type="date" name="date" onChange={onChangeHandler} />
          </div>
          <p className="enddateTitle">모집 마감일</p>
          <div className="date">
            <input className="textAll" type="date" name="closingDate" onChange={onChangeHandler} />
          </div>
        </div>
        <div className="localframe">
          <label for="local">지역선택</label>
          <div className="local">
            <select name="local" id="local" className="textAll">

            </select>
          </div>


          <p className="localName">지역 상세</p>
          <div className="localDetail">
            <input type="text" name="hobbyPlace" className="textAll" onChange={onChangeHandler} />
          </div>
        </div>

        <div className="timeframe">
          <p>시간 시간</p>
          <div className="startTime">
            <input className="textAll" type="time" name="startTime" onChange={onChangeHandler} />
          </div>
          <p className="endTimeName">종료 시간</p>
          <div className="endTime">
            <input className="textAll" type="time" name="endTime" onChange={onChangeHandler} />
          </div>
        </div>

        <div className="MaxNumFrame">
          <p>정원 (명)</p>
          <div className="maxNum">
            <input type="number" min="1" name="maxPersonnel" className="textAll" onChange={onChangeHandler} />
          </div>
          <p className="priceName">가격</p>
          <div className="maxPrice">
            <input type="number" min="0" name="hobbyPrice" className="textAll" onChange={onChangeHandler} />
          </div>
        </div>

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
            {
              !keyword.map ? "키워드가 없습니다." : keyword.map((m, index) => (
                <label htmlFor="keywordCode"><input className="keywordCheck" key={index} type="checkbox" name="keywordCode" value={m.keywordCode} onChange={onChangeHandler} />{m.keywordName}</label>
              ))

            }
          </div>
        </div>



        <div className="tutorframe">
          <p>강사소개</p>
          <div className="tutor">
          <input type="text" name="tutorIntro" className="tutorInto"  maxLength="80" onChange={onChangeHandler} />
          </div>
        </div>






        <button onClick={onClickHandler}>버튼</button>
      </div>

    </>
  )
}

export default HobbyWrite;