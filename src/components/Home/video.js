import { px } from "framer-motion";
import { Player, BigPlayButton , LoadingSpinner , ControlBar , PlayToggle , VolumeMenuButton} from "video-react";


const Video = () => {
    const isMobile = () => {
        return window.innerWidth <= 600
    }


    return(
        <Player src="/videos/video1.mp4" fluid={false} width={isMobile() ? "80%" : "50%"} height={"90%"}>
                  <BigPlayButton position="center" />
                  {/* <ControlBar autoHide={false}>
                         <VolumeMenuButton />
                         <PlayToggle />





                  </ControlBar>
 */}


        </Player>
    )

}



export default Video;