
import HobbyKeyword from './HobbyKeyword';
import HobbyKeywordhide from './hobbyKeywordhide';

import CardStyle from './hobbyCard.module.css';
function HobbyCardkeyword({ keyword }) {

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

        newArrhide.push(

          <HobbyKeywordhide keyword={keyword[index]} />

        )

      }
      return newArrhide;
    }

  }


  return (
    <>

      {keywordArr(keyword)}
      {keyword?.length >= 3 &&
        <>
          <div className={CardStyle.keywordUnName}>· · ·
            <div className={CardStyle.mainHobbyKeysTool}>
              <div className={CardStyle.mainHobbyKeysToolFlex}>

                {keywordArrhide(keyword)}
              </div>
            </div>
          </div>
        </>
      }


    </>
  )


}

export default HobbyCardkeyword;