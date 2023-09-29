import '../../layout/layout.css';
import SocialDetailCard from '../components/SocialDetailCard';


function SocialDetail() {

    return (
        <>
            <div className='toegeungillayout'>
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