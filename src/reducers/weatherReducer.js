import { FETCH_WEATHER } from '../actions/types';

const initialState = null;

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_WEATHER:
      return {
        weatherInfoPayload: action.payload
      }
    default:
      return state;
  }
}

export default weatherReducer;
