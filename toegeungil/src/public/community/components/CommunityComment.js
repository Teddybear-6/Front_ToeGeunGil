import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
import CommentsStyle from './css/CommunityDetailsComments.module.css';
import UserNickName from "./UserNickName";

function CommunityComment() {
    const [user, setUser] = useState();
    const { communityNum } = useParams();
    const [comment, setComment] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (sessionStorage.getItem("Authorization")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorization")));
        }

        fetch(process.env.REACT_APP_URL + `/communitys/comments/${communityNum}`)
            .then(response => response.json())
            .then(data => {
                setComments(data);
                setUser(data.userNum);
            })
            .catch(error => {
                console.error(error);
            });
    }, [comment]);

    const onChangeComment = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value,
        });
    };

    const formatDate = (dateString) => {
        if (!dateString) {
            return "";
        }
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        const date = new Date(dateString);
        return date.toLocaleString(undefined, options);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    
            // 댓글 등록 요청
            fetch(process.env.REACT_APP_URL + `/communitys/comments/${communityNum}`, {
                method: "POST",
                headers: {
                    "Authorization": sessionStorage.getItem("Authorizaton"),
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(comment),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("서버 응답 오류");
                    }
                })
                .then(data => {
                    setComments([...comments, data]);
                    setComment({
                        userNum: '', // 초기화 또는 필요에 따라 다른 값을 설정
                        commentDetail: '',
                        commentWriteDate: new Date().toISOString(),
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        
    };
    

    return (
        <>
            <div className={CommentsStyle.CommentDetail}>
                {comments.length > 0 &&
                    comments.map((comment) => (
                        <div className={CommentsStyle.CommentsBox} key={comment.commentNum}>
                            <img className={CommentsStyle.CommunityParticipate} src="/participate.png" alt="participate" />
                            <div className={CommentsStyle.CommentDetailsView}>
                                <div className={CommentsStyle.CommentWriterBox}>
                                    <div className={CommentsStyle.CommentWriter}>
                                        <div className={CommentsStyle.CommentWriter}>
                                            {comment.userNum !== null && <UserNickName userNo={comment.userNum} />}
                                        </div>
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
                    className={CommentsStyle.NewCommentInputBox}
                    name="commentDetail"
                    placeholder="댓글을 입력하세요"
                    type="text"
                    onChange={onChangeComment}
                    value={comment.commentDetail}
                />
                <button className={CommentsStyle.NewCommentButton} onClick={(e) => handleSubmit(e)}>
                    등록
                </button>
            </div>
        </>
    );
}

export default CommunityComment;
