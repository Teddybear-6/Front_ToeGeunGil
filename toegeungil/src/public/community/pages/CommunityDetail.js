import CommunityDetailsTitle from "../components/CommunityDetailsTitle";
import CommunityDetails from "../components/CommunityDetails";
import CommunityComment from "../components/CommunityComment";
import '../../layout/layout.css';



function CommunityDetail({ }) {
    return (
        <>
            <div className='ttoegeungillayou'>
                <CommunityDetailsTitle />
                <CommunityDetails />
                <CommunityComment />
            </div>
        </>
    );
}

export default CommunityDetail;
