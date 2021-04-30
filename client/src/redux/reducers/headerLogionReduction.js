import {
    TOGGLE
  } from '../action/headerLoginmodalAction'
  
  const initialState = {
    setModal : false
  }
  
  export default (state = initialState, action) => {
    switch (action.type){
      case TOGGLE:
        return {
          setModal : !initialState.setModal
        }
      default:
        return state
    }
  }