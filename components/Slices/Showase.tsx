import React from 'react'
import { RichText, Link as PrismicLink } from 'prismic-dom';
import Link from 'next/link';
import { THEME_CONTAINER_WIDTH } from '../../constants/theme';
import { useTheme } from '../../hooks/useTheme';



const Showcase = ({slice}) =>  {

  const {colors} = useTheme()

  return (
    <section className="sliceRow">
      <div className="sliceContainer">
        <ul className="Showcase">
          {slice.items.map((item, index) => {
            return (
              <li key={`Showcase-${index}`}>
                <Link href="/showcases/[handle]" as={`/showcases/${item.target_showcase.uid}`}>
                  <a>
                    <img src={PrismicLink.url(item.squareimage.small)} alt=""/>
                    <h2>{RichText.asText(item.showcase_title)}</h2>
                    <p>{RichText.asText(item.showcase_intro)}</p>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <style jsx>{`
        .sliceRow {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .sliceContainer {
          max-width: ${THEME_CONTAINER_WIDTH};
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .Showcase {
          display: flex;
          jsutify-content: center;
        }
        .Showcase li {
          padding: 16px;
        }
        a { 
          color: ${colors.text};
          text-decoration: none;
        }
        img {
          width: 100%;
        }  
      `}</style>
    </section>
  )
}

export default Showcase