import { StyledList } from '@components/List/styles'
import styled from "@emotion/styled/macro"
import Search from '@icons/SearchIcon'
import { Box } from '@mui/material'

export const WrapSearchBar = styled(Box)`
  padding: 25px 25px 0;
  display: flex;
  flex-direction: column;
  width: '100%';
  flex-grow: 1;
  border-left-width: 3px;
  border-left-color: #C4C4C4;
  border-left-style: solid;

  ${StyledList} {
    margin-bottom: 30px;
  }

  @media (max-width: 599px) {
    padding: 15px 10px;
  }

`

export const SearchIcon = styled(Search)(({ theme }) => ({
  width: '22px',
  height: '22px',
  fill: 'white',
}),
);
