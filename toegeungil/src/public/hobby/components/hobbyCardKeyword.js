
import HobbyKeyword from './HobbyKeyword';
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
function HobbyCardkeyword({ keyword }) {
  useEffect(() => {

  }, [keyword])

  const keywordArr = (keyword) => {

    const newArr = [];
    for (let index = 0; index < keyword?.length; index++) {
      if (index < 2) {
        newArr.push(<div key={index} className={CardStyle.keywordCard}>
          <HobbyKeyword keyword={keyword[index]} />
        </div>)
      }


    }
    return newArr;
  }

  return (
    <>
      {keywordArr(keyword)}

    </>
  )


}

export default HobbyCardkeyword;