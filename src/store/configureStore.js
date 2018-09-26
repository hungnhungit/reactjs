import { createStore, combineReducers, applyMiddleware } from 'redux';
import tester from '../reducers/testducers';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({test:tester});

export default () => {
    const store = createStore(rootReducer);

    return store;
};