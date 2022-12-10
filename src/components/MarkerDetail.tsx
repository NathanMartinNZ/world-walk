import { useEffect, useRef } from 'react'
import { useVideoStore } from '../store/store'


function MarkerDetail({ video, setToggleShow, markerRef }:{video:TVideo, setToggleShow:React.Dispatch<React.SetStateAction<boolean>>, markerRef:React.MutableRefObject<HTMLDivElement | null>}) {
  const markerDetailRef = useRef<HTMLDivElement|null>(null)
  const setSelectedVideoById = useVideoStore((state) => state.setSelectedVideoById)

  const closeMarkerDetail = (e:any) => {
    if(
      markerDetailRef.current && 
      markerRef.current && 
      (!markerDetailRef.current.contains(e.target) && !markerRef.current.contains(e.target))
    ) {
      setToggleShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener("touchstart", closeMarkerDetail)
    return () => {
      document.removeEventListener("touchstart", closeMarkerDetail)
    }
  }, [])

  return (
    <div className="absolute bottom-0 -left-[5.5rem] bg-slate-50 w-52 h-52"
      ref={markerDetailRef}
      onMouseLeave={() => setToggleShow(false)}
    >
      <img src={`https://img.youtube.com/vi/${video.videoId}/default.jpg`} />
      <p>{video.videoName}</p>
      <button onClick={() => setToggleShow(false)}>X</button>
      <button onClick={() => setSelectedVideoById(video.id)}>Watch</button>
    </div>
  )
}

export default MarkerDetail