import { useParams } from "react-router-dom";
import { getLoginDetails } from "../api/LoginApi";
import { useEffect, useState } from "react";
import Signup from "../Signup/Signup";

function getLoginDetails(){

    
    const [loginDtails, setLoginDtails] = useState({});

    useEffect(
        ()=> {
            fetch(`http://localhost:8081/login/${Signup}`)
                        .then((response)=> response.json())
                        .then(data=> {setDetail(data);
        
        })
            },[]);

        
        return(
            <div >

            </div>
        );

        }
        
        



export default LoginDtails;