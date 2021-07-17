import React from 'react'
import logo from '../images/logo.svg'
import styled from 'styled-components'

const HeaderDeskStyled = styled.header`

  position: absolute;
  z-index: 4;
  display: flex;
  width: 100%;
  padding: 2.5rem 1rem;
  transition: .5s;
  margin:  0 2rem;


  .main-menu {
    display:flex;
    list-style: none;
    align-items: center;
    justify-content:center;
  }

  .main-menu .item-menu {
    margin: 0 .7rem;
  }

  .main-menu .item-menu .ref-menu {
    text-decoration: none;
    color: var(--White);
    font-weight: 700;
    cursor: pointer;
    font-size: .6rem;
    margin-bottom: .5rem;
  }

  .main-menu .item-menu:hover {
    border-bottom: 2px solid var(--White);
  }

  .logo {
    width: 2.8rem;
    height: .6rem;
    margin: auto 0;
  }


  @media screen and (min-width: 1200px){
    
    margin: 0 4rem;

    .logo {
      width: 5rem;
      height: auto;
    }

    .main-menu .item-menu .ref-menu {

      font-size: .8rem;
    }

    .main-menu .item-menu {
      margin: 0 1rem;
    }
  }


`

const HeaderDesk = () => {
  return (

    <HeaderDeskStyled className="header-desk">
      <img src={logo} alt="logo-room" className="logo" />
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
    </HeaderDeskStyled>
  )
}

export default HeaderDesk