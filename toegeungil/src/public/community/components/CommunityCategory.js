import React, { useState, useEffect } from "react";

function CommunityCategory({ categoryCode }) {
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        fetch(process.env.REACT_APP_URL+`/category/${categoryCode}`)
            .then((response) => response.json())
            .then((data) => {
                setCategoryName(data.categoryName || '');
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryCode]);

    return (
        <span>{categoryName}</span>
    );
}

export default CommunityCategory;
