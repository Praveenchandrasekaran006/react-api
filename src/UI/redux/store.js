import { createStore, combineReducers} from "redux";
import loadReducer from './reducers/loadReducer';


export default createStore(
    combineReducers({
        loadReducer : loadReducer,
        
    }),
    {}
);