import {Outlet} from "react-router-dom";
import SocialNavbar from "./SocialNavbar";

function SocialLayout() {
    return(
        <>
            <SocialNavbar/>
            <Outlet/>
        </>
    )
}

export default SocialLayout;