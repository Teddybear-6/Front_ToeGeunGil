import TutorNavber from "../components/tutorHobbyNav";
import {Outlet} from "react-router-dom";


function TutorLayout(){
    return(
        <>
           
            <TutorNavber/>
            <Outlet/>
         
        </>
    )
}

export default TutorLayout;