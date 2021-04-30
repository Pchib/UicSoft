import {combineReducers} from 'redux'
// import token from './tokenReducer'
import signin from './signinReducer'
import headerLreducer from './headerLogionReduction'

export default combineReducers({
  headerLreducer,
      signin
  })