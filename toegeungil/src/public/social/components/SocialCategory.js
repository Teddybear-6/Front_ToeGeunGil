import { useEffect, useState } from "react";

function SocialCategory({code}) {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8001/category/${code}`)
            .then(response => response.json())
            .then(data => setCategory(data));
    },[]);

    return(
        <>
            <div>
                {category == null? null : category.categoryName}
            </div>
        </>
    )
}

export default SocialCategory;