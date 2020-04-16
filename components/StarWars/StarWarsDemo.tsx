import React, { useState, useRef } from 'react'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import LoadingBar from '../LoadingBar'
import THEME_COLORS from '../../constants/theme'
import { THEME_CONTAINER_WIDTH } from '../../constants/theme'
import { useTheme } from '../../hooks/useTheme'
import hexToRgba from 'hex-to-rgba'
import Poster from './Poster'


// Initial Query
const QUERY = `{
  allFilms {
    id
    title
  }
}`

const DETAILS_QUERY = `
query getSingleFilm($id: ID) {
  Film(id: $id) {
    id
    title
    openingCrawl
    producers
    releaseDate
    episodeId
  }
}`


const StarWarsDemo: React.FC = () => {

  // theme
  const {colors} = useTheme()
  
  // states
  const [selected, setSelected] = useState({id: 'millenium', title: 'Get started'})

  // Apollo Query
  const {data, loading, error} = useQuery(gql`${QUERY}`)  

  // Apollo Lazy
  const [fetchDetails, {called, loading: detailsLoading, data: details}] = useLazyQuery(gql`${DETAILS_QUERY}`, {variables: {id: selected.id}})
  
  // helpers: Is there data?
  const ready = data && !loading
  const notInit = selected.id !== 'millenium'
  const loadingState = loading || detailsLoading

  return (
    <React.Fragment>
      <LoadingBar loading={loadingState} />
    
      <div className="StarWarsDemo">
        <div className="overlay"></div>
        
        {ready && (
          <div className="container">
            
            <ul className="navigation">

              {data.allFilms.map(film => (
                  <li 
                    className={selected.id === film.id ? 'active': ''}
                    key={film.id}
                    onClick={() => setSelected(film)}
                  >{film.title}</li>
                )
              )}

            </ul>

            <div className="details">

              {notInit && !called && <div className="btn" onClick={() => fetchDetails()}>Show Details</div> }
            
              <div className="detailStack">
                
              {details && (
                <div className="detailsText">
                  <h3>{details.Film.title}</h3>
                  <p>Eppisode: {details.Film.episodeId}</p>
                  <p>{details.Film.openingCrawl}</p>
                </div>
              )}
              
                <Poster selected={selected} />


              </div>
              
            
            </div>


          </div>
        )}

        {error && (
          <pre className="error">
            {JSON.stringify(error, null, 2)}
          </pre>
        )}


        <style jsx>{`
          .StarWarsDemo {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            background: url('/Star-Wars-The-Rise-of-Skywalker-Featured-Image-1710x900.webp');
            background-size: cover;
            min-height: calc(100vh - 100px);
          }
          .overlay {
            z-index: 1;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            background-color: ${hexToRgba(colors.bkg, 0.7)};
          }
          .container {
            position: relative;
            z-index: 3;
            width: 100%;
            max-width: ${THEME_CONTAINER_WIDTH};
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 16px;
          }
          .navigation {
            min-width: 250px;
            background-color: ${hexToRgba(colors.bkg, 0.7)};
            padding: 16px;
            border: 1px solid ${colors.text};
            border-radius: 4px;

          }
          .navigation li {
            margin-bottom: 6px;
            opacity: 0.6;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .navigation li.active {
            color: ${colors.accent};
            font-weight: bold;
            opacity: 1;
          }
          .navigation li:hover {
            opacity: 1;
          }
          .details {
            flex: 1 auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .error {
            position: relative;
            z-index: 5;
            width: 100%;
            max-width: 850px;
            padding: 16px;
            margin: 16px;
            font-size: 14px;
            border: 1px solid ${colors.accent};
            border-radius: 4px;
            background-color: ${hexToRgba(colors.bkg, 0.7)};
          }
          .btn {
            background-color: ${colors.bkg};
            padding: 8px;
            padding-left: 16px;
            border: 1px solid ${hexToRgba(colors.text, 0.3)};
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            margin-bottom: 8px;
          }
          .btn:hover {
            background-color: ${colors.accent};
            color: ${THEME_COLORS.dark.text};
          }
          .detailStack {
            padding: 16px;
            display: flex;
          }
          .detailsText {
            padding: 10px;
            background-color: ${hexToRgba(colors.bkg, 0.7)};
            margin-right: 16px;
            border-radius: 4px;
            border: 1px solid ${colors.text};
          }
          .detailsText h3 {
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    </React.Fragment>
  )
}

export default StarWarsDemo