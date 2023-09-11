import { Link } from "react-router-dom";



const CommunityList = () => {
    return (
        <div className="Community-list">
            <table>
                <thead>
                    <tr>
                    <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>지역</th>
                            <th>키워드</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        CommunityList.map((community, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="title">
                                        <Link to={`/communitys/${community.communityNum}`}>{community.communityTitle}</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CommunityList;