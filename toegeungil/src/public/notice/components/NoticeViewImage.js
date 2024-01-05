import { useEffect, useState } from "react";
import "../components/NoticeView.css";

function NoticeViewImage({ noticeNum }) {
    const [image, setImage] = useState();

    useEffect(() => {
        fetch(process.env.REACT_APP_URL+`/notices/img/${noticeNum}`)
            .then(response => response.json())
            .then(data => setImage(data));
    }, [noticeNum]);

    return (
        <>
            {
                !image ? null : <img className="notice-image" src={`http://106.250.199.126:9000/image/${image.path}`} />
            }
        </>
    )
}

export default NoticeViewImage;