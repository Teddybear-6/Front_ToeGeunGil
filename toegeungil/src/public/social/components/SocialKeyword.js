import { useEffect, useState } from "react";


function SocialKeyword({code}){
    const [keyworld, setKeyworld] = useState({});

    useEffect(()=>{
        console.log(code);
        fetch(`http://localhost:8001/keyword/${code}`)
            .then(response => response.json())
            .then(data => setKeyworld(data));
    },[])

    return (
        <>
            <div>
                {code == 0? '존재하지 않은 키워드 코드 입니다.' : keyworld == null? null:keyworld.keywordName}
            </div>
        </>
    )
}


export default SocialKeyword;
