import Youtube, { YouTubeProps } from 'react-youtube'
import { useVideoStore } from '../store/store'


function Video(video:TVideo) {
  const setSelectedVideoById = useVideoStore((state) => state.setSelectedVideoById)

  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //   event.target.stopVideo()
  // }

  const opts: YouTubeProps['opts'] = {
    height: '675',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      origin: 'http://localhost:3000/'
    }
  }

  return (
    <div className="absolute w-11/12 mx-auto my-20 inset-0 flex flex-col z-20 bg-slate-100">
      <Youtube 
        videoId={video.videoId}
        opts={opts}
        className=""
      />
      <div>
        <h2>{video.videoName}</h2>
        <p>{video.channel}</p>
      </div>
      <div className="video-exit">
        <button onClick={() => setSelectedVideoById(null)}>X</button>
      </div>
    </div>
  )
}

export default Video