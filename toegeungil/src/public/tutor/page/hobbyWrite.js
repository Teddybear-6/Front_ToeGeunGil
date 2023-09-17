import { useState } from "react";
const imageStyle={
    width: "120px",
    height: "50px"
}
function HobbyWrite(){
    const [mainImageUrl , setMainImageUrl] = useState(process.env.PUBLIC_URL+`file-upload.svg`);
    const [hobby , setHobby] = useState({})
    const [mainimageFile , setMainImageFile] =useState(null)
    


    const saveFileImage = (event) =>{
        if(event.target.files[0]=== undefined){
            setMainImageFile(null)
            setMainImageUrl(process.env.PUBLIC_URL+`file-upload.svg`);
        }else{
            setMainImageUrl(URL.createObjectURL(event.target.files[0]));
        }
      
      };

    const onChangeHandler = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setHobby({ ...hobby, [e.target.name]: e.target.value });
    };
    return(
        <>
        <div>
          취미생성
        </div>
        <div>
        <p>취미제목</p>
        <input type="text" name="hobbyTitle" onChange={onChangeHandler} />
      
        <p>대표사진</p>
        <label htmlFor="mainImage">
        <img style={imageStyle} src={mainImageUrl} alt="이미지"></img>
        </label>
        <input type="file"  id="mainImage"  accept="image/*" style={{display:"none"}} onChange={saveFileImage}/>
      
        <p>소개글</p>
        <input type="text" name="intro" onChange={onChangeHandler}  />

        <p>일시</p>
        <input type="date" name="date" onChange={onChangeHandler}  />
        <input type="time" name="startTime" onChange={onChangeHandler}  />
        <input type="time" name="endTime" onChange={onChangeHandler}  />
        </div>


        </>
    )
}

export default HobbyWrite;