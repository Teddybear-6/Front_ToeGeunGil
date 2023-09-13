import { useEffect } from "react";

const NoticeTableColumn = ({children}) => {

    return (
        <>
            <td>
                {children.notiNum}
            </td>
            <td>
                {children.noticeTitle}
            </td>
            <td>
                {children.noticeDate}
            </td>
        </>
    )
}

export default NoticeTableColumn;