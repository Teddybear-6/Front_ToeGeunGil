import CardStyle from './css/hobbyCard.module.css';


function HobbyCagegoty({ category }) {

    return (
        <div className={CardStyle.keywordCard}>
            <p className={CardStyle.keywordName}>{category}</p>
        </div>
    )
}

export default HobbyCagegoty;