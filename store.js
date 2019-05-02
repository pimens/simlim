import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Axios from 'axios';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 50,
  dataStaf: [],
  da: [],
  editStaf: false
}

export const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SETCURRENTSTAFF: 'SETCURRENTSTAFF',
  EDITSTAFF: 'EDITSTAFF'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) { 
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        dataStaf: action.dt
      })
    //staff
    case actionTypes.EDITSTAFF:
      return Object.assign({}, state, {
        editStaf: action.dt
      })
    case actionTypes.SETCURRENTSTAFF:
      return Object.assign({}, state, {
        dataStaf: action.dt
      })   
    default:
      return state
  }
}

// ACTIONS

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = (g) => {
  return { type: actionTypes.DECREMENT, dt: g }
}

export const setCurrentStaff = (g) => {
  return { type: actionTypes.SETCURRENTSTAFF, dt: g }
}
export const editStaff = (g) => {
  return { type: actionTypes.EDITSTAFF, dt:g }
}


export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
