import React, { createContext, useState, useEffect, useContext } from 'react'
import getStorageValueAtKeyorSetFallback from '../_utls/localstorage';
import THEME_COLORS from '../constants/theme';
import { Colorset } from '../constants/theme';
import { setLocalStorage } from '../_utls/localstorage';

export type TThemeKey = string | 'dark' | 'light'

export interface IFuseTheme {
  themeKey: TThemeKey,
  toggleTheme: () => React.Dispatch<React.SetStateAction<string>> | any,
  colors: Colorset,
}

export const ThemeContext: React.Context<any> = createContext({})

export const ThemeProvider = ({children}) => {

  const [themeKey, setThemeKey] = useState('dark')

  const setOrUpdateThemKey = (key) => {
    const value = getStorageValueAtKeyorSetFallback('themekey', key)
    if(value !== key) {
      setThemeKey(value)
    }
  }
  
  const toggleTheme = () => {
    const toggledValue = themeKey === 'dark' ? 'light' : 'dark'
    const value = setLocalStorage('themekey', toggledValue)
    if(toggledValue !== themeKey) {
      setThemeKey(toggledValue)
    }
  }

  useEffect(() => {
  
    if(typeof window !== undefined) {
      setOrUpdateThemKey(themeKey)
    }
  
  }, [themeKey])

  const contextValue: IFuseTheme = {
    themeKey, 
    toggleTheme, 
    colors : THEME_COLORS[themeKey]
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}


export default ThemeProvider

export const useTheme = () => {
  const Context = useContext(ThemeContext)
  const {themeKey, toggleTheme, colors} = Context
  const returnObject:IFuseTheme = {themeKey, toggleTheme, colors}
  return returnObject
}