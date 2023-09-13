import React from "react";
import './NoticeTable.css';
import NoticeTableRow from "./NoticeTableRow";

const NoticeTable = props => {
    const { noticeHeadersName, children } = props;

    return (
        <table className="notice-table" >
            <thead className="notice-table-column" style={{fontSize:20,fontWeight:"bold",marginBottom:"32px"}}>
                    <td className="notice-header-col1">번호</td>
                    <td className="notice-header-col2">제목</td>
                    <td className="notice-header-col3">작성일</td> 
                    {/* {
                        noticeHeadersName.map((item, index) => {
                            return (
                                <td key={index}>
                                    {item}
                                </td>
                            )
                        })
                    } */}
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