import SocialPosting from "../components/SocialPosting";

function SocialWrite() {

    return(
        <>
            <div className='layout'>
                <div className="menuFont">Social 게시글 작성</div>
                <hr className='hrSty' />
                <div className='layout2'>
                    <SocialPosting/>
                </div>
            </div>
        </>
    )
}

export default SocialWrite;