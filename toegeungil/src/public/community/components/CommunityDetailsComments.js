import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsStyle from './css/CommunityDetailsComments.module.css'
import UserNickName from "./UserNickName";


const CommunityDetailsComments = () => {
    const { communityNum } = useParams();
    const [ comments, setComments] = useState([]);
    const [userNum, setUserNum] = useState(null);

    const getComments = () => {
        fetch(`http://localhost:8001/communitys/comments/${communityNum}`)
        .then((response) => response.json())
        .then((data) => {
            setComments(data);
            setUserNum(data.userNum);
        });
    };

    // 댓글을 쓴 날짜와 시간 형식으로 보여주기  
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'};
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    useEffect(() => {
        getComments();
    }, [communityNum]);

    
    return(
        <>
            <div className={CommentsStyle.CommentDetail}>
                    <div className={CommentsStyle.CommentBar}></div>
                    {comments.map((comment) => (
                        <div className={CommentsStyle.CommentsBox}>
                        <div key={comment.commentNum} className={CommentsStyle.CommentDetailsView}>
                            <div className={CommentsStyle.CommentWriterBox}>
                                <div className={CommentsStyle.CommentWriter}>
                                    {comment.userNum !== null && <UserNickName userNo={comment.userNum} />}</div>
                                <div className={CommentsStyle.CommentWriterDate}>
                                    {formatDate(comment.commentWriteDate)}
                                </div>
                            </div>
                            <div className={CommentsStyle.CommentWriterDetail}>
                                {comment.commentDetail}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default CommunityDetailsComments;
