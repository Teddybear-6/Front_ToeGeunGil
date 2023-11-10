import { useEffect, useState } from "react";

function CommunityNavbar({ localfilters, setLocalFilters }) {
    const [category, setCategory] = useState();
    const [local, setLocal] = useState();

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/category`)
            .then(response => response.json())
            .then(response => setCategory(response));
    })
}