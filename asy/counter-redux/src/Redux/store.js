import { legacy_createStore } from 'redux'; // legacy_createStore creates a global object to store data
import reducer from './reducer';

const initialState = {count:0}

// const [state, dispatch] = useReducer(()=>{}, initialState)  // This is how we write useReducer funtions?
const store = legacy_createStore(reducer, initialState); // Look closely, Same pattern is followed here

export default store;
