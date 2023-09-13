import React, { useEffect } from "react";
import './NoticeTable.css';
import NoticeTableRow from "./NoticeTableRow";
import NoticeTableColumn from "./NoticeTableColumn";

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
                children?.map( (m, index) =>{
                    return(
                        <NoticeTableRow key={index}  notice={m} />
                    )    
                }
                )
            }
            </tbody>
        </table>
    )
}

export default NoticeTable;