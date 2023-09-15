import React from "react";
import NoticeTableColumn from "./NoticeTableColumn";
import { Link } from "react-router-dom";

const NoticeTableRow = ({ notice }) => {

    return (
        <Link to={`/notice/${notice.noticeNum}`} style={{ textDecoration: "none" }}>
            <div className="notice-title-box">
                <tr>
                    <NoticeTableColumn className="notice-title-col1" state={notice.noticeNum} />
                    <NoticeTableColumn className="notice-title-col2" state={notice.noticeContent} />
                    <NoticeTableColumn className="notice-title-col3" state={notice.noticeDate} />
                </tr>
            </div>
        </Link>
    )
}

export default NoticeTableRow;