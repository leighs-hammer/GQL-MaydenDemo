import React from 'react'
import PrismicRichText from '../PrismicRichText'



const NavSlice = ({slice, colors}) => {

  const hasSubItems = slice.items.length > 0

  return (
    <div className="NavSlice">
      
      <PrismicRichText raw={slice.primary.label} />

      {hasSubItems &&
        <ul>
          {slice.items.map((item, index) => {
            return (
              <li key={`navSlice-${index}`}>
                <PrismicRichText raw={item.sub_nav_link_label} key={`NavSlice-${index}`}/>
              </li>
            )
          })}
        </ul>
      }
      <style jsx>{`
        .NavSlice {
          padding: 16px;
          background-color: ${colors.dark};
          margin: 16px;
          flex: 1 auto;
          min-width: 200px;
          border-radius: 4px;
          box-shadow: 4px 4px 22px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>

  )
}

export default NavSlice