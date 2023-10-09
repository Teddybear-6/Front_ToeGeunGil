import SocialSearch from "../social/page/SocialSearch";
import HobbySearch from "../hobby/page/HobbySearch";
import { useLocation } from 'react-router-dom';

function Search() {

    const searchList = useLocation().state
    // console.log("dkdkd", searchList)

    return(
        <>
            <HobbySearch/>
            <SocialSearch socialName={searchList}/>
        </>
    )
}

export default Search;