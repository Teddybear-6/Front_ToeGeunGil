import {Outlet} from "react-router-dom";
import SocialNavbar from "./SocialNavbar";

function SocialLayout({ localfilters, setLocalFilters }) {
    return(
        <>
            <SocialNavbar localfilters={localfilters} setLocalFilters={setLocalFilters}/>
            <Outlet/>
        </>
    )
}

export default SocialLayout;