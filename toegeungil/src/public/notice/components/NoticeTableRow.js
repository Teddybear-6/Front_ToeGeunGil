import React from "react";

const NoticeTableRow = ({ children }) => {
    return (
        <tr className="notice-table-row">
            {
                children
            }
        </tr>
    )
}

export default NoticeTableRow;