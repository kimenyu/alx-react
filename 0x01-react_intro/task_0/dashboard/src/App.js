import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Login from './Login/Login.js';
import PropTypes from "prop-types";
import Notifications from './Notifications.js';
import CourseList from './CourseList/CourseList.js';

function App(isLoggedIn) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;