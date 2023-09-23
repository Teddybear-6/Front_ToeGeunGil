import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import CommentsStyle from './css/CommunityDetailsComments.module.css'
import UserNickName from "./UserNickName";
import jwt_decode from "jwt-decode";

const CommunityDetailsComments = () => {
    const { communityNum } = useParams();
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState();

    const [newComment, setNewComment] = useState("");
    const commentInputRef = useRef(null);

    useEffect(() => {
        if (sessionStorage.getItem("Authorization")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorization")))
        }

        // Fetch comments when the component mounts
        getComments();
    }, [communityNum]);

    // Fetch comments from the server
    const getComments = () => {
        fetch(process.env.REACT_APP_URL + `/communitys/comments/${communityNum}`)
            .then((response) => response.json())
            .then((data) => {
                setComments(data);
            })
            .catch((error) => {
                console.error('Failed to fetch comments:', error);
            });
    };

    const formatDate = (dateString) => {
        if (!dateString) {
            return "";
        }
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleComment = () => {
        // Check if the user is logged in
        if (!(user === undefined) && !(user === null)) {
            const newCommentObject = {
                userNum: user.userNum,
                commentDetail: newComment,
                commentWriteDate: new Date().toISOString()
            };

            fetch(process.env.REACT_APP_URL + `/communitys/comments/${communityNum}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("Authorization"),
                },
                body: JSON.stringify(newCommentObject),
            })
                .then((response) => response.json())
                .then((data) => {
                    setNewComment("");
                    const commentWithTime = { ...data, commentWriteDate: new Date().toLocaleString() };
                    setComments([...comments, commentWithTime]);
                })
                .catch((error) => {
                    console.error('Failed to post comment:', error);
                });
        } else {
            alert("로그인 후 댓글을 작성할 수 있습니다.");
        }
    };

    return (
        <>
            <div className={CommentsStyle.CommentDetail}>
                {/* Render comments here */}
                {comments.length > 0 &&
                    comments.map((comment) => (
                        <div className={CommentsStyle.CommentsBox} key={comment.commentNum}>
                            <img className={CommentsStyle.CommunityParticipate} src="/participate.png" alt="participate" />
                            <div className={CommentsStyle.CommentDetailsView}>
                                <div className={CommentsStyle.CommentWriterBox}>
                                    <div className={CommentsStyle.CommentWriter}>
                                        {comment.userNum !== null && <UserNickName userNo={comment.userNum} />}
                                    </div>
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
