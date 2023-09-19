import React, { useState, useEffect } from "react";

function CommunityLocation({ localCode }) {
    const [localName, setLocalName] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8001/local/${localCode}`)
            .then((response) => response.json())
            .then((data) => {
                setLocalName(data.localName || '');
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <span>{localName}</span>
    );
}

export default CommunityLocation;
