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

    const zipCodeCityName = weatherInfo &&
      weatherInfo.weatherInfoPayload &&
      weatherInfo.weatherInfoPayload.name;

    const geoLocationCityName = userLocation &&
      userLocation.geoCoordinates &&
      userLocation.geoCoordinates.name;

    const zipCodeTemp = weatherInfo &&
      weatherInfo.weatherInfoPayload &&
      Math.round(weatherInfo.weatherInfoPayload.main.temp);

    const geoLocationTemp = userLocation &&
      userLocation.geoCoordinates &&
      Math.round(userLocation.geoCoordinates.main.temp);

    const cityName = zipCodeCityName || geoLocationCityName;
    const temp = zipCodeTemp || geoLocationTemp;

    return (
      <div className="site-content">
        <div className="site-header">
          <div className="container">
            <a href="index.html" className="branding">
              <img src="images/logo.png" alt="" className="logo" />
              <div className="logo-type">
                <h1 className="site-title">Company name</h1>
                <small className="site-description">tagline goes here</small>
              </div>
            </a>
            <div className="main-navigation">
              <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
              <ul className="menu">
                <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                <li className="menu-item"><a href="news.html">News</a></li>
                <li className="menu-item"><a href="live-cameras.html">Live cameras</a></li>
                <li className="menu-item"><a href="photos.html">Photos</a></li>
                <li className="menu-item"><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div className="mobile-navigation"></div>
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
                  <div className="day">Monday</div>
                  <div className="date">6 Oct</div>
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
                      </div>
                    }
                    <span><img src="images/icon-umberella.png" alt="" />20%</span>
                    <span><img src="images/icon-wind.png" alt="" />18km/h</span>
                    <span><img src="images/icon-compass.png" alt="" />East</span>
                    {isLoading &&
                      <div className="getUserLocation-loading">
                        Looking you up (Big Brother style)...&nbsp;
                        <span>&#128064;</span>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className="forecast">
                <div className="forecast-header">
                  <div className="day">Tuesday</div>
                </div>
                <div className="forecast-content">
                  <div className="forecast-icon">
                    <img src="images/icons/icon-3.svg" alt="" width="48" />
                  </div>
                  <div className="degree">23<sup>o</sup>C</div>
                  <small>18<sup>o</sup></small>
                </div>
              </div>
              <div className="forecast">
                <div className="forecast-header">
                  <div className="day">Wednesday</div>
                </div>
                <div className="forecast-content">
                  <div className="forecast-icon">
                    <img src="images/icons/icon-5.svg" alt="" width="48" />
                  </div>
                  <div className="degree">23<sup>o</sup>C</div>
                  <small>18<sup>o</sup></small>
                </div>
              </div>
              <div className="forecast">
                <div className="forecast-header">
                  <div className="day">Thursday</div>
                </div>
                <div className="forecast-content">
                  <div className="forecast-icon">
                    <img src="images/icons/icon-7.svg" alt="" width="48" />
                  </div>
                  <div className="degree">23<sup>o</sup>C</div>
                  <small>18<sup>o</sup></small>
                </div>
              </div>
              <div className="forecast">
                <div className="forecast-header">
                  <div className="day">Friday</div>
                </div>
                <div className="forecast-content">
                  <div className="forecast-icon">
                    <img src="images/icons/icon-12.svg" alt="" width="48" />
                  </div>
                  <div className="degree">23<sup>o</sup>C</div>
                  <small>18<sup>o</sup></small>
                </div>
              </div>
              <div className="forecast">
                <div className="forecast-header">
                  <div className="day">Saturday</div>
                </div>
                <div className="forecast-content">
                  <div className="forecast-icon">
                    <img src="images/icons/icon-13.svg" alt="" width="48" />
                  </div>
                  <div className="degree">23<sup>o</sup>C</div>
                  <small>18<sup>o</sup></small>
                </div>
              </div>
              <div className="forecast">
                <div className="forecast-header">
                  <div className="day">Sunday</div>
                </div>
                <div className="forecast-content">
                  <div className="forecast-icon">
                    <img src="images/icons/icon-14.svg" alt="" width="48" />
                  </div>
                  <div className="degree">23<sup>o</sup>C</div>
                  <small>18<sup>o</sup></small>
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
