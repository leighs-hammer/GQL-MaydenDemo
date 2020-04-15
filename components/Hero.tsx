import React from 'react'
import { THEME_CONTAINER_WIDTH } from '../constants/theme'
import { useTheme } from '../hooks/useTheme'
import Button from './Button'
	
import { RichText } from 'prismic-reactjs'
import { htmlSerializer } from '../_utls/htmlSerializer';
import { linkResolver } from '../_utls/linkResolver';
import PrismicRichText from './PrismicRichText';
import hexToRgba from 'hex-to-rgba'

const Hero = ({heroContent}) => {

  const {colors} = useTheme()

  return (
    <div className="Hero">
      <div className="container">
        <div className="contentContainer">
          <PrismicRichText raw={heroContent.title} />
          <PrismicRichText raw={heroContent.intro} />
          <div className="buttonGroup">
            <Button accented={true} text="Apps" url="/"/>
            <Button text="Services" url="/" subdued/>
            <Button text="Open Source" url="/" subdued/>
          </div>
        </div>
        
        <div className="imageContainer">
          <img src={heroContent.image} alt=""/>
        </div>

      </div>

      <style jsx>{`
        .Hero {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 300px;
          background-color: ${hexToRgba(colors.dark, 0.2)};
          padding: 16px;
          
        }
        .container {
          max-width: ${THEME_CONTAINER_WIDTH};
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .contentContainer, .imageContainer {
          flex: 1 auto;
        }
        .imageContainer {
          min-height: 450px;
        }
        .imageContainer img {
          animation: fadeIn 1s normal forwards ease-in-out;
          width: 100%;
        }
        .buttonGroup {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
        }
        
        @media screen and (max-width: 1023px) {
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column-reverse;
          }
          img {
            max-width: 600px;
          }
          h1, p {
            text-align: center;
            max-width: 500px;
          }
          .buttonGroup {
            justify-content: center;
          }
        }
        
        @media screen and (max-width: 1023px) { 
          .Hero {
            padding: 8px;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

      `}</style>
    </div>
  )
}

export default Hero