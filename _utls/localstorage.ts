const getStorageValueAtKeyorSetFallback = (key, setValue) => {

  if(typeof window === undefined) {
    return false
  }

  const value = window.localStorage.getItem(key)
  // no value set one
  if(value === null) {
    window.localStorage.setItem(key, setValue)
    return setValue
  }

  // We have a value
  return window.localStorage.getItem(key)
}

export default getStorageValueAtKeyorSetFallback

export const setLocalStorage = (key, value) => {
  if(typeof window === undefined) {
    return false
  }
  window.localStorage.setItem(key, value)
  return value

}