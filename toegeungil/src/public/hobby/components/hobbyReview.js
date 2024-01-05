import React, { useState, useEffect } from 'react';
import "./css/review.css"
import { FaStar } from 'react-icons/fa';



const ARRAY = [0, 1, 2, 3, 4];

function RevieWrite({ hobbyCode }) {
  const [score, setScroe] = useState(3);
  const [content, setContent] = useState(3);
  const [clicked, setClicked] = useState([true, true, true, false, false]);



  useEffect(() => {
    sendReview();
  }, [clicked, hobbyCode]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    setScroe(score)
  };

  const onChangeHandeler = (e) => {
    setContent(e.target.value)
  }


  const onClickHandler = () => {
    fetch(process.env.REACT_APP_URL + `/hobbys/review/${hobbyCode}`, {
      method: "POST",

      body: JSON.stringify({

        "content": content,
        "score": score,

      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": sessionStorage.getItem("Authorizaton"),

      },
    }).then(res => {
      if (res.ok) {
        alert("후기 등록 되었습니다.")
        window.location.replace(`/hobby/${hobbyCode}`)
      } else if (res.status == 404) {
        throw new Error("404")
      }


    }).catch((e) => {
      alert("후기를 작성할 수 없습니다.")
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
      <div className="RreviewFrameRegist">

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

