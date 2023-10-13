import { Outlet } from "react-router-dom";
import HobbyNavber from "./HobbyNaber";

function HobbyLayout({ localfilters, setLocalFilters }) {
    return (
        <>
            <div className='toegeungillayout'>
                <HobbyNavber localfilters={localfilters} setLocalFilters={setLocalFilters} />
                <Outlet />
            </div>

        </>
    )
}

export default HobbyLayout;