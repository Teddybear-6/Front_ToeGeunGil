
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageSytle from "./hobbyDetail.module.css"
import HobbyDetailTitle from "./hobbyDetailTitle";
import HobyTest from "./HobyTest";

function HobbyDetail(){
    // const{hobbyCode} = useParams();
    const [hobbyCode ,setHobbyCode] = useState(4);
    const [detail , setDetail] =useState({});
    const[category, setCategery] =useState([]);
    const[imageNum , setImageNum] =useState();

    const url = [];
    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys/${hobbyCode}`)
        .then((response)=> response.json()).then(data=> {
            setDetail(data);
    
        })
        
    },[])


    
    return(
        <> 
         <div>
            <HobbyDetailTitle detail={detail} category={category}></HobbyDetailTitle>
        </div>
        <div className={ImageSytle.mainImageDiv}>
            {
                 !detail.imageId? "존재하지 않음" : <HobyTest detail={detail?.imageId[0]}/>
            }
            {
                !detail? "존재하지 않음" : detail.imageId?.map(r => <HobyTest detail={r}/>)
            }
        </div>


        </>
    )
}


export default HobbyDetail;