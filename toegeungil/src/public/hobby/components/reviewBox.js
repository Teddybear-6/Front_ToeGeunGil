
import { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import "./review.css"
import ReviewAnswer from "./reviewAnswer";
import NameCard from "./name";
const ARRAY = [0, 1, 2, 3, 4];
function ReviewBox({ review }) {
    const [answer, setAnswer] = useState(null);


    const formatDate = (dateString) => {
        if (!dateString) {
            return "";
        }
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        const date = new Date(dateString);
        return date.toLocaleString(undefined, options);
    };



    const star = () => {
        const newArr = [];
        for (let index = 0; index < 5; index++) {
            if (index < review.score) {
                newArr.push(<FaStar
                    key={index}
                    size="30"
                    className='yellowStar'
                />)
            } else (
                newArr.push(<FaStar
                    key={index}
                    size="30" />)
            )

        }
        return newArr;
    }


    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/hobbys/review/answer/${review?.reviewCode}`)
            .then(res => res.json())
            .then(res => setAnswer(res)).catch(e => console.log(e))

    }, [review])

    return (
        <>
            {!review ? null :
                <div className="RreviewFrame">
                    <div className="view">
                        <div className="reviewViewsBox">
                            <NameCard props={review} />
                            <p>{formatDate(review.crateDate)}</p>
                            {star()}
                        </div>
                        <div className="reviewContentBox">
                            <p className="content">{review.content}</p>
                        </div>
                    </div>

                    {
                        answer?.length == 0 && <ReviewAnswer answer={answer} />
                    }
                </div>
            }
        </>
    )

}

export default ReviewBox;