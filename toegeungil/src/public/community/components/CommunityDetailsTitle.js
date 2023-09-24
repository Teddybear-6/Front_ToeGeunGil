import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsTitleStyle from './css/CommunityDetailsTitle.module.css';
import CommunityLocation from "./CommunityLocation";
import CommunityKeyword from "./CommunityKeyword";

const CommunityDetailsTitle = () => {
    const { communityNum } = useParams();
    const [community, setCommunity] = useState({});
    // 더 이상 배열이 아닌 객체로 상태 설정
    const [locationNum, setLocationNum] = useState(null);
    // 초기값을 null로 설정 

    const getCommunity = () => {
        fetch(process.env.REACT_APP_URL + `/communitys/${communityNum}`)
            .then((response) => response.json())
            .then((data) => {
                setCommunity(data);
                setLocationNum(data.locationNum);
                // locationNum 값 설정
            });
    };

    useEffect(() => {
        getCommunity();
    }, [communityNum]);

    return (
        <>
        
            <div className={DetailsTitleStyle.title}>
                <div>
                    <div className={DetailsTitleStyle.communityTitleBoard}>
                        <div
                            className={DetailsTitleStyle.communityTitleName}>{community.communityTitle}
                        </div>
                        <div className={DetailsTitleStyle.keyword}></div>
                        <div className={DetailsTitleStyle.communityLocal}>
                            {locationNum !== null && <CommunityLocation localCode={community.localCode} />}
                            {/* localNum의 값이 null이 아닐 경우에만 렌더링 되게 설정 */}
                        </div>
                        <div className={DetailsTitleStyle.communityKeywordList}>
                            <div className={DetailsTitleStyle.communityKeywordDTOList1}>
                            {community.communityKeywordDTOList?.map((m, index) => (
                                <CommunityKeyword key={index} code={m} />
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommunityDetailsTitle;
