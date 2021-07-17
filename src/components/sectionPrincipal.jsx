import React from 'react'
import styled from 'styled-components'
import arrow from '../images/icon-arrow.svg'

const SectionPrincipalStyled = styled.div`

  margin: calc(345px - 78px + 5rem) 2rem 5rem 2rem;

  .subtitle-principal {
    font-size: 1.6rem;
    color: var(--Dark);
    margin-bottom: 1.5rem;
  }

  .container-shop {
    display: flex;
    margin: 3.5rem 0;
  }

  .container-shop:hover {
    color: gray;
  } 

  .text-shop {
    font-weight: 600;
    letter-spacing: .5rem;
    margin-right: 2rem;
  }

  @media screen and (min-width: 950px){

    margin: auto 3.5rem;
  
    .container-shop {
      margin: 1.5rem 0;
    }

     .text-principal {
      font-size: .6rem;
    }

    .text-shop {
      font-size: .6rem;
    }

    .arrow-left {
      width: 10%;
    }
  }


`

const SectionPrincipal = () => {
  return (
    <SectionPrincipalStyled className="container-section-principal">
      <h2 className="subtitle-principal">
        Discover innovative ways to decorate
      </h2>
      <p className="text-principal">
        We provide unmatched quality, comfort and style
        for property owners across the country. Our
        experts combine form and function in bringing
        your vision life. Create a room in your own style
        with or collection and make your property a
        reflection of you and what you love.
      </p>
      <div className="container-shop">
        <p className="text-shop">
          SHOP NOW
        </p>
        <img src={arrow} alt="arrow-left" className="arrow-left" />
      </div>
    </SectionPrincipalStyled>
  )
}

export default SectionPrincipal