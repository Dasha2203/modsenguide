import Link from 'components/Link'
import SmallCard from 'components/SmallCard'
import { useAppSelector } from 'hooks/redux-hooks'
import FavoriteIcon from 'icons/FavoriteIcon'
import RightArrowIcon from 'icons/RightArrowIcon'

import { Wrap } from './style'

const Favorites = () => {
  const { favoritePlaces } = useAppSelector(state => state.userReducer)

  return (
    <Wrap>
      {favoritePlaces.map(item => (
        <Link sx={{ textDecoration: 'none' }} to={`/place/${item.placeId}`} state={{prev: '/favorites'}}>
          <SmallCard
            key={item.placeId}
            title={item.name || ''}
            img={item.photo}
            text={item.formatted_address}
            leftIcon={<FavoriteIcon fill="#C75E5E"/>}
            rightIcon={<RightArrowIcon width={20} />}
          />
        </Link>

      ))}
    </Wrap>
  )
}

export default Favorites