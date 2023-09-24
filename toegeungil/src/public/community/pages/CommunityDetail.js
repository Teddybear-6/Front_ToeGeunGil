import layout from "../../layout/layout.css";
import CommunityDetailsTitle from "../components/CommunityDetailsTitle";
import CommunityDetails from "../components/CommunityDetails";
import CommunityDetailsComments from "../components/CommunityDetailsComments";


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
