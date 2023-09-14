import { useEffect, useState } from "react";

function SocialLocal({code}) {
    const [localName, setLocalName] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8001/local/${code}`)
            .then(response => response.json())
            .then(data => setLocalName(data));
    },[]);

    return(
        <>
            <div>
                {localName == null? null:localName.localName}
            </div>
        </>
    )
}

export default SocialLocal;