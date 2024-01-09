
import CardStyle from './css/hobbyCard.module.css';
import { Link } from 'react-router-dom'
import HobbyCardkeyword from './hobbyCardKeyword';
import HobbyCagegoty from './hobbyCategory';



function HobbyCard({ hobbys }) {

    return (
        <>
            {!hobbys ? "취미가 없습니다." :
                <div className={CardStyle.hobbyCard}>
                    <Link to={`/hobby/${hobbys?.hobbyCode}`} className={CardStyle.hobbyCard_Link}>

                        {
                            <img className={CardStyle.hobbyImage} src={`http://106.250.199.126:9000/image/${hobbys?.imageIdDTO?.path}`} />
                        }
                        <div className={CardStyle.hobbyTitle}>{hobbys.hobbyTitle}</div>
                    </Link>
                    <div>
                        <div className={CardStyle.cardkeyword}>
                            <div className={CardStyle.keywordhide}>
                                <HobbyCagegoty category={hobbys?.categoryName} />

                                <HobbyCardkeyword keyword={hobbys?.keyword} />

                            </div>
                        </div>
                    </div>
                    <p className={CardStyle.hobbyPrice}> {hobbys.hobbyPrice}원</p>


                </div>
            }
        </>
    )
}

export default HobbyCard;