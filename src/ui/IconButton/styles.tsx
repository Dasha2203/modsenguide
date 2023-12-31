import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

type ComponentProps = {
  active?: boolean
  color?: string
  typeColor?: 'dark' | 'light' | 'main'
}

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "lowerCase" && prop !== "active" && prop !== "color" && prop !== "typeColor"
})<ComponentProps>(({ theme, active, color, typeColor = 'main' }) => ({
  padding: '17px',
  borderRadius: '6px',
  width: '60px',
  height: '60px',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: color === 'primary' || color === 'secondary' ? theme.palette[color][typeColor] : 'rgba(0, 0, 0, .2)',
  backgroundColor: color === 'primary' || color === 'secondary' ? theme.palette[color][typeColor]! : '#FFFFFF',

  '& .search-icon, & .favorite-icon': {
    fill: '#FFFFFF',
  },

  '&:hover': {
    borderColor: '#C4C4C4',
    backgroundColor: color === 'primary' || color === 'secondary' ? theme.palette[color].main : '#FFFFFF'
  },

  ...(active ? {
    backgroundColor: '#FFFFFF',
    borderColor: '#C4C4C4',

    '&:hover': {
      backgroundColor: '#FFFFFF'
    },
    '& .search-icon': {
      fill: '#5E7BC7',
    },
    '& .favorite-icon': {
      fill: '#C75E5E',
    },
  } : {}),

  [theme.breakpoints.down('md')]: {
    padding: '8px',
    width: '40px',
    height: '40px',
  },

}))