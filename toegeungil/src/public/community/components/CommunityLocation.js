import React, { useState, useEffect } from "react";

function CommunityLocation({ localCode }) {
    const [localName, setLocalName] = useState('');

    useEffect(() => {
        fetch(process.env.REACT_APP_URL+`/local/${localCode}`)
            .then((response) => response.json())
            .then((data) => {
                setLocalName(data.localName || '');
            })
            .catch((error) => {
                console.log(error);
            });
    }, [localCode]);

    return (
        <span>{localName}</span>
    );
}

export default CommunityLocation;
