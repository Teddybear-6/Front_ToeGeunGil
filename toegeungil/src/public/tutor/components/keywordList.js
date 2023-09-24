import { useState, useEffect } from "react";

function KeywordList({ keyword, hobby, setHobby, hobbyKeyword }) {

  const [keywordDTOList, setKeywordDTOList] = useState();
  useEffect(() => {
    keywordHandler()
    setKeywordDTOList(hobby.keywordDTOList)
  }, [hobbyKeyword])

  const keywordHandler = () => {
    const selectBox = document.getElementsByName("keywordCode")
    for (let j = 0; j < hobbyKeyword?.length; j++) {
      selectBox[hobbyKeyword[j].keywordCode - 1].checked = true;
    }

  }

  const keywordChangeHander = (checked, id) => {

    if (checked) {
      keywordDTOList.push({ "keywordCode": id })


      // setKeywordDTOList(keywordDTOList => [...keywordDTOList, {"keywordCode" : id }] )

    } else {
      // setKeywordDTOList(keywordDTOList.filter(el =>  el.keywordCode !== id))
      keywordDTOList.pop({ "keywordCode": id })
    }


    setHobby({ ...hobby, keywordDTOList: keywordDTOList })
  };


  return (
    <>
      {/* { !keyword ? null :keywordHandler()} */}
      {
        !keyword.map ? "키워드가 없습니다." : keyword.map((m, index) => {
          return (
            <label htmlFor="keywordCode"><input className="keywordCheck" key={index}
              type="checkbox" name="keywordCode" value={m.keywordCode}
              onChange={(e) => { keywordChangeHander(e.currentTarget.checked, m.keywordCode) }}
            />{m.keywordName}</label>
          )
        })


      }
    </>
  )






}

export default KeywordList;