import { FETCH_WEATHER } from './types';

const fetchWeather = zip => dispatch => {
  const API_KEY = 'fa8426178454105aa9e5a7f3ae72353a';
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}&units=imperial`)
  .then(res => res.json())
  .then(payload => dispatch({
    type: FETCH_WEATHER,
    payload
  }))
  .catch(error => {
    alert("There was an error");
    console.log("error\n", error);
  })
}

export default fetchWeather;
