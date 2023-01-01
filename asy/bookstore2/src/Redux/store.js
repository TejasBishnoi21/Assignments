import {legacy_createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk  from "redux-thunk";
import { reducer as bookReducer } from "./Books/reducer";
import { reducer as authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({bookReducer,authReducer})

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;