import { useEffect, useState } from "react";

function SocialList() {
    //DB로 구축된 게시물 데이터를 json-server에 연결하고,
    //API주소를 fetch함수에 연결하여 통신 가능하도록 한다.
    const [socials, setSocials] = useState([{}]);

    useEffect(() => {
            fetch("http://localhost:8001/socials")
                .then(response => response.json())
                .then(data => setSocials(data));
            console.log(socials)
        }, []);

    return (
        <>
            <div>
                {
                    socials == null ? null : socials.map(r =>
                        <div>
                            <p key={r.socialNum}>socialNum : {r.socialNum}</p>
                            <p key={r.socialNum}>userNum : {r.userNum}</p>
                            <p key={r.socialNum}>socialName : {r.socialName} </p>
                            <p key={r.socialNum}>socialDate : {r.socialDate}</p>
                            <p key={r.socialNum}>socialFixedNum : {r.socialFixedNum}</p>
                            <p key={r.socialNum}>socialStartTime : {r.socialStartTime}</p>
                            <p key={r.socialNum}>socialEndTime : {r.socialEndTime}</p>
                            <p key={r.socialNum}>fileNum : {r.fileNum}</p>
                            <p key={r.socialNum}>categoryCode : {r.categoryCode}</p>
                            <p key={r.socialNum}>keywordCode : {r.keywordCode}</p>
                            <p key={r.socialNum}>localCode : {r.localCode}</p>
                            <p key={r.socialNum}>localDetails : {r.socialFixedNum}</p>
                            <p key={r.socialNum}>socialIntro : {r.socialIntro}</p>
                            <p key={r.socialNum}>socialOther : {r.socialOther}</p>
                            <p key={r.socialNum}>postRegDate : {r.postRegDate}</p>
                            <p key={r.socialNum}>postModiDate : {r.postModiDate}</p>
                            <p key={r.socialNum}>socialState : {r.socialState}</p>
                            <p>--------------------------------------------------</p>
                        </div>
                        )
                }
            </div>
        </>
    )
}

export default SocialList;