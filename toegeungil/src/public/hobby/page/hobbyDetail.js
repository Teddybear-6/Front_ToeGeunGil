
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import detailSytle from "../components/hobbyDetail.module.css"
import HobbyDetailTitle from "../components/hobbyDetailTitle";
import HobbyImages from "../components/hobbyDetailImages";
import HobbyMainImages from "../components/hobbyDetailMainImages";
import HobbyTutor from "../components/hobbyTutor";
import jwt_decode from "jwt-decode";
import RevieWrite from "../components/hobbyReview";
import HobbyReview from "../components/HobbyReviewView";
import JoinUser from "../components/joinuser";
import HobbySchedule from "../components/hobbyschedule";
function HobbyDetail() {
    const { hobbyCode } = useParams();
    const [detail, setDetail] = useState({});
    const [imageNum, setImageNum] = useState(0);
    const [user, setUser] = useState();
    const [join, setJoin] = useState();
    const [joinuser, setJoinuser] = useState([]);

  


    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
        fetch(process.env.REACT_APP_URL + `/hobbys/${hobbyCode}`)
            .then((response) => response.json()).then(data => {
                setDetail(data);
            })

        
            getJoinuser(hobbyCode);
    
       

    }, [])

    const findjoin = (user) => {
        if (user) {
            fetch(process.env.REACT_APP_URL + `/hobbys/join/${hobbyCode}/${user?.no}`).then(res => res.json()).then(res => {
                setJoin(res)
             
            })
          
        }
    }

    
    const getJoinuser = (hobbyCode) => {
        fetch(process.env.REACT_APP_URL + `/hobbys/joinuser/${hobbyCode}`)
            .then(response => response.json()) //json으로 받는다
            .then(data => setJoinuser(data)).catch(e => console.log(e))
    }



    const onClickHandler = index => {
        setImageNum(index);
    }


    const joinClickHandler = () => {
        if (!user) {
            alert("회원만 참여가능합니다.")
        } else if (join) {
            if (window.confirm("참여 취소하시겠습니까")) {
                fetch(process.env.REACT_APP_URL + `/hobbys/join/${hobbyCode}/${user.no}`, {
                    method: "POST",
                }).then(res => res.text()).then(res => {
                    alert(res)
                    if (res == "참가 취소 되었습니다.") {
                        setJoin(false)
                        getJoinuser(hobbyCode);
                    }
                    
                }).catch(r => console.log(r))
            }
        } else if (!join) {
            if (window.confirm("참여하시겠습니까")) {
                fetch(process.env.REACT_APP_URL + `/hobbys/join/${hobbyCode}/${user.no}`, {
                    method: "POST",
                }).then(res => res.text()).then(res => {
                    alert(res)
                    if (res == "참가 완료되었습니다.") {
                        setJoin(true)
                        getJoinuser(hobbyCode);
                    }

                }).catch(r => console.log(r))
            }

        }




    }


    return (
        <>
            <div className="layout">
                <div className={detailSytle.frame2}>
                    <div className={detailSytle.details}>
                        <div>
                            <HobbyDetailTitle detail={detail}></HobbyDetailTitle>
                        </div>

                        <div className={detailSytle.mainImage}>
                            {
                                !detail.imageId ? "이미지가 없습니다." : <HobbyMainImages detail={detail?.imageId[imageNum]} />

                            }
                            <div className={detailSytle.mainImageDiv} >

                                <div className={detailSytle.imageLine}>
                                    {
                                        !detail ? "이미지가 없습니다." : detail.imageId?.map((r, index) => (<div onClick={() => onClickHandler(index)}>< HobbyImages key={index} detail={r} /> </div>))
                                    }
                                </div>

                            </div>

                        </div>
                    </div>
                   
                    <HobbySchedule detail={detail}/>

                </div>
                <div className={detailSytle.joinframe}>
                    <div className={detailSytle.socialDetailsParticipateN}>참가자 ( {joinuser.length} / {detail.maxPersonnel} )</div>
                    <div>
                        {findjoin(user,hobbyCode)}
                        <JoinUser joinuser={joinuser} detail={detail} join={join}  joinClickHandler={joinClickHandler} />

                    </div>


                </div>

                <div className={detailSytle.intro}>
                    <div className={detailSytle.introName}>소셜 소개</div>
                    <p className={detailSytle.introContent}>{detail.intro}</p>
                </div>

                <HobbyTutor tutorIntro={detail.tutorIntro} tutorCode={detail.tutorCode}></HobbyTutor>

                {
                    detail.close == 'Y'  && <HobbyReview hobbyCode={hobbyCode} />
                }
                {

                    (detail.close == 'Y' && join ) &&   <RevieWrite hobbyCode={hobbyCode} />
                }



            </div>
        </>
    )
}


export default HobbyDetail;