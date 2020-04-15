import React from 'react'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'


const DebugPanel = () => {

  if(typeof window === undefined) { return null }
  
  const graphQLFetcher = (graphQLParams) =>  {
    return fetch('', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }

  return (
    <div>
      <GraphiQL fetcher={graphQLFetcher} />
    </div>
  )
}

export default DebugPanel