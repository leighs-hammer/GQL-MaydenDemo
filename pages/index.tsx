
import React,  { useState } from 'react'
import Head from 'next/head'
import Stage from '../components/Stage'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import StarWarsDemo from '../components/StarWarsDemo'
const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/',
})


const Home = () => {


  // client
  // .query({
  //   query: gql`
  //     {
  //       allFilms {
  //         title
  //       }
  //   }
  //   `
  // })
  // .then(result => console.log(result));

  return (
    <ApolloProvider client={client}>
      <Stage>
        <StarWarsDemo />
      </Stage>
    </ApolloProvider>
  )
}

export default Home
