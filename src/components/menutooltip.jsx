import React, { useRef, useEffect, useContext } from 'react'
import iconclose from '../images/icon-close.svg'
import styled from 'styled-components'

import Menu from '../context/menu'

const MenuTooltipStyled = styled.div`

  position: absolute;
  z-index: 3;
  display: grid;
  grid-template-columns: max-content 1fr;
  width: 100%;
  background: var(--White);
  padding: 2.5rem 1rem;
  transition: .5s;


  .main-menu {
    display:flex;
    list-style: none;
    align-items: center;
    justify-content:center;
  }

  .main-menu .item-menu {
    margin: 0 1rem;
  }

  .main-menu .item-menu .ref-menu {
    text-decoration: none;
    color: var(--Dark);
    font-weight: 700;
    cursor: pointer;
  }
 
`
const MenuTooltip = () => {

  const ref = useRef()
  const MenuContex = useContext(Menu)
  const { state, setstate } = MenuContex

  const closeMenu = () => {
    setstate(!state)
  }

  useEffect(() => {

    if (state) {
      ref.current.classList.remove('hidden')
      ref.current.classList.add('show')
    } else {
      ref.current.classList.remove('show')
      ref.current.classList.add('hidden')
    }

  }, [state])


  return (
    <MenuTooltipStyled className="container-menu-tootip hidden" ref={ref}>
      <div className="close-menu"  >
        <img src={iconclose}
          alt="icon-close"
          onClick={closeMenu}
        />
      </div>
      <ul className="main-menu" >
        <li className="item-menu">
          <a href="" className="ref-menu"> home </a>
        </li>
        <li className="item-menu">
          <a href="" className="ref-menu"> shop </a>
        </li>
        <li className="item-menu">
          <a href="" className="ref-menu"> about </a>
        </li>
        <li className="item-menu">
          <a href="" className="ref-menu"> contact </a>
        </li>
      </ul>
    </MenuTooltipStyled>
  )
}

export default MenuTooltip