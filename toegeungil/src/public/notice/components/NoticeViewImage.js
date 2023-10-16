import { useEffect, useState } from "react";

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
                !image ? null : <img  src={`http://106.250.199.126:9000/image/${image.path}`} />
            }
        </>
    )
}

export default NoticeViewImage;