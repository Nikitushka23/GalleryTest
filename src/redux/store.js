import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import {reducer} from './reducer'

export let store = createStore(reducer, applyMiddleware(thunk))

