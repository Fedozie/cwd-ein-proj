


export const useLocalStorage = (key) => {

  const addScribble = (value) => {
    try{
      localStorage.setItem(key, JSON.stringify(value))
    }catch(error){
      throw new Error("Scribble not added to storage")
    }
  }

  const removeScribble = () => {
    console.log("Remove Scribble")
  }

  const editScribble = () => {
    console.log("Edit Scribble")
  }

  return {addScribble, removeScribble, editScribble}
}