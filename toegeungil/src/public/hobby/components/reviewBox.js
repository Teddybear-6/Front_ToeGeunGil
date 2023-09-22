
import { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import "./review.css"
import ReviewAnswer from "./reviewAnswer";
import NameCard from "./name";
const ARRAY = [0, 1, 2, 3, 4];
function ReviewBox({review}){
    const[answer , setAnswer] = useState(null);


    const today = new Date(review.crateDate)
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hours = ('0' + today.getHours()).slice(-2); 
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2); 
    const timeString = hours + ':' + minutes  + ':' + seconds;
    const data = `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date} ${timeString}`


    const star = () =>{
        const newArr =[];
        for(let index =0; index  < 5; index++){
            if(index<review.score){
                newArr.push( <FaStar
                    key={index}
                    size="30"
                    className='yellowStar'
                  />)
            }else(
                newArr.push( <FaStar
                    key={index}
                    size="30"/>)
            )
          
    }
    return newArr;
  }
    
   
   useEffect(()=>{
     fetch(process.env.REACT_APP_URL+`/hobbys/review/answer/${review.reviewCode}`)
     .then(res=>res.json())
     .then(res=>setAnswer(res)).catch(e=>console.log(e))

     console.log(answer)
   },[review])

    return(
        <>
        <div className="RreviewFrame">
            <div className="view">
             <div className="reviewViewsBox">
                <NameCard props={review}/>
                <p>{data}</p>
                 {star()}
             </div>
             <div className="reviewContentBox">
              <p className="content">{review.content}</p>
            </div>
             </div>
          
            {
                answer.length==0 && <ReviewAnswer answer={answer} />
            }
        </div>

        </>
    )

}

export default ReviewBox;