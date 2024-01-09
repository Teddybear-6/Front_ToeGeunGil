import { useState, useEffect } from "react";
import ReviewBox from "./reviewBox";
import "./css/review.css"

function HobbyReview({ hobbyCode }) {

    const [review, setReview] = useState([{}])

    useEffect(() => {
        api();
    },
        [hobbyCode])

    const api = () => {
        fetch(process.env.REACT_APP_URL + `/hobbys/review/${hobbyCode}`).then(res => res.json()).then(res => setReview(res));
    }

    return (
        <>


            {
                review?.map((m, index) => (
                    <ReviewBox review={m} key={index} api={api} />
                ))

            }


        </>
    )

}


export default HobbyReview;