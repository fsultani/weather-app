import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchWeather from './actions/fetchWeather';
import fetchUserLocation from './actions/fetchUserLocation';

import './App.css';

class App extends Component {
  state = {
    queriedLocation: '',
  }

  handleOnChange = event => {
    this.setState({ queriedLocation: event.target.value })
  }

  getLocationInfo = () => {
    this.props.fetchWeather(this.state.queriedLocation);
  }

  getUserLocation = () => {
    this.props.fetchUserLocation();
  }

  render() {
    const { weatherInfo, userLocation, isLoading } = this.props;
    const currentDate = new Date()
    const currentDay = currentDate.getDay();
    const calendarDays = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    }

    const calendarMonths = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    }

    const zipCodeCityName = weatherInfo && weatherInfo.weatherInfoPayload &&
      weatherInfo.weatherInfoPayload.name;

    const zipCodeTemp = weatherInfo && weatherInfo.weatherInfoPayload &&
      Math.round(weatherInfo.weatherInfoPayload.main.temp);

    const zipCodeHumidity = weatherInfo && weatherInfo.weatherInfoPayload &&
      weatherInfo.weatherInfoPayload.main.humidity;

    const zipCodeWindSpeed = weatherInfo && weatherInfo.weatherInfoPayload &&
      weatherInfo.weatherInfoPayload.wind.speed;

    const geoLocationCityName = userLocation && userLocation.geoCoordinates &&
      userLocation.geoCoordinates.name;

    const geoLocationTemp = userLocation && userLocation.geoCoordinates &&
      Math.round(userLocation.geoCoordinates.main.temp);

    const geoLocationHumidity = userLocation && userLocation.geoCoordinates &&
      Math.round(userLocation.geoCoordinates.main.humidity);

    const geoLocationWind = userLocation && userLocation.geoCoordinates &&
      Math.round(userLocation.geoCoordinates.wind.speed);

    const cityName = zipCodeCityName || geoLocationCityName;
    const temp = zipCodeTemp || geoLocationTemp;
    const humidity = zipCodeHumidity || geoLocationHumidity;
    const wind = zipCodeWindSpeed || geoLocationWind;

    return (
      <div className="site-content">
        <div className="site-header">
          <div className="container">
            <a href="index.html" className="branding">
              <img src="images/logo.png" alt="" className="logo" />
              <div className="logo-type">
                <h1 className="site-title">Weather Info</h1>
              </div>
            </a>
          </div>
        </div>
        <div className="hero" data-bg-image="images/banner.png">
          <div className="container">
            <form action="#" className="find-location">
              <input
                type="text"
                placeholder="Find your location..."
                onChange={this.handleOnChange}
                value={this.state.queriedLocation}
              />
              <button
                className="getLocationInfo"
                onClick={this.getLocationInfo}
              >
                Find
              </button>
            </form>
          </div>
        </div>
        <div className="forecast-table">
          <div className="container">
            <div className="forecast-container">
              <div className="today forecast">
                <div className="forecast-header">
                  <div className="day">{calendarDays[currentDay]}</div>
                  <div className="date">{calendarMonths[currentDate.getMonth()]} {currentDate.getDate()}, {currentDate.getFullYear()}</div>
                </div>
                <div className="forecast-content">
                  <div>
                    <button
                      className="getUserLocation"
                      onClick={this.getUserLocation}
                    >
                      Use My Location
                    </button>
                  </div>
                  <div className="weatherInfo">
                    {cityName &&
                      <div>
                        <div className="location">
                          {cityName}
                        </div>
                        <div className="degree">
                          <div className="num">
                            {temp}
                          <sup>o</sup>F
                          </div>
                          <div className="forecast-icon">
                            <img src="images/icons/icon-1.svg" alt="" width="90" />
                          </div>
                        </div>
                        <div>
                          <div className="additional-info">
                            <div>Humidity</div>
                            <div>Wind</div>
                          </div>
                          <div className="additional-info">
                            <div>{humidity}%</div>
                            <div>{Math.round(wind*0.621371)} mph</div>
                          </div>
                        </div>
                      </div>
                    }
                    {isLoading &&
                      <div className="getUserLocation-loading">
                        Looking you up...&nbsp;
                        <span role="img" aria-label="Eyes looking">&#128064;</span>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <div className="container">
            <p className="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
          </div>
        </footer>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  weatherInfo: state.weatherInfoPayload,
  userLocation: state.geoCoordinates,
  isLoading: state.geoCoordinates.isLoading
});

export default connect(
  mapStateToProps,
  {
    fetchWeather,
    fetchUserLocation
  }
)(App);
