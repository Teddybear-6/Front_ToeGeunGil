import React, {useState,useEffect} from 'react';


function Test(){
    const [title, setTitle]= useState("");

    useEffect(()=>{
        fetch("http://localhost:8001/hobbys/1").then((response)=> response.json()).then((data)=> {
            setTitle(data.hobbyTitle)
        }
            
        )
           
    },[])

    return(
        <>
            <h1>{title? title:null}</h1>
        </>

    )
}

export default Test;