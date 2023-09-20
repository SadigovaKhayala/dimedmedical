import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'
import { OverlayView } from '@react-google-maps/api'

const center = {
  lat: 40.37573330240183,
  lng: 49.83880293379477,
}

const position = {
  lat: 40.37573330240183,
  lng: 49.83880293379477,
}
const containerStyle = {
  width: '490px',
  height: '100%',
}
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAhOp5DAfcAyVEFODRNnIPqk2C2tagiQ0o',
  })

  const [map, setMap] = React.useState(null)
  //
  const onClick = () => {
    console.info('I have been clicked!')
  }

  const divStyle = {
    // background: 'black',
  }
  //

  const onLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds()
  }
  const onLoadd = (marker) => {
    console.log('marker: ', marker)
  }

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <OverlayView
        position={center}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <div
          style={{
            width: '90px',
            height: '30px',
            border: '1px solid #ccc',
            padding: 10,
            backgroundColor: 'white',
            textAlign: center,
          }}
        >
          <a
            target="_blank"
            href="https://www.google.com/maps/dir//Dimed+Medical+Center+map/@40.3745236,49.8351628,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40307da524d70647:0xc7479fe3f4995eda!2m2!1d49.8381612!2d40.3756457?hl=az"
          >
            Xəritədə Bax
          </a>
        </div>
      </OverlayView>

      <Marker onLoad={onLoadd} position={position} />
    </GoogleMap>
  ) : (
    <></>
  )
}
export default React.memo(MyComponent)
