import React from "react";
import NoticeTableColumn from "./NoticeTableColumn";

const NoticeTableRow = ({notice}) => {


    return (
        <tr className="notice-table-row">
            <NoticeTableColumn>
                {notice}
            </NoticeTableColumn>
        </tr>
    )
}

export default NoticeTableRow;