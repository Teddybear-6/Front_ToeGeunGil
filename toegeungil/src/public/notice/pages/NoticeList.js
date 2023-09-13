import React from "react";
import NoticeTable from "../components/NoticeTable";
import NoticeTableRow from "../components/NoticeTableRow";
import NoticeTableColumn from "../components/NoticeTableColumn";

const NoticeList = props => {
    return (
        <>
        <NoticeTable noticeHeadersName={['번호', '제목', '작성일']}>
            <NoticeTableRow>
                <NoticeTableColumn>1</NoticeTableColumn>
                <NoticeTableColumn>첫번째 공지사항</NoticeTableColumn>
                <NoticeTableColumn>2023-09-12</NoticeTableColumn>
            </NoticeTableRow>
            <NoticeTableRow>
                <NoticeTableColumn>2</NoticeTableColumn>
                <NoticeTableColumn>두번째 공지사항</NoticeTableColumn>
                <NoticeTableColumn>2023-09-12</NoticeTableColumn>
            </NoticeTableRow>
        </NoticeTable>
        </>
    )
}

export default NoticeList;