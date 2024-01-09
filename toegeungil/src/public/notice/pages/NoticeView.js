import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../components/NoticeView.css";
import jwt_decode from "jwt-decode";
import NoticeViewImage from "../components/NoticeViewImage";

const NoticeView = () => {
  const { noticeNum } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const navigate = useNavigate(); //useNavigate 훅을 사용해서 페이지 이동을 제어
  const [user, setUser] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("Authorizaton")) {
      setUser(jwt_decode(sessionStorage.getItem("Authorizaton")));
    }
    setLoading(true);
    fetch(process.env.REACT_APP_URL + `/notices/${noticeNum}`)
      .then((response) => response.json())
      .then((data) => {
        setDetail(data);
        setLoading(false);
      });
  }, [noticeNum]);

  /* 관리자인 경우 삭제 */
  const deleteClick = () => {
    if (sessionStorage.getItem("Authorizaton")) {
      setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
    }
    fetch(process.env.REACT_APP_URL + `/notices/${noticeNum}`, {
      method: "DELETE",
      headers: {
        "Authorization": sessionStorage.getItem("Authorizaton")
      }
    })
      .then(response => {
        if (response.ok) {
          alert("공지사항이 삭제되었습니다")
          navigate("/service/notice");
        } else {
          throw new Error("공지사항 삭제 실패하였습니다")
        }
      })
      .catch(error => {
        console.error("공지사항 삭제 중 오류 발생 : ", error);
        alert("공지사항 삭제 중 오류가 발생하였습니다");
      })
  }

  return (
    <div className='toegeungillayou'>
      <div className="notice-view-wrapper">
        {
          loading ? (
            "로딩 중"
          ) : (
            detail ? (
              <>
                <div className="notice-view-title">
                  <label>{detail.noticeTitle}</label>
                </div>
                <div>
                  <div className="notice-view-date">
                    <label>{detail.noticeDate}</label>
                  </div>
                  <div className="notice-view-text-box">
                    {/* 사진 */}
                    <NoticeViewImage noticeNum={noticeNum}/>
                    <div className="notice-view-text">
                      <label style={{whiteSpace:"pre-line"}}>{detail.noticeContent}</label>
                    </div>
                  </div>
                  <div className="notice-button-box">
                    {/* 관리자인 경우 : 삭제, 수정 버튼 */}
                    {!user ? null : (user.auth[0] == 'ADMIN') ?
                      <div>
                        <Link to="/service/notice">
                          <button className="notice-button1" onClick={deleteClick}>삭제</button>
                        </Link>
                        <Link to={`/service/notice/${noticeNum}/modify`}>
                          <button className="notice-button2">수정</button>
                        </Link>
                      </div>
                      : null}
                    <div>
                      <Link to="/service/notice">
                        <button className="notice-button3">목록으로</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : "공지사항이 없습니다"
          )
        }
      </div>
    </div>
  )
}

export default NoticeView;