import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/NoticeWrite.css";
import jwt_decode from "jwt-decode";

const NoticeWrite = () => {
    const [user, setUser] = useState('');
    const [noticeTitle, setNoticeTitle] = useState(''); // 공지 제목
    const [noticeContent, setNoticeContent] = useState(''); // 공지 내용
    const [image, setImage] = useState({});
    const [showImage, setShowImage] = useState();
    const [notice, setNotice] = useState({
        noticeTitle,
        noticeContent
    });

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    }, [])

    const handleTitleChange = (e) => {
        setNoticeTitle(e.target.value);
        setNotice({ ...notice, ["noticeTitle"]: noticeTitle })
    }
    console.log(noticeTitle);

    const handleContentChange = (e) => {
        setNoticeContent(e.target.value);
        setNotice({ ...notice, ["noticeContent"]: noticeContent })
    }
    console.log(noticeContent);


    const cancelClick = () => {
        alert("공지사항 작성이 취소 되었습니다");
    }

    const writeClick = () => {
        console.log(noticeTitle);
        const formData = new FormData();
        const blob = new Blob([JSON.stringify(notice)], {
            type: 'application/json'
        });
        formData.append('notice', blob);
        formData.append('image', image[0]);
        // e.preventDefault(); // submit action을 안타도록 설정
        fetch(process.env.REACT_APP_URL + `/notices`,
            {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json; charset=UTF-8"'
                    "Authorization": sessionStorage.getItem("Authorizaton")
                },
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert("공지사항이 등록 되었습니다");
                } else {
                    alert("공지사항 등록에 실패했습니다");
                }
            })
            .catch(error => {
                console.error("공지사항 등록 중 오류 발생 : ", error);
                alert("공지사항 등록 중 오류 발생했습니다");
            })
    }

    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
        const img = event.target.files;
        const currentImageUrl = URL.createObjectURL(img[0]);
        setShowImage(currentImageUrl);
        setImage(img);
    };

    return (
        <div className='toegeungillayou'>
            <div className="wrapper" >
                <h1 className="write-header">공지사항 작성</h1>
                {user && user.auth[0] === 'ADMIN' ? (
                    <div className="write-wrapper textarea">
                        <div className="write-col1">
                            <label>공지 제목</label>
                            <div className="write-text1 textarea">
                                <input
                                    className="text-box"
                                    type="text"
                                    value={noticeTitle}
                                    onChange={handleTitleChange}
                                />
                            </div>
                        </div>
                        {/* 대표사진, 모임 소개 */}
                        <div className="posFlex">
                            <div className="posTitle">대표 사진</div>
                            <div className="posBoard w575h350 maR50">
                                <label>
                                    <div htmlFor="input-file" onChange={handleAddImages}>
                                        <input className="posimage" type="file" id="input-file" name="image" />
                                        <img className="posBoard_Img w575h350 maR50" src={showImage}></img>
                                    </div>
                                </label>
                                {/* 사진 미리보기... */}
                            </div>
                        </div>
                        <div className="write-col2 flexsty">
                            <label className="write-content">공지 내용</label>
                            <div className="write-text2 textarea">
                                <textarea
                                    className="text-box2"
                                    value={noticeContent}
                                    onChange={handleContentChange}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>관리자가 아닙니다 공지사항 작성 권한이 없습니다</p>
                )}
                {!user ? null : (user.auth[0] == 'ADMIN') ?
                    <div className="button">
                        <Link to="/service/notice">
                            <button className="notice-cancel-button" onClick={cancelClick}>취소</button>
                        </Link>
                        <Link to="/service/notice">
                            <button className="notice-write-button" onClick={writeClick}>등록</button>
                        </Link>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default NoticeWrite;