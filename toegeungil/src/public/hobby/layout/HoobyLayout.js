import { Outlet } from "react-router-dom";
import HobbyNavber from "./HobbyNaber";

function HobbyLayout({ localfilters, setLocalFilters }) {
    return (
        <>

            <HobbyNavber localfilters={localfilters} setLocalFilters={setLocalFilters} />
            <Outlet />

        </>
    )
}

export default HobbyLayout;