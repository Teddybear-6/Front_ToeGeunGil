import { useEffect, useState } from "react";

function SocialLocal({code}) {
    const [localName, setLocalName] = useState({});

    useEffect(() => {
        fetch(process.env.REACT_APP_URL+`/local/${code}`)
            .then(response => response.json())
            .then(data => setLocalName(data));
    },[code]);

    return(
        <>
            <div>
                {localName == null? null:localName.localName}
            </div>
        </>
    )
}

export default SocialLocal;