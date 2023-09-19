import React, { useState, useEffect } from "react";

function CommunityCategory({ categoryCode }) {
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8001/category/${categoryCode}`)
            .then((response) => response.json())
            .then((data) => {
                setCategoryName(data.categoryName || '');
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <span>{categoryName}</span>
    );
}

export default CommunityCategory;
