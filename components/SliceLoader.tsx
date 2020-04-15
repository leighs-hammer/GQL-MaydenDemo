import React from 'react'
import Showcase from './Slices/Showase'
import HighlightBanner from './Slices/HighlightBanner'

export interface IFSlice {
  slice: any
}

const SliceLoader: React.FC<IFSlice> = ({slice}) => {
  console.log(slice.slice_type)
  switch (slice.slice_type) {
    // Showcase
    case 'showcase':
      return (
        <div>
          <Showcase slice={slice} />
        </div>
      )

    case 'focus_bar':
      return (
        <div>
          <HighlightBanner slice={slice} />
        </div>
      )
  
    default:
      return null
  }


}

export default SliceLoader