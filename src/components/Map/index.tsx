import { useCallback, useEffect } from 'react'
import { Circle, GoogleMap, Marker } from '@react-google-maps/api'
import { Box } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { setUserLocation } from 'store/slices/user/userSlice'
import { TLocation } from 'types'
import { setMap } from 'store/slices/places/placesSlice'
import { fetchPlaces } from 'store/slices/places/actionCreators'

const Map = ({ isLoaded }: { isLoaded: boolean }) => {
  const dispatch = useAppDispatch()
  const { places, map, checkedTypesPlaces } = useAppSelector((state) => state.placesReducer)
  const { userLocation } = useAppSelector((state) => state.userReducer)

  useEffect(() => {
    getPosition()
  }, [])

  // useEffect(() => {
  //   if (!userLocation || !map) return

  //   dispatch(fetchPlaces({
  //     location: userLocation,
  //     radius: 10000,
  //     types: checkedTypesPlaces.map(i => i.type),
  //     map
  //   }))

  // }, [userLocation])


  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(userLocation);
    map.fitBounds(bounds);

    dispatch(setMap(map))
  }, [])

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    dispatch(setMap(null))
  }, [])

  function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = { lat: position.coords.latitude, lng: position.coords.longitude }

          dispatch(setUserLocation(pos))

        },
        () => {
          console.log('Ошибка получения местоположения')
        }
      );
    } else {
      console.log('Нет доступа к геолокации')
    }
  }

  return (
    <Box sx={{ width: 'calc(100% - 510px)', ml: 'auto', height: '100vh', background: 'green' }}>
      {isLoaded}
      {isLoaded && userLocation ? (
        <GoogleMap
          center={userLocation}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          mapContainerClassName="map"
        >
          {places.filter(place => !!place.geometry).map(place => {
            return (
              <Marker
                key={place.place_id}
                position={place.geometry?.location!}
                onClick={() => console.log('click')}
              />
            )

          })}
          <Marker position={userLocation} />
          <Circle center={userLocation} radius={10000} />
        </GoogleMap>
      ) : null}
    </Box >
  )
}

export default Map