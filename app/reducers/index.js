import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import hello from '../Hello/modules/reducers'

const rootReducer = combineReducers({
    hello
});

export default rootReducer;
