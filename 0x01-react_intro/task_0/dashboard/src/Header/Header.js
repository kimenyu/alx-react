import React from 'react';
import holberton from '../holberton-logo.jpg';
import './Header.css';

const Header = () => {
    return ( 
    <div className="App-header">
        <img src={holberton} alt="logo" />
        <h1>School dashboard</h1>
    </div>
     );
}
 
export default Header;