import CommunityPosting from "../components/CommunityPosting";
import layout from "../../layout/layout.css";


function CommunityWrite({}) {
    return (
        <>
            <div className={layout.layout}>
                <CommunityPosting />
            </div>
        </>
    );
}

export default CommunityWrite;