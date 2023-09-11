import CommunityList from '../pages/CommunityList';

function CommunityMain({communitys}){


    return(
        <div>
            {communitys.map((community, index) => (
                <CommunityList communitys={community} key = {index}/>
            ))}
        </div>
    );
}

export default CommunityMain;

