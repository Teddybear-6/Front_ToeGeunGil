import HobbyCard from "./hobbyCard"
import "./css/hobbyMain.css"
function HobbyMain({ hobbys }) {
    return (
        <>
            <div className="hobbyMainCardBoard">
                <div className="hobbyCardcontainer">
                    {!hobbys ? null : hobbys?.map((hobby, index) => (

                        <HobbyCard hobbys={hobby} key={index} />

                    ))}
                </div>
            </div >
        </>

    )
}

export default HobbyMain;