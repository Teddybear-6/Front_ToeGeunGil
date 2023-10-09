
import HobbyKeyword from './HobbyKeyword';
import { useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
function HobbyCardkeyword({ keyword }) {
  useEffect(() => {

  }, [keyword])
  const newArr = [];
  const newArrhide = [];
  const keywordArr = (keyword) => {
    for (let index = 0; index < keyword?.length; index++) {
      if (index < 2) {
        newArr.push(<div key={index} className={CardStyle.keywordCard}>
          <HobbyKeyword keyword={keyword[index]} />
        </div>)
      }
    }
    return newArr;
  }


  const keywordArrhide = (keyword) => {
    if (newArr?.length < keyword?.length) {
      for (let index = newArr?.length; index < keyword?.length; index++) {

        newArrhide.push(<div key={index} className={CardStyle.keywordCardhide}>
          <HobbyKeyword keyword={keyword[index]} />
        </div>)

      }
      return newArrhide;
    }

  }


  return (
    <>

      {keywordArr(keyword)}
      {keyword?.length >= 3 &&
        <>
          <div className={CardStyle.keywordUnName}>
            <p className={CardStyle.keywordName}>···</p>
          </div>
          {keywordArrhide(keyword)}
        </>
      }


    </>
  )


}

export default HobbyCardkeyword;