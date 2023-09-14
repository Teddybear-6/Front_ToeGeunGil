import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import '../components/NoticeView.css';
import detailCss from '../components/NoticeView.css';


const NoticeView = ({history}) => {
    const { noticeNum } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(
        () => {
            fetch(`http://localhost:8001/notices/${noticeNum}`)
                .then(response => response.json())
                .then(data => setDetail(data))
        }, [])

    return (
        <div className="view-wrapper">
            {
                detail? (
                    <>
                        <div className="view-name">
                            <label>{detail.noticeTitle}</label>
                        </div>
                        <div className="view-date">
                            <label>{detail.noticeDate}</label>
                        </div>
                        <div className="view-content">
                            <label>{detail.noticeContent}</label>
                        </div>
                    </>
                ) : "공지사항이 없습니다"
            }
            <button className="view-button" onClick={(history)}>목록</button>
        </div>
    )
}

export default NoticeView;