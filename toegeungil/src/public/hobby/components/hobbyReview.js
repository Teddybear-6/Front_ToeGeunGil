import React, { useState, useEffect } from 'react';
import "./review.css"
import { FaStar } from 'react-icons/fa';



const ARRAY = [0, 1, 2, 3, 4];
function RevieWrite (){
    const [score ,setScroe] = useState(3);
    const [clicked, setClicked] = useState([true, true, true, false, false]);
    const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
          clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
      };

      useEffect(() => {
        sendReview();
      }, [clicked]); //컨디마 컨디업

      const sendReview = () => {
        let score = clicked.filter(Boolean).length;
        setScroe(score)
        console.log(score)
      };


      return (
        <div className="Wrap">
            <div className="RreviewFrame"> 
          <div className="RatingText">별점</div>
          <div className="Stars">
            {ARRAY.map((el, idx) => {
              return (
                <FaStar
                  key={idx}
                  size="50"
                  onClick={() => handleStarClick(el)}
                  className={clicked[el] && 'yellowStar'}
                />
              );
            })}
          </div>
          <div>
            <input></input>
          </div>
          </div>
        </div>
      );
    }


export default RevieWrite;

