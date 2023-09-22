import CommunityList from "../components/CommunityList";
import layout from "../../layout/layout.css";



function CommunityMain({ }) {
    return (
        <>
            <div className={layout.layout}>
                <CommunityList />
            </div>
        </>
    );
}

export default CommunityMain;
