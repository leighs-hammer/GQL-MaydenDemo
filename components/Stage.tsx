import React, { useEffect } from 'react'
import Head from 'next/head';
import Header from './Header';
import { useTheme } from '../hooks/useTheme';
import Footer from './Footer';
import { useNavigation } from '../hooks/useNavigation';
import DebugPanel from './Debug/DepugPanel';


const Stage = ({children}) => {

  const {colors} = useTheme()

  return (
    <div className="container">
      <Header />
      <main className="MainContent">
        {children}
      </main>
      <Footer />
      <style jsx>{`
        .container {
          min-height: 100vh;
          background-color: ${colors.bkg};
          color: ${colors.text};
          transition: all 0.3s ease;
        }
        .MainContent {
          min-height: calc(100vh - 100px);
        }
      `}</style>
    </div>
  )
}

export default Stage