import layout from "../../layout/layout.css";
import CommunityDetailsTitle from "../components/CommunityDetailsTitle";
import CommunityDetails from "../components/CommunityDetails";
<<<<<<< HEAD
import layout from "../../layout/layout.css";
import CommunityComment from "../components/CommunityComment";
=======
import CommunityDetailsComments from "../components/CommunityDetailsComments";
>>>>>>> fb0edd38a3954a65bd587b89cb8b240452a98d39


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
