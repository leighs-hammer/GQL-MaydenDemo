import React, { createContext, useContext, useState } from 'react'
import TopNav from '../components/Navigation/TopNav';

export interface IFNavigationProvider {
  children: React.ReactChildren | React.ReactElement,
}

export interface IFNavigationContext {
  nav: any
  navOpen: boolean, 
  toggleOpen: () => React.Dispatch<React.SetStateAction<string>> | any,
  setNav: any,
}

export type TuseNavigation = () => IFNavigationContext



export const NavigationContext: React.Context<any> = createContext({})

export const useNavigation: TuseNavigation = () => {
  const Context: IFNavigationContext = useContext(NavigationContext)
  const {nav, toggleOpen, navOpen, setNav} = Context

  return {nav, toggleOpen, navOpen, setNav}
}


export const NavigationProvider: React.FC<IFNavigationProvider> = ({children}) =>{
  
  const [navOpen, setNavOpen] = useState(false)
  const [nav, setNav] = useState({init: true})

  const context : IFNavigationContext = {
    nav,
    navOpen,
    setNav,
    toggleOpen: () => setNavOpen(!navOpen)
  }


  return (
      <NavigationContext.Provider value={context}>
        {children}
      </NavigationContext.Provider>
    )
}


export default NavigationProvider