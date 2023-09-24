import { useState, useEffect } from "react";
function StudentListTr({ userNo }) {
    const [user, setUser] = useState();


    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/user/${userNo}`).then(res => res.json()).then(
            data => setUser(data)
        )


    }, [userNo])


    return (
        <>
            
            <td>{user?.userNo}</td>
            <td>
                {user?.nickName}
            </td>
            <td>{user?.userName}</td>

        </>
    )
}

export default StudentListTr;