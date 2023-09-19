import CommunityDetailsTitle from "../components/CommunityDetailsTitle";
import CommunityDetails from "../components/CommunityDetails";
import CommunityDetailsComments from "../components/CommunityDetailsComments";
import layout from "../../layout/layout.css";


function CommunityDetail({ }) {
    return (
        <>
            <div className={layout.layout}>
                <CommunityDetailsTitle />
                <CommunityDetails />
                <CommunityDetailsComments />
            </div>
        </>
    );
}

export default CommunityDetail;
