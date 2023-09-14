import React, { useState, useEffect } from 'react';
import "./review.css"
import { FaStar } from 'react-icons/fa';



const ARRAY = [0, 1, 2, 3, 4];

function RevieWrite ({hobbyCode}){
    const [score ,setScroe] = useState(3);
    const [content ,setContent] = useState(3);
    const [clicked, setClicked] = useState([true, true, true, false, false]);

   console.log(sessionStorage.getItem("Authorizaton"))
    
      useEffect(() => {
        sendReview();
      }, [clicked]); //컨디마 컨디업

      const sendReview = () => {
        let score = clicked.filter(Boolean).length;
        setScroe(score)
      };

      const onChangeHandeler =(e) =>{
        setContent(e.target.value)
      }


      const onClickHandler =()=>{
        fetch(`http://localhost:8001/hobbys/review/${hobbyCode}`,{
            method : "POST",
            headers :{
                "Content-Type" : "applcation/json; charset=UTF-8",
                "Authorization" :  sessionStorage.getItem("Authorizaton"),
                
            },
            body: JSON.stringify({
                "userNo" : 2,
                "content": content,
                "score": score,

              }),
        })

      }

      const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
          clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
      };

      return (
        <div className="Wrap">
            <div className="RreviewFrame"> 
        
          <div className="Stars">
          <div className="RatingText">별점</div>
            {ARRAY.map((el, idx) => {
              return (
                <FaStar
                  key={idx}
                  size="30"
                  onClick={() => handleStarClick(el)}
                  className={clicked[el] && 'yellowStar'}
                />
              );
            })}
          </div>
          <div>
            <input type="text" className="reviewContent" name='content' onChange={onChangeHandeler}></input>
            <button className='reviewBtn' onClick={onClickHandler}>등록</button>
          </div>
          </div>
        </div>
      );
    }


export default RevieWrite;

