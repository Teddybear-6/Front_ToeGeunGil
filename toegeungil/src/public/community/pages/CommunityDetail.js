import CommunityDetailsTitle from "../components/CommunityDetailsTitle";
import CommunityDetails from "../components/CommunityDetails";
import layout from "../../layout/layout.css";
import CommunityComment from "../components/CommunityComment";


function CommunityDetail({ }) {
    return (
        <>
            <div className={layout.layout}>
                <CommunityDetailsTitle />
                <CommunityDetails />
                <CommunityComment />
            </div>
        </>
    );
}

export default CommunityDetail;
