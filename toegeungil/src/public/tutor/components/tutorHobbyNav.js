import {NavLink} from 'react-router-dom';


function TutorNavber(){
    
    const activeStyle ={
      
        color : 'green' ,
        textDecoration: 'none'
    }

    const NavBox = {
        borderRadius: '50px',
        width: '280px',
        height: '1600px',
        border: '2px solid #8FC4B3'
    }

    return(
        <div  style={NavBox}>
            <ul>
                <li>
                    <NavLink  style={
                        (isActive)=>
                        isActive ? activeStyle : null
                    }> 취미생성 </NavLink>
                </li>
                <li>
                    <NavLink  style={
                        (isActive)=>
                        isActive ? activeStyle : null
                    }> 취미 관리</NavLink>
                </li>
            </ul>
        </div>
        
    )

}


export default TutorNavber;
