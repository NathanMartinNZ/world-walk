import { useMemo } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'


function Map() {
  const mapConfig = useMemo(() => {
    return {
      center: { lat: 12.2145033, lng: 20.8466341 },
      zoom: 1
    }
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
        <Marker lat={-36.7847059} lng={174.7390844} />
      </GoogleMapReact>
    </main>
  )
}

export default Map