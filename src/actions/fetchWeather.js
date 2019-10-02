import { FETCH_WEATHER } from './types';

const fetchWeather = zip => dispatch => {
  const API_KEY = 'fa8426178454105aa9e5a7f3ae72353a';
  dispatch({ type: 'IS_FETCHING' });
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}&units=imperial`)
  .then(res => res.json())
  .then(payload => {
    if (payload.cod === 200) {
      return dispatch({
        type: FETCH_WEATHER,
        payload
      })
    } else if (payload.cod === '404') {
      alert(`${zip}: ${payload.message}.  Click "OK" to reload the page and try a different zip code.`);
      window.location.reload();
    } else {
      alert("There was an error. Click 'OK' to reload the page.");
      window.location.reload();
    }
  })
  .catch(error => {
    alert("There was an error");
    window.location.reload();
    console.log("error\n", error);
  })
}

export default fetchWeather;
