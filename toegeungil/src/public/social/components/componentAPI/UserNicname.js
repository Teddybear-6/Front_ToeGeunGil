import { useEffect, useState } from "react";

function UserNicname({ userNo }) {
    const [userNic, setUserNic] = useState({});

    useEffect(() => {
        fetch(process.env.REACT_APP_URL+`/user/${userNo}`)
            .then(response => response.json())
            .then(data => setUserNic(data));
    }, [userNo]);

    return(
        <>
            {userNic == null? "읽어오지 못함":userNic.nickName}
            {/* {userNic.nickName} */}
        </>
    )
}

export default UserNicname;