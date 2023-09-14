import React from "react";
import NoticeTableColumn from "./NoticeTableColumn";
import {Link} from "react-router-dom";

const NoticeTableRow = ({notice}) => {

    return (
        <Link to={`/notice/${notice.noticeNum}`} style={{textDecoration:"none"}}>
        <tr className="notice-table-row">
            <NoticeTableColumn  state={notice.noticeNum}/>
            <NoticeTableColumn state={notice.noticeContent}/>
            <NoticeTableColumn state={notice.noticeDate}/>
        </tr>
        </Link>
    )
}

export default NoticeTableRow;