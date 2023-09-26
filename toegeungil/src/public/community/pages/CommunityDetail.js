import CommunityDetailsTitle from "../components/CommunityDetailsTitle";
import CommunityDetails from "../components/CommunityDetails";
import CommunityComment from "../components/CommunityComment";
import '../../layout/layout.css';
import { useEffect, useState, useCallback } from "react";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";


function CommunityDetail({ }) {

    const [comment, setComment] = useState({});
    const [comments, setComments] = useState([]);
    const { communityNum } = useParams();
    const [user, setUser] = useState();


    const handleSubmit = useCallback((e) => {
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
                        return response.text();
                    } else {
                        throw new Error("서버 응답 오류");
                    }
                })
                .then(data => {
                    alert(data)
                    setComment({
                        userNum: '', // 초기화 또는 필요에 따라 다른 값을 설정
                        commentDetail: '',
                        commentWriteDate: new Date().toISOString(),
                    })
                })
                .catch(error => {
                    console.error(error);
                });
        
    },[comment]);

    useEffect(()=>{
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }

        console.log("실행ㄴ")
        fetch(process.env.REACT_APP_URL + `/communitys/comments/${communityNum}`)
        .then(response => response.json())
        .then(data => {
            setComments(data);
            setUser(data.userNum);
        })
        .catch(error => {
            console.error(error);
        });
    },[handleSubmit])



    return (
        <>
            <div className='ttoegeungillayou'>
                <CommunityDetailsTitle />
                <CommunityDetails />
                <CommunityComment comments={comments} setComments={setComments} comment={comment} setComment={setComment} communityNum={communityNum} handleSubmit={handleSubmit}/>
            </div>
        </>
    );
}

export default CommunityDetail;
