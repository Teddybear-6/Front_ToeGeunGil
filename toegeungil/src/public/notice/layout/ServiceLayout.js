import ServiceNavbar from "../components/ServiceNavbar";
import '../components/ServiceNavbar.css';
import {Outlet} from 'react-router-dom';

function ServiceLayout(){
    return(
        <>
        <ServiceNavbar/>
        <Outlet/>
        </>
    )
}

export default ServiceLayout;