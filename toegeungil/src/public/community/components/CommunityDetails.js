import { useEffect, useState } from "react";
import DetailsTitleStyle from './css/CommunityDetailsTitle.module.css';
import CommunityLocation from "./CommunityLocation";


const CommunityDetails = () => {
    const [community, setCommunitys] = useState([]);

    const getCommunitys = () => {
        fetch(`http://localhost:8001/communitys/2`)
        .then((response) => response.json())
        .then((data) => {
            setCommunitys(data);
        });
    };

}    