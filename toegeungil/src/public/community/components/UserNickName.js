import { useState, useEffect } from "react";

function UserNickName({ userNo }) {
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        console.log(userNo)
        fetch(process.env.REACT_APP_URL+`/user/${userNo}`).then((response) => response.json()).then((data) => setNickName(data)).catch((error) => {
        console.log(error);
        })
    }, [userNo]);

    return (
        <span>{nickName.nickName}</span>
    )

}

export default UserNickName;