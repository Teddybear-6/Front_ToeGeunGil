import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import CommentsStyle from './css/CommunityDetailsComments.module.css'
import UserNickName from "./UserNickName";


const CommunityDetailsComments = () => {
    const { communityNum } = useParams();
    const [comments, setComments] = useState([]);
    const [userNum, setUserNum] = useState(null);
    const [newComment, setNewComment] = useState("");
    const commentInputRef = useRef(null);

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
        if (!dateString) {
            return "";
            // 빈값일 때 날짜 안뜨게 하기 
        }
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    useEffect(() => {
        getComments();
    },[communityNum]);

    const handleComment = () => {

        const newCommentObject = {
            userNum: userNum,
            commentDetail: newComment,
            commentWriteDate: new Date().toISOString()
        };

        fetch(`http://localhost:8001/communitys/comments/${communityNum}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCommentObject),
        })
            .then((response) => response.json())
            .then((data) => {
                setNewComment(""); 
                const commentWithTime = { ...data, commentWriteDate: new Date().toLocaleString()};
                // 서버에서 반환된 새 댓글 데이터에 시간 추가 
                setComments([...comments, commentWithTime]);
                // 새로운 댓글을 기존 댓글 목록에 추가  
            })
            .catch((error) => {
                console.error('댓글 등록에 실패하였습니다.', error);
            })
            window.location.reload();
    };

    return (
        <>
            <div className={CommentsStyle.CommentDetail}>
                <div className={CommentsStyle.CommentBar}></div>
                {comments.length > 0 &&
                    comments.map((comment) => (
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
            <div className={CommentsStyle.NewCommentBox}>
                <input
                    ref={commentInputRef}
                    className={CommentsStyle.NewCommentInputBox}
                    placeholder="댓글을 입력하세요"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button className={CommentsStyle.NewCommentButton} onClick={handleComment}>
                    등록
                </button>
            </div>
        </>
    )

}

export default CommunityDetailsComments;