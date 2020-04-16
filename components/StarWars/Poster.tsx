import React from 'react'

const Poster = ({selected}) => {
  return (
    <React.Fragment>
      <div className="poster">
      {selected.id  && selected.id !== 'millenium' && (<img src={`/${selected.id}.jpeg`} alt={`${selected.title}`} />)}
      <style jsx>{`
      .poster img {
        width: 320px;
        border-radius: 4px;
      }
      `}</style>
      </div>
      </React.Fragment>
      )
    }
    
export default Poster
// {selected.id && selected.id === 'millenium'  && (<img src={`/${selected.id}.png`} alt={`${selected.title}`} />)}