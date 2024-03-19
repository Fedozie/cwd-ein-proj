


export const useLocalStorage = (key) => {
  


  const setItem = (value) => {
    try{
      localStorage.setItem(key, JSON.stringify(value))
    }catch(error){
      console.log(error)
    }
  }

  const removeItem = () => {
    
    console.log("remove me")
  }


  return {setItem, removeItem}
}