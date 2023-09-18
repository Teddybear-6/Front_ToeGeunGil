import { useState, useEffect } from "react";

function UserNickName({ userNo }) {
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        console.log(userNo)
        fetch(`http://localhost:8001/user/${userNo}`).then((response) => response.json()).then((data) => setNickName(data.nickName || '')).catch((error) => {
            console.log(error);
        })
        console.log(userNo)
    }, [userNo]);

    return (
        <span>{nickName}</span>
    )

}

export default UserNickName;