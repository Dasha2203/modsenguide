import { useEffect } from 'react'
import Drawer from '@components/Drawer'
import Map from '@components/Map'
import { auth } from '@firebaseApp'
import { useAppDispatch } from '@hooks/redux-hooks'
import useAuth from '@hooks/use-auth'
import { useJsApiLoader } from '@react-google-maps/api'
import { getFavoritesPlaces } from '@store/slices/user/actionCreators'
import { removeUser, setUser } from '@store/slices/user/userSlice'

import { StyledBox } from './styles'

export const Layout = () => {
  const dispatch = useAppDispatch()
  const { id: userId } = useAuth()

  const { isLoaded } = useJsApiLoader({
    id: 'c8ee2cd9c357dc67',
    googleMapsApiKey:  process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
    language: "ru"
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { uid: id, email } = user

        dispatch(setUser({ id, email }))
      } else {
        dispatch(removeUser())
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    if (userId) {
      dispatch(getFavoritesPlaces({ id: userId.toString() }))
    }
  }, [userId])

  return (
    <StyledBox>
      <Drawer isLoaded={isLoaded} />
      <Map isLoaded={isLoaded} />
    </StyledBox>
  )
}

export default Layout