
import { useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import { Link } from 'react-router-dom'
import HobbyCardkeyword from './hobbyCardKeyword';
import HobbyCagegoty from './hobbyCategory';



function HobbyCard({ hobbys }) {

    return (
        <>
            {!hobbys ? "취미가 없습니다." :
                <Link to={`/hobby/${hobbys?.hobbyCode}`}>
                    <div className={CardStyle.hobbyCard}>
                        {
                            <img className={CardStyle.hobbyImage} src={`http://106.250.199.126:9000/image/${hobbys?.imageIdDTO?.path}`} />
                        }
                        <p className={CardStyle.hobbyTitle}>{hobbys.hobbyTitle}</p>

                        <div className={CardStyle.keywordhide}>
                            <HobbyCagegoty category={hobbys?.categoryName} />

                            <HobbyCardkeyword keyword={hobbys?.keyword} />

                        </div>
                        <p className={CardStyle.hobbyPrice}> {hobbys.hobbyPrice}원</p>
                    </div>
                </Link>
            }
        </>
    )
}

export default HobbyCard;