import React from 'react'
import { htmlSerializer } from '../_utls/htmlSerializer';
import { linkResolver } from '../_utls/linkResolver';
import { RichText, } from 'prismic-reactjs';

interface IFPrismicRawText {
  raw: any,
}

const PrismicRichText: React.FC<IFPrismicRawText> = ({raw}) => {

  return (
    <div className="PrismicRTE">
      <RichText htmlSerializer={htmlSerializer} render={raw} linkResolver={linkResolver} />
    </div>
  )
}

export default PrismicRichText