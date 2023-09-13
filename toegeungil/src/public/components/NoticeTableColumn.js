import React from "react";

const NoticeTableColumn = ({children}) => {

    return (
        <>
            <td className="notice-table-column">
                <div className="notice-col1">{children.noticeNum}</div>
                <div className="notice-col2">{children.noticeTitle}</div>
                <div className="notice-col3">{children.noticeDate}</div>
            </td>
            {/* <td className="notice-table-column ">
                {children.noticeTitle}
            </td>
            <td className="notice-table-column ">
                {children.noticeDate}
            </td> */}
        </>
    )
}

export default NoticeTableColumn;