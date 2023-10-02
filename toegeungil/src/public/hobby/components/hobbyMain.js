import HobbyCard from "./hobbyCard"
import "./hobbyMain.css"
function HobbyMain({ hobbys }) {
    console.log(hobbys)
    return (
        <>
            <div style={{ width: "1500px", display: "block", boxSizing: "border-box" }}>
                <div className="hobbyCardcontainer">
                    {!hobbys ? null : hobbys?.map((hobby, index) => (
                        <div style={{ marginBottom: "20px" }}>
                            <HobbyCard hobbys={hobby} key={index} />
                        </div>
                    ))}
                </div>
            </div >
        </>

    )
}

export default HobbyMain;