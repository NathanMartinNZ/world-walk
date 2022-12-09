import { useState } from 'react'


function Marker({lat, lng, video}:{lat:number, lng:number, video:TVideo}) {
  const [ toggleShow, setToggleShow ] = useState<boolean>(false)

  return (
    <div>
      {!toggleShow && (
        <div onClick={() => setToggleShow(true)}>Show</div>
      )}
      
      {toggleShow && (
        <div className="bg-slate-50 w-52 h-52">
          <img src={`https://img.youtube.com/vi/${video.videoId}/default.jpg`} />
          <p>{video.videoName}</p>
          <button onClick={() => setToggleShow(false)}>X</button>
        </div>
      )}
    </div>
  )
}

export default Marker