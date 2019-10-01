import { FETCH_USER_LOCATION, IS_FETCHING } from '../actions/types';

const initialState = {
  isLoading: false
};

const userLocationReducer = (state = initialState, action) => {
  switch(action.type) {
    case IS_FETCHING:
      return {
        isLoading: true
      }
    case FETCH_USER_LOCATION:
      return {
        geoCoordinates: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}

export default userLocationReducer;
