import SocialWriteCard from "../components/SocialWriteCard";

function SocialWrite() {

    return(
        <>
            <div className='toegeungillayout'>
                <div className="menuFont">Social 게시글 작성</div>
                <hr className='hrSty'/>
                <div className='layout2'>
                    <SocialWriteCard/>
                </div>
            </div>
        </>
    )
}

export default SocialWrite;