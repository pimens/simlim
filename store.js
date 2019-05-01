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
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  GETSTAFF: 'GETSTAFF',
  SETCURRENTSTAFF: 'SETCURRENTSTAFF',
  EDITSTAFF: 'EDITSTAFF'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        dataStaf: action.dt
      })
    case actionTypes.GETSTAFF:
      return Object.assign({}, state, {
        dataStaf: state.dataStaf + 10
      })
    case actionTypes.EDITSTAFF:
      return Object.assign({}, state, {
        editStaf: !state.editStaf
      })
    case actionTypes.SETCURRENTSTAFF:
      return Object.assign({}, state, {
        dataStaf: action.dt
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })
    default:
      return state
  }
}

// ACTIONS
export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() }
}
export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() }
}

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT }
}

export const decrementCount = (g) => {
  return { type: actionTypes.DECREMENT, dt: g }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}
export const refDataStaf = () => {
  // Axios.get("http://sampeweweh.dx.am/backend/index.php/tps/getStaff").then((response)=>{
  //   d=response.data
  // })
  return { type: actionTypes.GETSTAFF }
}
export const setCurrentStaff = (g) => {
  return { type: actionTypes.SETCURRENTSTAFF, dt: g }
}
export const editStaff = () => {
  return { type: actionTypes.EDITSTAFF }
}
export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
