import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import hero1m from '../images/mobile-image-hero-1.jpg'
import hero2m from '../images/mobile-image-hero-2.jpg'
import hero3m from '../images/mobile-image-hero-3.jpg'

import hero1d from '../images/desktop-image-hero-1.jpg'
import hero2d from '../images/desktop-image-hero-2.jpg'
import hero3d from '../images/desktop-image-hero-3.jpg'

import angleleft from '../images/icon-angle-left.svg'
import angleright from '../images/icon-angle-right.svg'
import HeaderDesk from './headerDesk'

const BannerStyled = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all 1s;
  width: 100%;
  max-height: 329px;

  .container-principal-banner {
    position: relative;
  }
  .container-images-banner {
    display: flex;
    width: 300%;
  }

  .container-image-banner {
    width: 100vw;
  }

  .container-image-banner .image-banner {
    display:block;
    width: 100%;
  }

  .container-angles {
    background: #000;
    display: flex;
    width: max-content;
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;
  }

  .container-angles .angle {
    padding: 1rem 1.5rem;
    cursor: pointer;
  }

  .container-angles .angle:hover {
      background: rgb(87, 87, 87);
  }

  @media screen and (min-width: 950px){

    position: relative;
    top: initial;
    left: initial;
    overflow: initial;
    width: auto;
    max-height: none;

    .container-principal-banner {
      overflow: hidden;
      position: relative;
    }

    .container-image-banner {
      width: 100%;
    }   

    .container-angles {
      right: -124px;
      z-index: 4;
    }
  }

`

const Banner = () => {

  const [width, setWidth] = useState({ width: window.innerWidth })

  const refBanner = useRef()
  const arrImages = [hero1m, hero2m, hero3m]
  let translateMeasure = 33.33

  useEffect(() => {
    const handleResize = () => {
      setWidth({
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)

  })

  let countImages = 0
  arrImages.forEach((element, i) => {
    countImages += i
  })

  let count = 0

  const moveToLeft = () => {

    count += 1
    let actual = count * -translateMeasure

    if (count == countImages) count = countImages - 1

    else if (count < countImages) {
      refBanner.current.style.transform = ` translateX(${actual}%) `
    }
  }

  const moveToRight = () => {

    count -= 1
    let actual = count * -translateMeasure

    if (count == -1) count = 0

    else if (count < countImages) {
      refBanner.current.style.transform = ` translateX(${actual}%) `
    }
  }

  return (
    <>
      <BannerStyled className="main-banner" >
        {
          width.width > 950
            ? <HeaderDesk />
            : null
        }
        <div className="container-principal-banner">
          <div className="container-images-banner" ref={refBanner}>
            {
              width.width < 950

                ? <>
                  <div className="container-image-banner" >
                    <img src={hero1m} alt="dining-room-mobile" className="image-banner" />
                  </div>
                  <div className="container-image-banner" >
                    <img src={hero2m} alt="dining-room-mobile" className="image-banner" />
                  </div>
                  <div className="container-image-banner" >
                    <img src={hero3m} alt="dining-room-mobile" className="image-banner" />
                  </div>
                </>
                : <>
                  <div className="container-image-banner" >
                    <img src={hero1d} alt="dining-room-desktop" className="image-banner" />
                  </div>
                  <div className="container-image-banner" >
                    <img src={hero2d} alt="dining-room-desktop" className="image-banner" />
                  </div>
                  <div className="container-image-banner" >
                    <img src={hero3d} alt="dining-room-desktop" className="image-banner" />
                  </div>
                </>
            }
          </div>
        </div>
        <div className="container-angles">
          <img src={angleleft}
            alt="angle-left"
            className="angle"
            onClick={moveToLeft}
          />
          <img src={angleright}
            alt="angle-right"
            className="angle"
            onClick={moveToRight}
          />
        </div>
      </BannerStyled>
    </>
  )
}

export default Banner