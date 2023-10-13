import { Outlet } from "react-router-dom";
import SocialNavbar from "./SocialNavbar";

function SocialLayout({ localfilters, setLocalFilters }) {
    return (
        <>
            <div className='toegeungillayout'>
                <SocialNavbar localfilters={localfilters} setLocalFilters={setLocalFilters} />
                <Outlet />
            </div>
        </>
    )
}

export default SocialLayout;