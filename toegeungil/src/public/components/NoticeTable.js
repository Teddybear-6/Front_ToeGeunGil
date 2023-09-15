import React from "react";
import './NoticeTable.css';
import NoticeTableRow from "./NoticeTableRow";

const NoticeTable = props => {
    const { noticeHeadersName, children } = props;

    return (
        <table className="notice-wrapper" >
            <thead className="notice-head" >
                <tr>
                    <th className="notice-th1">{noticeHeadersName[0]}</th>
                    <th className="notice-th2">{noticeHeadersName[1]}</th>
                    <th className="notice-th3">{noticeHeadersName[2]}</th>
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