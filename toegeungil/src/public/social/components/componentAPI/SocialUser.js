import { useEffect, useState } from "react";

function SocialUser(users) {

    const [user, setUser] = useState({});
    // console.log("Dfsdf" , users.users.userNum)

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/user/${users.users.userNum}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [users]);

    return (
        <>
            <div>
                {/* 회원명 */}
                {!user? null : user.userName}
            </div>
            <div>
                {/* 닉네임 */}
                {!user? null : user.nickName}
            </div>
        </>
    )
}

export default SocialUser;