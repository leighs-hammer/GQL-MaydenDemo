import React, { useState, useRef } from 'react'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import LoadingBar from './LoadingBar'


const StarWarsDemo = () => {

  const query = `{
    allFilms {
      title
    }
  }`

  const {data, loading} = useQuery(gql`${query}`)  

  return (
    <div>
      <LoadingBar loading={loading} />
      
      {data && !loading && (
        <ul>
          {data.allFilms.map(film => (<li>{film.title}</li>))}
        </ul>
      )}
      
      {JSON.stringify(data)}
    </div>
  )
}

export default StarWarsDemo