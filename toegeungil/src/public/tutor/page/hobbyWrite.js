import { useState ,useEffect} from "react";
import "./hobbyWrite.css"
import defaultImage from "../images/file-upload.svg"

function HobbyWrite(){
    const [showImages, setShowImages] = useState([]);
    const [hobby , setHobby] = useState({})
    const [hobbyImage , setHobbyImage] =useState([])

    useEffect(()=>{
        console.log(hobbyImage)
    },[showImages])
 

  
  
    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
        console.log(event.target.files.length)
        console.log( hobbyImage.length)
        if(event.target.files.length>4 || hobbyImage.length>3){
            alert("이미지는 4장까지 업로드 가능합니다.");
        }else{
        
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
      setHobbyImage([...hobbyImage,imageLists ])
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
        setHobby({ ...hobby, [e.target.name]: e.target.value });
    };
    return(
        <>
        <div>
        <div>
          취미생성
        </div>
        <div className="titleframe">
        <p>취미제목</p>
        <input className="title" type="text" name="hobbyTitle" onChange={onChangeHandler} />
        </div>
        <div className="mainIntroFrame">

        <p className="introTitle">소개글</p>
        <input  className="intro"type="text" name="intro" onChange={onChangeHandler}  />
        </div>
        <div className="dateframe">
        <p className="dateTitle">취미 일시</p>
        <input className="date" type="date" name="date" onChange={onChangeHandler}  />
        <p className="dateTitle">모집 마감일</p>
        <input className="date" type="date" name="closingDate" onChange={onChangeHandler}  />
        </div>
        <div>
            <label for="local">지역선택</label>
            <select name ="local" id="local">

            </select>
            <p>지역 상세</p>
            <input type="text" name="hobbyPlace" onChange={onChangeHandler}/>

        </div>
        <div>
        <p>시간 시간</p>
        <input className="time" type="time" name="startTime" onChange={onChangeHandler}  />
        <p>종료 시간</p>
        <input className="time" type="time" name="endTime" onChange={onChangeHandler}/>
        </div>
        
       <div>
       <p>정원 명</p>
        <input  type="number" name="maxPersonnel" onChange={onChangeHandler} />
        <p>가격</p>
        <input  type="number" name="maxPersonnel" onChange={onChangeHandler} />
       </div>

        <div>
            카테고리
        </div>

        <div>
            키워드
        </div>

        <div>
            키워드
        </div>

        <div>
        <p>강사소개</p>
        <input  type="text" name="tutorIntro" onChange={onChangeHandler} />
        </div>
        <label htmlFor="input-file"  onChange={handleAddImages}>
          <input type="file" id="input-file" multiple  />
          <span>사진추가</span>
        </label>
        <div>
        {showImages.map((image, id) => (
          <div  key={id}>
            <img  className="image" src={image} alt={`${image}-${id}`} />
            <button onClick={() => handleDeleteImage(id)}>X</button>
          </div>
        ))}
      
        </div>


        </div>

        </>
    )
}

export default HobbyWrite;