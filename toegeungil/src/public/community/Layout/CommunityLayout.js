import { Outlet } from "react-router-dom";
import CommunityNavbar from "./CommunityNavbar"

function CommunityLayout({ localfilters, setLocalFilters }) {
    return (
        <>
            <div className='toegeungillayout'>
                <div>
                    <CommunityNavbar localfilters={localfilters} setLocalFilters={setLocalFilters} />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default CommunityLayout;