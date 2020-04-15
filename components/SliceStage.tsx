import React from 'react'
import SliceLoader from './SliceLoader'

interface IFSliceStageProps {
  slices?: any[]
}

const SliceStage: React.FC<IFSliceStageProps> = ({slices}) =>  {

  if(!slices || slices.length === 0) { return null}

  return(
    <div className="SliceStage">
      {slices.map((slice, index) => (<SliceLoader slice={slice} key={`SliceLoaded-${slice.slice_type}-${index}`} />))}
    </div>
  )

}

export default SliceStage