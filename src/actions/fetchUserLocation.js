import { FETCH_USER_LOCATION } from './types';

const fetchUserLocation = () => dispatch => {
  dispatch({ type: 'IS_FETCHING' });
  if ("geolocation" in navigator) {
    // check if geolocation is supported/enabled on current browser
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        // for when getting location is a success
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const API_KEY = 'fa8426178454105aa9e5a7f3ae72353a';
        const lat = `lat=${latitude}`;
        const lon = `lon=${longitude}`;
        fetch(`http://api.openweathermap.org/data/2.5/weather?&${lat}&${lon}&APPID=${API_KEY}&units=imperial`)
        .then(response => {
          // self.setState({ loading: false })
          return response.json()
        })
        .then(payload => dispatch({
          type: FETCH_USER_LOCATION,
          payload
        }))
        .catch(error => {
          alert("There was an error");
          console.log("error\n", error);
        })
     },
      function error(error_message) {
        alert("There was an error");
        console.log("error_message\n", error_message);
      }
    )
  } else {
      // geolocation is not supported
      // get your location some other way
      console.log('geolocation is not enabled on this browser')
      alert('Geolocation is not enabled on this browser. Enter a zip code.')
  }
};

export default fetchUserLocation;
