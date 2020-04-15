import React from 'react'
import { THEME_CONTAINER_WIDTH } from '../../constants/theme'
import PrismicRichText from '../PrismicRichText'
import { Link as PrismicLink, RichText } from 'prismic-dom';
import Button from '../Button';
import { linkResolver } from '../../_utls/linkResolver';
import { useTheme } from '../../hooks/useTheme';

const HighlightBanner = ({slice}) => {

  const {themeKey, colors} = useTheme()
  const {primary} = slice

  // @todo src set
  const imageLarge = themeKey === 'light'? primary.icon : primary.icon.dark
  const imageSmall = themeKey === 'light'? primary.icon.small : primary.icon.dark_small

  return (
    <div className="HighlightBanner">
      <div className="container">

        <div className="imgWrapper">
          <img src={PrismicLink.url(imageSmall)} alt={RichText.asText(primary.focus_title)}/>
        </div>

        <div className="textWrapper">
          <PrismicRichText raw={primary.focus_title} />
          <PrismicRichText raw={primary.focus_intro} />
          <div>
            {slice.items.map((item, index) => {
              return (
                <Button 
                  url={PrismicLink.url(item.button_link, linkResolver)} 
                  accented={item.button_type === 'accented'} 
                  subdued={item.button_type === 'subdued'} 
                  key={`HighlightBanner-cta-${index}`} 
                  text={item.button_text} 
                />
              )
            })}
          </div>
        </div>

      </div>


      <style jsx>{`
        .HighlightBanner {
          width: 100%;
          padding-top: 32px;
          padding-bottom: 32px;
          background-color: ${themeKey === 'light' ? primary.background_color_light : primary.background_color_dark};
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          max-width: ${THEME_CONTAINER_WIDTH};
          padding-left: 16px;
          padding-right: 16px;
          display: flex;
          flex-direction: ${slice.primary.align === 'right' ? 'row-reverse' : 'row'};
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .textWrapper {
          flex: 1 auto;
          width: 60%;
        }
        .imgWrapper {
          margin: 32px;
          flex: 1 auto;
          width: 35%;;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .imgWrapper img {
          border-radius: ${primary.crop_to_circle ? '50%' : ''};
          width: 200px;
        }
      `}</style>
    </div>
  )
}

export default HighlightBanner