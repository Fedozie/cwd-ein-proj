


export const useLocalStorage = (key) => {

  const addScribble = (value) => {
    try{
      localStorage.setItem(key, JSON.stringify(value))
    }catch(error){
      throw new Error("Scribble not added to storage.")
    }
  }

  const removeScribble = (value, scribbleID) => {
    const localStorageArr = JSON.parse(localStorage.getItem(value, scribbleID))
    const locatedArrItemIndex =  localStorageArr.findIndex((arrItem) => arrItem.scribbleID === scribbleID);
    localStorageArr.splice(locatedArrItemIndex, 1)
    localStorage.setItem(key, JSON.stringify(localStorageArr))
  }

  return {addScribble, removeScribble}
}