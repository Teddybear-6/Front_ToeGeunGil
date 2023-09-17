import TutorNavber from "../components/tutorHobbyNav";
import {Outlet} from "react-router-dom";


function Layout(){
    return(
        <>
            <div style={{display:"flex"}}>
            <TutorNavber/>
            <Outlet/>
            </div>
        </>
    )
}