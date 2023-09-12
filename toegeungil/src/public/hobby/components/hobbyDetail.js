
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageSytle from "./hobbyDetail.module.css"
import HobbyDetailTitle from "./hobbyDetailTitle";


function HobbyDetail(){
    // const{hobbyCode} = useParams();
    const [hobbyCode ,setHobbyCode] = useState(4);
    const [detail , setDetail] =useState({});
    const [images, setImages]= useState([]);
    const [imageCurrentNo , setImageCurrentNo] = useState("");
    const url = [];
    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys/${hobbyCode}`).then((response)=> response.json()).then(data=> setDetail(data))

        {detail.imageId?.map((m,index)=>{
            fetch(`http://localhost:8001/hobbys/image/${m.id}`).then(res=>res.blob())
            .then(blob => {
                const objectURL = URL.createObjectURL(blob)
                url.push(objectURL)
            })
            setImages(url); 
            setImageCurrentNo(images[0]);
           
            

        })}
        
    },[hobbyCode])

   const onChangeImage = image => {
    setImageCurrentNo(image)
    }
  

    
    return(
        <> 
         <div>
            <HobbyDetailTitle detail={detail}></HobbyDetailTitle>
            </div>
          <div className={ImageSytle.mainImageDiv}>
            <img src={imageCurrentNo} className={ImageSytle.mainImage}></img>
         <div>
           {images?.map((image, no) => (
              <div className={ImageSytle.slideContent} key={no} onClick={() => {
                onChangeImage(image);
              }}>
                <picture>
                  <img className={ImageSytle.smallImage} src={image} />
                </picture>
              </div>

            ))}
           </div>
           </div>


        </>
    )
}


export default HobbyDetail;