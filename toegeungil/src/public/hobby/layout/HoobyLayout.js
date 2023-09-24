import {Outlet} from "react-router-dom";
import HobbyNavber from "./HobbyNaber";

function HobbyLayout(){
    return(
        <>
           
            <HobbyNavber/>
            <Outlet/>
         
        </>
    )
}

export default HobbyLayout;