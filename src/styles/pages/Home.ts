import styled from 'styled-components'

import theme from '@styles/theme'

export const HomeContainer = styled.div`
  display: flex;
  height: calc(100vh - 4rem);
  width: calc(100vw - 4rem);
  padding: 2rem;
  margin: 2rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    gap: 2rem;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 100%;

  .MuiButton-root {
    font-size: 1rem;
  }

  .MuiList-root {
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.primary.contrastText};
  }
`
