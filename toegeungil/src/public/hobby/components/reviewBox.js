
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { FaStar } from 'react-icons/fa';
import "./review.css"
import ReviewAnswer from "./reviewAnswer";
import NameCard from "./name";

const ARRAY = [0, 1, 2, 3, 4];
function ReviewBox({ review, api }) {
    const [answer, setAnswer] = useState(null);
    const [user, setUser] = useState();

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

    const deleteOnclickHandler = (reviewCode) => {
        if (window.confirm("후기 삭제하시겠습니까")) {
            fetch(process.env.REACT_APP_URL + `/hobbys/review/${reviewCode}`, {
                method: "DELETE",
                headers: {
                    "Authorization": sessionStorage.getItem("Authorizaton")
                }
            }).then(res => {
                if (res.status === 404) {
                    alert("삭제 실패했습니다.");
                    api();
                } else {
                    return res.json();
                }
            }).then(res => {
                alert(res['value'])
                api()
            });

        }

    }

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }

        fetch(process.env.REACT_APP_URL + `/hobbys/review/answer/${review?.reviewCode}`)



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

                        {!user ? null : user.no === review.userNo ? <button className="reciewDeleteBtn" onClick={() => deleteOnclickHandler(review.reviewCode)} >삭제</button> : null}
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