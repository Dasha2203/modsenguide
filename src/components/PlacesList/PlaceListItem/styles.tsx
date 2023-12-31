import { Grid, styled, Typography } from '@mui/material'

export const ItemImg = styled(Grid)(({theme}) => ({
  width: '30px',
  height: '30px'
}))

export const Row = styled(Grid,
  { shouldForwardProp: (prop) => prop !== "lowerCase" && prop !== "active" }
)<{ active?: boolean }>(({ theme, active }) => ({
  display: 'grid',
  gridTemplateColumns: '30px auto',
  alignItems: 'center',
  gap: '20px',
  opacity: active ? '1' : '0.5',
  [theme.breakpoints.down('sm')]: {
    gap: '10px',
  },

}))

export const ItemText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}),
)