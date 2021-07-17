import React from 'react'
import imagedark from '../images/image-about-dark.jpg'
import imagelight from '../images/image-about-light.jpg'
import styled from 'styled-components'

const AboutOurStyled = styled.div`

.container-text-about {
  margin: 3rem 2rem;
}


.title-second-section {
  margin-bottom: 1rem;
  letter-spacing: .2rem;
  font-size: .75rem;
  font-weight: 700;
}

.container-image-about {
  width: 100%;
}

.image-about {
  width: 100%;
  display:block;
}

  @media screen and (min-width: 950px){

  display: grid;
  grid-template-columns: 1fr 28rem 1fr;

  .text-principal {
    font-size: .6rem;
  }

  .container-text-about {
    margin: auto 2rem;
  }

  .image-li {
    min-height: 161px;
  }
  }
`

const AboutOur = () => {


  return (
    <AboutOurStyled className="section-about-our">
      <div className="container-image-about">
        <img src={imagedark} alt="space-dark" className="image-about" />
      </div>
      <div className="container-text-about">
        <h3 className="title-second-section">
          ABOUT OUR FORNITURE
        </h3>
        <p className="text-second-section text-principal">
          Our multifunctional collection blends design and
          function to suit your individual taste. Make each
          room unique or pick a cohesive theme that best
          express your interests and what inpires you.
          Find the forniture pieces you need, from traditional to
          contenporary styles or anything in between.
          Products specialists avaliable to help you
          create you dreams space.
        </p>
      </div>
      <div className="container-image-about">
        <img src={imagelight} alt="space-light" className="image-about image-li" />
      </div>
    </AboutOurStyled>


  )
}

export default AboutOur