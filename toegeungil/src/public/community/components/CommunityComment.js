import React, { useState, useEffect } from "react";
import CommentsStyle from './css/CommunityDetailsComments.module.css';
import UserNickName from "./UserNickName";

function CommunityComment({comments, setComments, communityNum, comment, setComment, handleSubmit}) {
    
    
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
