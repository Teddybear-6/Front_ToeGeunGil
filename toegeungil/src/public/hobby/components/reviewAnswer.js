import "./css/review.css"
import { useState, useEffect } from "react";
import NameCard from "./name";
function ReviewAnswer({ answer }) {

    useEffect(() => {

    }, [answer])

    return (
        <>
            <div className="reciewAnswer">
                <div className="reviewViewsBox">
                    <NameCard props={answer} />

                </div>
                <div className="answerContentBox">
                    <p className="answerContent">{answer.content} </p>
                </div>

            </div>

        </>
    )
}

export default ReviewAnswer;