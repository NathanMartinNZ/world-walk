import { useState, useEffect, useRef } from 'react'
import MarkerDetail from './MarkerDetail'


function Marker({lat, lng, video}:{lat:number, lng:number, video:TVideo}) {
  const markerRef = useRef<HTMLDivElement|null>(null)
  const [ toggleShow, setToggleShow ] = useState<boolean>(false)

  return (
    <div className="relative">
      <div 
        ref={markerRef}
        onMouseEnter={() => setToggleShow(true)}
        onTouchStart={() => setToggleShow(true)}
      >
        Show
      </div>
      
      {toggleShow && (
        <MarkerDetail video={video} setToggleShow={setToggleShow} markerRef={markerRef} />
      )}
    </div>
  )
}

export default Marker