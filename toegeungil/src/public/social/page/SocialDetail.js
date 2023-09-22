import '../../layout/layout.css';
import SocialDetailCard from '../components/SocialDetailCard';
import DetailsStyle from "../components/css/SocialDetails.module.css"

function SocialDetail() {

    return (
        <>
            <div className='layout'>
                <div className="menuFont">Social</div>
                <hr className='hrSty' />
                <div className='layout2'>
                    <SocialDetailCard />
                </div>
            </div>
        </>
    );
}

export default SocialDetail;