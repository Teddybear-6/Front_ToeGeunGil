import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./hobbyWrite.css"
import { Link , useNavigate } from "react-router-dom";


function HobbyWrite() {
  const [showImages, setShowImages] = useState([]);
  const [user, setUser] = useState();
  const [category, setCategory] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [hobby, setHobby] = useState({"localCode": 1})
  const [keywordDTOList, setKeywordDTOList] = useState([])
  const [hobbyImage, setHobbyImage] = useState([])
  const [local, setLocal] = useState([{}]);

  const navigate =useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("Authorizaton")) {
      setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
    
    }


    fetch(process.env.REACT_APP_URL+"/category").then(res => res.json()).then(res => setCategory(res))
    fetch(process.env.REACT_APP_URL+"/keyword").then(res => res.json()).then(res => setKeyword(res))
    fetch(process.env.REACT_APP_URL+"/local").then(res => res.json()).then(res => setLocal(res))

  }, [])



  // 이미지 상대경로 저장
  const handleAddImages = (event) => {

    if (event.target.files.length > 4 || hobbyImage.length > 3) {
      alert("이미지는 4장까지 업로드 가능합니다.");
    } else {

      const imageLists = event.target.files;
      let imageUrlLists = [...showImages];

      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);

      }


      setHobbyImage([...hobbyImage, imageLists])
      setShowImages(imageUrlLists);
    }
  };




  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
    setHobbyImage(hobbyImage.filter((_, index) => index !== id));
  };


  const onChangeHandler = (e) => {

    if (e.target.name !== "keywordCode") {
      setHobby({ ...hobby, [e.target.name]: e.target.value });
    } else {
      keywordDTOList.push({ "keywordCode": Number(e.target.value) })


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

    if (!(user === undefined) && !(user === null) && user.auth[0] === 'ADMIN' || user.auth[0] === 'TUTOR') {
      if(hobby.length!==0 && hobbyImage.length !==0){
      setHobby({ ...hobby, ["tutorCode"]: user.no })

      const formData = new FormData()
      const blob = new Blob([JSON.stringify(hobby)], {
        type: 'application/json',
      });
      formData.append('hobby', blob);
      if(hobbyImage.length !==0){
      for (let i = 0; i < hobbyImage[0].length; i++) {
        formData.append('hobbyImage', hobbyImage[0][i]);
      }
     }

      fetch(process.env.REACT_APP_URL+"/hobbys",{
        method: "POST",
        body: formData,
        headers: {
          "Authorization": sessionStorage.getItem("Authorizaton")
        },
      }).then(res => res.json()).then(res=> {
        
        alert(res['value'])
        navigate("/tutor");
      }).catch((e)=>alert(e))
    }else{
      alert("모든 항목을 작성해주세요")
    }
    
    } else {
      alert("강사만 작성할 수 있습니다.")

    }

  }



  return (
    <>
          <div className='layout'>
            { !user ? "로그인 해주세요" : !user?.auth[0]==="TUTOR" ? "강사가 아닙니다." :
      <div>
        <div>
          취미생성
          <hr></hr>
        </div>
        <div className="titleframe">
          <p className="hobbytitle">취미제목</p>
          <div className="title">
            <textarea className="hobbytitleText" maxLength="40" type="text" name="hobbyTitle" onChange={onChangeHandler} />
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
            <select defaultValue="1" name="localCode" id="local" className="textAll" onChange={onChangeHandler}>
              {
                local?.map((m, index) => (
                  <option value={m.localCode} key={index}>{m.localName}</option>
                ))
              }
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
            <input type="text" name="tutorIntro" className="tutorInto" maxLength="80" onChange={onChangeHandler} />
          </div>
        </div>





        <div className="buttonFrame">
          <Link to="/hobby">
            <button className="cancelBtn">취소하기</button>
          </Link>
            <button className="createBtn" onClick={onClickHandler}>작성하기</button>
        </div>

      
      </div>
         }
      </div>
   
    </>
  )
}

export default HobbyWrite;