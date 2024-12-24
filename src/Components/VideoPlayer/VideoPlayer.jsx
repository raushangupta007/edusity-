import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'
const Video = ({ playState, setPlayState }) => {

    const player = useRef();

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }

    return (
        <div className={`videoplayer ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default Video