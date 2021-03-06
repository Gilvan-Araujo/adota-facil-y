import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper
} from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import * as S from '@styles/pages/Home'

import logo from '../../public/logo.svg'

function Home() {
  const router = useRouter()

  // menu
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <>
      <Head>
        <title>Adota Fácil</title>
        <meta
          name="description"
          content="Aplicativo para testes de estilos de interação"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.HomeContainer>
        <h1 style={{ display: 'none' }}>Adota fácil</h1>
        <Image alt="Logo Adota Fácil" src={logo} height={75} />

        <S.MenuContainer>
          <Button
            variant="contained"
            color="primary"
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Opções
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        onClick={(event) => {
                          handleClose(event)
                          router.push('/pet/novo?type=menu')
                        }}
                      >
                        Cadastrar um pet
                      </MenuItem>
                      <MenuItem
                        onClick={(event) => {
                          handleClose(event)
                          router.push('/pets')
                        }}
                      >
                        Lista de pets
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </S.MenuContainer>
      </S.HomeContainer>
    </>
  )
}

export default Home
