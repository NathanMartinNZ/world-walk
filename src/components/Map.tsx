import { useEffect, useMemo } from 'react'
import GoogleMapReact from 'google-map-react'
import { useVideoStore } from '../store/store'
import Marker from './Marker'


function Map() {
  const { setInitialVideoState } = useVideoStore()
  const videos:TVideo[] = useVideoStore((state) => state.videosFiltered) 
  const mapConfig = useMemo(() => {
    return {
      center: { lat: 12.2145033, lng: 20.8466341 },
      zoom: 1
    }
  }, [])

  useEffect(() => {
    setInitialVideoState()
  }, [])

  //TODO: Stop markers from glitching: https://github.com/giorgiabosello/google-maps-react-markers

  return (
    <main style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY as string }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        {videos && videos.map((video) => (
          <Marker key={video.id} lat={video.coords.lat} lng={video.coords.lng} video={video} />
        ))}
      </GoogleMapReact>
    </main>
  )
}

export default Map