import React from "react"
import Head from 'next/head'
import '../styles/global.scss'
import ThemeProvider from '../hooks/useTheme'

const AppWrapper = ({Component, pageProps}) => {
  return (
    <div className="silenceWrapper">
      <Head>
        <title>GraphQL Demo</title>
        <link rel='icon' href='static/favicon.ico' />
        <link rel="icon" type="image/x-icon" href="static/favicon.ico" />

        <link rel="manifest" href="/static/manifest.json" />
        <meta name="theme-color" content="#222222"/>
        <meta name="description" content="Silence Apps, shopify and commerce experiences and custom development."/>
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default AppWrapper