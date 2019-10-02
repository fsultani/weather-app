import { FETCH_WEATHER, IS_FETCHING } from '../actions/types';

const initialState = {
  isLoading: false
};

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case IS_FETCHING:
      return {
        isLoading: true
      }
    case FETCH_WEATHER:
      return {
        weatherInfoPayload: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}

export default weatherReducer;
