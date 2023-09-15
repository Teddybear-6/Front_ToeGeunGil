import React from "react";
import './NoticeTable.css';
import NoticeTableRow from "./NoticeTableRow";

const NoticeTable = props => {
    const { noticeHeadersName, children } = props;

    return (
        <table className="notice-table" >
            <thead style={{ fontSize: 20, fontWeight: "bold"}}>
                <tr>
                    <th className="notice-header-col1">{noticeHeadersName[0]}</th>
                    <th className="notice-header-col2">{noticeHeadersName[1]}</th>
                    <th className="notice-header-col3">{noticeHeadersName[2]}</th>
                </tr>
            </thead>
            <tbody>
                {
                    children?.map((m, index) => {
                        return (
                            <NoticeTableRow key={index} notice={m} />
                        )
                    }
                    )
                }
            </tbody>
        </table>
    )
}

export default NoticeTable;