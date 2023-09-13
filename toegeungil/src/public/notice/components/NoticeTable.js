import React from "react";
import './NoticeTable.css';

const NoticeTable = props => {
    const { noticeHeadersName, children } = props;

    return (
        <table className="notice-table">
            <thead>
                <tr>
                    {
                        noticeHeadersName.map((item, index) => {
                            return (
                                <td className="notice-table-header-column" key={index}>{item}</td>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    children
                }
            </tbody>
        </table>
    )
}

export default NoticeTable;