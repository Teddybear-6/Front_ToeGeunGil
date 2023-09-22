import { useParams } from "react-router-dom";
import { getLoginDetails } from "../api/LoginApi";
import { useEffect, useState } from "react";
import Signup from "../Signup/Signup";
import LoginSignup from "./LoginSignup";
import Findpass from "./Findpass";

function getLoginDetails(){

    
    const [loginDtails, setLoginDtails] = useState({});

    useEffect(
        ()=> {
            // fetch(`http://localhost:8081/login/${Signup}`, {
            //     method: "POST",
            //     headers : {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(data)
            // })
            //             .then((response)=> response.json())
            //             .then(data=> {setDetail(data);
            //https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
        
        // })
            },[]);

        
        return(
            <div className="LginDetails" >


            </div>
        );

        }
        
        



export default getLoginDetails;