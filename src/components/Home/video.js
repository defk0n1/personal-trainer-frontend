

const Video = () => {
    const isMobile = () => {
        return window.innerWidth <= 600
    }


    return(
        <video width={isMobile() ? "80%" : "50%"} height={"90%"} controls>
           <source  src="/videos/video1.mp4" type="video/mp4"/>
        </video>
    )

}



export default Video;