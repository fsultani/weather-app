import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import userLocationReducer from './userLocationReducer';

const reducers = combineReducers({
  weatherInfoPayload: weatherReducer,
  geoCoordinates: userLocationReducer
});

export default reducers;
