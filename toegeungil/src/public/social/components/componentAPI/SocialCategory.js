import { useEffect, useState } from "react";

function SocialCategory({cateCode}) {
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch(process.env.REACT_APP_URL+`/category/${cateCode}`)
            .then(response => response.json())
            .then(data => setCategory(data));
    },[]);

    return(
        <>
            <div>
                {category == null? null:category.categoryName}
            </div>
        </>
    )
}

export default SocialCategory;