
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import HobbyKeyword from './HobbyKeyword';
import HobbyStyle from './HobbyDetailTitle.module.css'

function HobbyDetailTitle({ detail }) {
    const [hobby, setHobby] = useState({});
    const [categoryName, setCategoryName] = useState([])
    const [keyword, setKeyword] = useState([]);

    const formatDate = (dateString) => {
        if (!dateString) {
            return "";
        }
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        const date = new Date(dateString);
        return date.toLocaleString(undefined, options);
    };


    useEffect(() => {


        fetch(process.env.REACT_APP_URL + `/category/${detail.categoryCode}`).then(res => res.json()).then(data => {
            setCategoryName(data)
        })



        setHobby(detail);
        setKeyword(detail.keywordDTOList)

    }, [detail])

    const keywordArr = () => {
        const newArr = [];
        for (let index = 0; index < keyword?.length; index++) {
            newArr.push(<div key={index} className={CardStyle.keywordCard}>
                <HobbyKeyword keyword={hobby.keywordDTOList[index]} />
            </div>)

        }
        return newArr;
    }

    return (
        <>
            <div className={HobbyStyle.titleAndkeyword}>
                <h1 className={HobbyStyle.hobbyTitle}>{hobby.hobbyTitle}</h1>

                <div className={HobbyStyle.keywordAndDate}>
                    <div className={HobbyStyle.keywordCard}>
                        {
                            !categoryName.categoryName ? "" : <p className={CardStyle.keywordName}>{categoryName.categoryName}</p>
                        }
                    </div>
                    <div>
                        {keywordArr()}
                    </div>
                </div>
                <div className={HobbyStyle.date}>
                    <p>{detail.updateDate == null ? "작성일 : " + formatDate(detail.crateDate) : "수정일 : " + formatDate(detail.updateDate)}</p>
                </div>

            </div>

        </>
    )
}



export default HobbyDetailTitle;