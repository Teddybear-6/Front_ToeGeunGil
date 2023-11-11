import { useEffect, useState } from "react";

function CommunityNavbar({ localfilters, setLocalFilters }) {
    const [category, setCategory] = useState();
    const [local, setLocal] = useState();

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/category`)
            .then(response => response.json())
            .then(response => setCategory(response));


        fetch(process.env.REACT_APP_URL + `local`)
            .then(response => response.json())
            .then(response => setLocal(response));

        setLocalFilters(null)
    }, [])

    const onChangeHandler = (e) => {
        setLocalFilters(e.target.value)
    };
}
