
import React,  { useState } from 'react'
import Head from 'next/head'
import Stage from '../components/Stage'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import StarWarsDemo from '../components/StarWars/StarWarsDemo'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/',
  fetch: fetch
})


const StarWars = () => {

  return (
    <ApolloProvider client={client}>
      <Stage>
        <StarWarsDemo />
      </Stage>
    </ApolloProvider>
  )
}

export default StarWars
