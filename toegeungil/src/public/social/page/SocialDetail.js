import '../../layout/layout.css';
import SocialDetails from '../components/SocialDetails';
import DetailsStyle from "../components/css/SocialDetails.module.css"

function SocialDetail() {

    return (
        <>
            <div className='layout'>
                <div className="menuFont">Social</div>
                <hr className='hrSty' />
                <div className='layout2'>
                    <SocialDetails />
                </div>
            </div>
        </>
    );
}

export default SocialDetail;