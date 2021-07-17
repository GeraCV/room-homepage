import React, { useContext } from 'react'
import logo from '../images/logo.svg'
import iconhamburger from '../images/icon-hamburger.svg'
import styled from 'styled-components'
import MenuTooltip from './menutooltip'
import Menu from '../context/menu'

const HeaderStyled = styled.header`

  background: #000;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0;
  z-index: 2;
  position:relative;
  background: transparent;  
  
  img:nth-child(2) {
    margin:auto;
  }

  img:first-child {
    margin-left: 1.5rem;
  }

   @media screen and (min-width: 950px){

    display: none;
  }


`

const Header = () => {

  const MenuContext = useContext(Menu)
  const { state, setstate } = MenuContext

  const showMenu = () => {
    setstate(!state)
  }

  return (
    <>
      <HeaderStyled className="main-header">
        <img src={iconhamburger}
          alt="iconhamburguer"
          onClick={showMenu}
        />
        <img src={logo} alt="room" />
        <span></span>
      </HeaderStyled>
      {
        state && <MenuTooltip />
      }
    </>
  )
}

export default Header
