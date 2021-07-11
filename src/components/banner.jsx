import React, { useRef } from 'react'
import styled from 'styled-components'
import hero1 from '../images/mobile-image-hero-1.jpg'
import hero2 from '../images/mobile-image-hero-2.jpg'
import hero3 from '../images/mobile-image-hero-3.jpg'
import angleleft from '../images/icon-angle-left.svg'
import angleright from '../images/icon-angle-right.svg'

const BannerStyled = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all 1s;
  width: 100%;
  max-height: 329px;

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
  }

`

const Banner = () => {

  const refBanner = useRef()
  const arrImages = [hero1, hero2, hero3]
  let translateMeasure = 33.33

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
        <div className="container-images-banner" ref={refBanner}>
          <div className="container-image-banner" >
            <img src={hero1} alt="dining-room" className="image-banner" />
          </div>
          <div className="container-image-banner" >
            <img src={hero2} alt="dining-room" className="image-banner" />
          </div>
          <div className="container-image-banner" >
            <img src={hero3} alt="dining-room" className="image-banner" />
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