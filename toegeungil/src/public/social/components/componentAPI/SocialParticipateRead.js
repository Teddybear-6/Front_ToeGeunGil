

function SocialParticipateRead() {


    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }

        //회원AND참가여부 true false 조회
        fetch(process.env.REACT_APP_URL + `/socials/participate/${socialNum}/${user.no}`)
            .then(response => response.json()) //json으로 받는다
            .then(data => setParticipate(data));
    })
}

export default SocialParticipateRead;